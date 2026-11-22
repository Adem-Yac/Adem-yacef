"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { PhoneFrame } from "@/components/phone-frame";

type ProjectGalleryProps = {
  /** Shown in the browser bar when a raw web screenshot (`/screen-…`) is framed. */
  host: string;
  shots: string[];
  labels: string[];
  title: string;
  choosePhoto: string;
  photoOf: string;
};

export function ProjectGallery({
  host,
  shots,
  labels,
  title,
  choosePhoto,
  photoOf,
}: ProjectGalleryProps) {
  const [photo, setPhoto] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const swipeX = useRef<number | null>(null);
  // Which shots are full phone screens (tall), measured once so they can be framed without a flash.
  const [tall, setTall] = useState<Record<string, boolean>>({});

  useEffect(() => {
    let alive = true;
    for (const src of shots) {
      const img = new Image();
      img.onload = () => {
        if (alive) setTall((t) => ({ ...t, [src]: img.naturalHeight / img.naturalWidth > 1.8 }));
      };
      img.src = src;
    }
    return () => {
      alive = false;
    };
  }, [shots]);
  const count = shots.length;
  const current = shots[photo] ?? "";
  const caption = labels[photo];

  const go = useCallback(
    (dir: -1 | 1) => {
      if (count < 2) return;
      setPhoto((index) => (index + dir + count) % count);
    },
    [count],
  );

  const show = useCallback(
    (index: number) => {
      if (index < 0 || index >= count) return;
      setPhoto(index);
    },
    [count],
  );

  useEffect(() => {
    const scroller = thumbsRef.current;
    const node = scroller?.querySelector<HTMLElement>(`[data-thumb="${photo}"]`);
    if (!scroller || !node) return;
    const left = node.offsetLeft - scroller.clientWidth / 2 + node.clientWidth / 2;
    scroller.scrollTo({ left, behavior: "smooth" });
  }, [photo]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") go(-1);
      if (event.key === "ArrowRight") go(1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [go]);

  if (!count) return null;

  return (
    <div className="mt-10">
      <div className="mb-3 flex items-center justify-between gap-3">
        <p className="text-sm text-muted">{choosePhoto}</p>
        <p className="text-sm text-muted">
          {photoOf} {photo + 1} / {count}
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {count > 1 ? (
          <button
            type="button"
            onClick={() => go(-1)}
            className="hidden shrink-0 cursor-pointer rounded-full border border-rule p-2.5 text-ink transition-colors hover:border-ink sm:inline-flex"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
        ) : null}

        <div
          className="relative h-[min(52vh,380px)] min-h-[240px] flex-1 overflow-hidden rounded-[28px] bg-card sm:h-[min(72vh,740px)] sm:min-h-[420px]"
          onPointerDown={(event) => {
            if (event.pointerType === "mouse" && event.button !== 0) return;
            swipeX.current = event.clientX;
          }}
          onPointerUp={(event) => {
            if (swipeX.current == null) return;
            const dx = event.clientX - swipeX.current;
            swipeX.current = null;
            if (Math.abs(dx) < 56) return;
            go(dx < 0 ? 1 : -1);
          }}
          onPointerCancel={() => {
            swipeX.current = null;
          }}
        >
          {/* Native img: Next/Image fill + stacked transforms was not swapping the visible shot. */}
          {current.includes("/screen-") && !tall[current] ? (
            // Raw web page captures go inside a browser window, top-aligned like a real page.
            <div key={current} className="absolute inset-0 flex items-center justify-center p-3 sm:p-8">
              <div className="flex max-h-full w-full flex-col overflow-hidden rounded-xl bg-white shadow-[0_24px_48px_-18px_rgb(11_16_38/0.35)] ring-1 ring-rule">
                <div className="flex h-8 shrink-0 items-center gap-1.5 border-b border-rule bg-[#f6f7fc] px-3">
                  <span className="size-2.5 rounded-full bg-[#ff5f57]" aria-hidden />
                  <span className="size-2.5 rounded-full bg-[#febc2e]" aria-hidden />
                  <span className="size-2.5 rounded-full bg-[#28c840]" aria-hidden />
                  <span className="mx-auto truncate rounded-md bg-white px-3 py-0.5 text-xs text-muted ring-1 ring-rule">{host}</span>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current}
                  alt={caption || `${title} — ${photoOf} ${photo + 1}`}
                  draggable={false}
                  className="min-h-0 w-full object-cover object-top select-none"
                />
              </div>
            </div>
          ) : tall[current] ? (
            // Raw phone screenshots go inside the Figma phone frame; composed mockups show as-is.
            <div key={current} className="absolute inset-0 flex items-center justify-center p-4 sm:p-6">
              <PhoneFrame className="h-full">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={current}
                  alt={caption || `${title} — ${photoOf} ${photo + 1}`}
                  draggable={false}
                  className="absolute inset-0 h-full w-full object-cover object-top select-none"
                />
              </PhoneFrame>
            </div>
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={current}
              src={current}
              alt={caption || `${title} — ${photoOf} ${photo + 1}`}
              draggable={false}
              className="absolute inset-0 h-full w-full object-contain object-center p-2 select-none sm:p-4"
            />
          )}

          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute top-1/2 left-2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/95 text-ink ring-1 ring-rule sm:hidden"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute top-1/2 right-2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full bg-paper/95 text-ink ring-1 ring-rule sm:hidden"
                aria-label="Next"
              >
                <ChevronRight size={18} />
              </button>
            </>
          ) : null}
        </div>

        {count > 1 ? (
          <button
            type="button"
            onClick={() => go(1)}
            className="hidden shrink-0 cursor-pointer rounded-full border border-rule p-2.5 text-ink transition-colors hover:border-ink sm:inline-flex"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        ) : null}
      </div>

      {caption ? <p className="mt-3 text-base text-ink-soft">{caption}</p> : null}

      {count > 1 ? (
        <div className="mt-3 flex justify-center gap-1.5">
          {shots.map((src, index) => (
            <button
              key={`dot-${src}-${index}`}
              type="button"
              onClick={() => show(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === photo ? "w-6 bg-ink" : "w-1.5 bg-rule hover:bg-muted"
              }`}
              aria-label={labels[index] ?? `${photoOf} ${index + 1}`}
              aria-current={index === photo}
            />
          ))}
        </div>
      ) : null}

      <div ref={thumbsRef} className="mt-4 flex gap-2 overflow-x-auto pb-1">
        {shots.map((src, index) => {
          const selected = index === photo;
          return (
            <button
              key={`thumb-${src}-${index}`}
              type="button"
              data-thumb={index}
              onClick={() => show(index)}
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-xl border-2 bg-card transition sm:h-20 sm:w-32 ${
                selected ? "border-accent" : "border-transparent opacity-70 hover:opacity-100"
              }`}
              aria-pressed={selected}
              aria-label={labels[index] ?? `${photoOf} ${index + 1}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={src} alt="" draggable={false} className="pointer-events-none h-full w-full object-contain object-top p-0.5" />
            </button>
          );
        })}
      </div>
    </div>
  );
}
