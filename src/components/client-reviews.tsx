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
    <div id="avis-clients" className="mt-20 border-t border-rule pt-12 sm:mt-28 sm:pt-16">
      <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-8">
        <div className="lg:col-span-4">
          <h3 className="font-display text-3xl text-ink italic">{t.reviewsTitle}</h3>
          <p className="mt-3 text-sm leading-6 text-muted">{t.reviewsLead}</p>

          <form onSubmit={onSubmit} className="mt-8 flex flex-col gap-6">
            <input
              type="text"
              name="fax_number"
              tabIndex={-1}
              autoComplete="off"
              className="sr-only"
              aria-hidden="true"
            />
            <label className="block">
              <span className="block text-sm text-muted">{t.reviewName}</span>
              <input name="name" required minLength={2} maxLength={80} autoComplete="name" className="field" />
            </label>
            <label className="block">
              <span className="block text-sm text-muted">{t.reviewProject}</span>
              <input name="project" required minLength={2} maxLength={80} autoComplete="off" className="field" />
            </label>
            <label className="block">
              <span className="block text-sm text-muted">{t.reviewComment}</span>
              <textarea name="comment" required minLength={8} maxLength={500} rows={3} className="field resize-y" />
            </label>
            <div>
              <button
                type="submit"
                disabled={pending}
                className="link-underline cursor-pointer text-sm font-medium text-ink disabled:cursor-wait disabled:opacity-60"
              >
                {pending ? "…" : t.reviewSubmit} →
              </button>
              <p aria-live="polite" className="mt-3 text-sm">
                {status === "ok" ? <span className="text-ink">{t.reviewOk}</span> : null}
                {status === "error" ? <span className="text-accent-deep">{t.reviewError}</span> : null}
              </p>
            </div>
          </form>
        </div>

        <div className="lg:col-span-7 lg:col-start-6">
          {reviews.length === 0 ? (
            <p className="border border-dashed border-rule px-5 py-12 text-center font-display text-lg text-muted italic">
              {t.reviewEmpty}
            </p>
          ) : (
            <ul className="max-h-[40rem] columns-1 gap-8 overflow-y-auto pr-1 sm:columns-2">
              {reviews.map((review) => (
                <li key={review.id} className="mb-8 break-inside-avoid">
                  <blockquote className="font-display text-lg leading-snug text-ink">
                    <span className="mr-0.5 text-2xl leading-none text-accent" aria-hidden>“</span>
                    {review.comment}
                  </blockquote>
                  <p className="mt-3 text-sm text-ink">{review.name}</p>
                  <p className="font-code text-[11px] text-muted">{review.project}</p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
