"use client";

import { useEffect, useRef } from "react";

// The logo's wave, live: a resting burst that swells under the pointer like a voice signal.
export function SignalWave({ className }: { className?: string }) {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let w = 0;
    let h = 0;
    let raf = 0;
    let visible = true;
    let px = 0.7;
    let energy = 0;
    let target = 0;

    const lines = [
      { amp: 1, width: 3, phase: 0, alpha: 1 },
      { amp: 0.62, width: 1.5, phase: 1.7, alpha: 0.45 },
      { amp: 0.34, width: 1, phase: 3.1, alpha: 0.3 },
    ];

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      const grad = ctx.createLinearGradient(0, 0, w, 0);
      grad.addColorStop(0, "#2f6bff");
      grad.addColorStop(1, "#8b5cf6");
      energy += (target - energy) * 0.06;
      const mid = h / 2;
      const cycles = Math.max(18, w / 22);

      for (const line of lines) {
        ctx.beginPath();
        ctx.strokeStyle = grad;
        ctx.globalAlpha = line.alpha;
        ctx.lineWidth = line.width;
        ctx.lineCap = "round";
        ctx.lineJoin = "round";
        for (let x = 0; x <= w; x += 2) {
          const u = x / w;
          const rest = 0.05 + 0.75 * Math.exp(-((u - 0.7) ** 2) / 0.006);
          const voice = energy * Math.exp(-((u - px) ** 2) / 0.012);
          const env = Math.min(1, rest + voice) * (0.65 + 0.35 * Math.sin(u * 11 - t * 0.0016));
          const y = mid + mid * 0.86 * env * line.amp * Math.sin(u * cycles + t * 0.004 + line.phase);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.stroke();
      }
      ctx.globalAlpha = 1;
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      draw(performance.now());
    };

    const loop = (t: number) => {
      draw(t);
      if (visible) raf = requestAnimationFrame(loop);
    };

    const onPointer = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      const near = event.clientY > rect.top - 160 && event.clientY < rect.bottom + 160;
      target = near ? 1 : 0;
      if (near) px = (event.clientX - rect.left) / rect.width;
    };
    const onLeave = () => {
      target = 0;
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    if (reduce) return () => ro.disconnect();

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      cancelAnimationFrame(raf);
      if (visible) raf = requestAnimationFrame(loop);
    });
    io.observe(canvas);
    window.addEventListener("pointermove", onPointer, { passive: true });
    document.addEventListener("pointerleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onPointer);
      document.removeEventListener("pointerleave", onLeave);
    };
  }, []);

  return <canvas ref={ref} aria-hidden className={className} />;
}
