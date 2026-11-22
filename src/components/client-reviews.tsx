"use client";

import { FormEvent, useEffect, useState } from "react";
import { useLocale } from "@/components/locale-provider";
import type { Review } from "@/lib/review-types";

export function ClientReviews() {
  const { t } = useLocale();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [pending, setPending] = useState(false);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/reviews")
      .then((res) => (res.ok ? res.json() : Promise.reject()))
      .then((data: { reviews?: Review[] }) => {
        if (!cancelled && Array.isArray(data.reviews)) setReviews(data.reviews);
      })
      .catch(() => {
        if (!cancelled) setReviews([]);
      });
    return () => {
      cancelled = true;
    };
  }, []);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("idle");
    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/reviews", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: data.get("name"),
          project: data.get("project"),
          comment: data.get("comment"),
          fax_number: data.get("fax_number"),
        }),
      });
      if (!res.ok) throw new Error("fail");
      const result = (await res.json()) as { ok?: boolean; review?: Review };
      if (!result.review) throw new Error("fail");
      setReviews((current) => [result.review as Review, ...current.filter((item) => item.id !== result.review?.id)]);
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setPending(false);
    }
  }

  return (
    <div id="avis-clients" className="mt-20 sm:mt-28">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h3 className="text-3xl font-bold text-ink">{t.reviewsTitle}</h3>
          <p className="mt-3 text-base leading-7 text-muted">{t.reviewsLead}</p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-4">
            <input
              type="text"
              name="fax_number"
              tabIndex={-1}
              autoComplete="off"
              className="sr-only"
              aria-hidden="true"
            />
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink-soft">{t.reviewName}</span>
              <input name="name" required minLength={2} maxLength={80} autoComplete="name" className="field" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink-soft">{t.reviewProject}</span>
              <input name="project" required minLength={2} maxLength={80} autoComplete="off" className="field" />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-sm font-medium text-ink-soft">{t.reviewComment}</span>
              <textarea name="comment" required minLength={8} maxLength={500} rows={3} className="field resize-y" />
            </label>
            <div>
              <button
                type="submit"
                disabled={pending}
                className="cursor-pointer rounded-full border-2 border-ink px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white disabled:cursor-wait disabled:opacity-60"
              >
                {pending ? "…" : t.reviewSubmit}
              </button>
              <p aria-live="polite" className="mt-3 text-sm">
                {status === "ok" ? <span className="text-ink">{t.reviewOk}</span> : null}
                {status === "error" ? <span className="text-red-700">{t.reviewError}</span> : null}
              </p>
            </div>
          </form>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {reviews.length === 0 ? (
            <p className="rounded-[28px] border-2 border-dashed border-rule px-5 py-14 text-center text-lg text-muted">
              {t.reviewEmpty}
            </p>
          ) : (
            <ul className="max-h-[40rem] columns-1 gap-4 overflow-y-auto pr-1 sm:columns-2">
              {reviews.map((review) => (
                <li key={review.id} className="mb-4 break-inside-avoid rounded-[24px] bg-card p-6">
                  <blockquote className="text-lg leading-snug text-ink">{review.comment}</blockquote>
                  <p className="mt-4 text-sm font-semibold text-ink">{review.name}</p>
                  <p className="text-sm text-muted">{review.project}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
