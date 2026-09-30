"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type ProjectGalleryProps = {
  shots: string[];
  labels: string[];
  title: string;
  choosePhoto: string;
  photoOf: string;
};

export function ProjectGallery({
  shots,
  labels,
  title,
  choosePhoto,
  photoOf,
}: ProjectGalleryProps) {
  const [photo, setPhoto] = useState(0);
  const thumbsRef = useRef<HTMLDivElement>(null);
  const swipeX = useRef<number | null>(null);
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
        <p className="font-code text-xs font-semibold tracking-wide text-slate-500 uppercase">{choosePhoto}</p>
        <p className="font-code text-xs text-slate-400">
          {photoOf} {photo + 1} / {count}
        </p>
      </div>

      <div className="flex items-center gap-2 sm:gap-3">
        {count > 1 ? (
          <button
            type="button"
            onClick={() => go(-1)}
            className="hidden shrink-0 rounded-full border border-slate-200 bg-white p-2.5 text-slate-800 shadow-sm hover:border-blue-300 hover:bg-white sm:inline-flex"
            aria-label="Previous"
          >
            <ChevronLeft size={18} />
          </button>
        ) : null}

        <div
          className="relative h-[min(52vh,380px)] min-h-[240px] flex-1 overflow-hidden rounded-2xl border border-slate-200 bg-slate-100 shadow-[0_10px_35px_rgba(0,0,0,0.06)] sm:h-[min(72vh,740px)] sm:min-h-[420px]"
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
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            key={current}
            src={current}
            alt={caption || `${title} — ${photoOf} ${photo + 1}`}
            draggable={false}
            className="absolute inset-0 h-full w-full object-contain object-center p-2 select-none sm:p-4"
          />

          {count > 1 ? (
            <>
              <button
                type="button"
                onClick={() => go(-1)}
                className="absolute top-1/2 left-2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/95 text-slate-800 shadow-sm hover:bg-white sm:hidden"
                aria-label="Previous"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => go(1)}
                className="absolute top-1/2 right-2 z-10 inline-flex size-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/95 text-slate-800 shadow-sm hover:bg-white sm:hidden"
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
            className="hidden shrink-0 rounded-full border border-slate-200 bg-white p-2.5 text-slate-800 shadow-sm hover:border-blue-300 hover:bg-white sm:inline-flex"
            aria-label="Next"
          >
            <ChevronRight size={18} />
          </button>
        ) : null}
      </div>

      {caption ? <p className="mt-3 text-sm font-medium text-slate-600">{caption}</p> : null}

      {count > 1 ? (
        <div className="mt-3 flex justify-center gap-1.5">
          {shots.map((src, index) => (
            <button
              key={`dot-${src}-${index}`}
              type="button"
              onClick={() => show(index)}
              className={`h-1.5 rounded-full transition-all ${
                index === photo ? "w-6 bg-blue-600" : "w-1.5 bg-slate-300 hover:bg-slate-400"
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
              className={`relative h-16 w-24 shrink-0 overflow-hidden rounded-lg border-2 bg-slate-100 transition sm:h-20 sm:w-32 ${
                selected ? "border-blue-600 ring-2 ring-blue-200" : "border-slate-200 hover:border-blue-300"
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
