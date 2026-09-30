"use client";

import { FormEvent, useEffect, useState } from "react";
import { MessageSquareQuote, Send } from "lucide-react";
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
    <div id="avis-clients" className="mt-12 border-t border-slate-200 pt-10 sm:mt-16 sm:pt-16">
      <div className="mb-8 max-w-2xl">
        <h3 className="font-display text-2xl font-bold text-slate-900">{t.reviewsTitle}</h3>
        <p className="mt-2 text-slate-600">{t.reviewsLead}</p>
      </div>
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-[0_10px_35px_rgba(0,0,0,0.04)] sm:p-8 lg:col-span-5"
        >
          <input
            type="text"
            name="fax_number"
            tabIndex={-1}
            autoComplete="off"
            className="sr-only"
            aria-hidden="true"
          />
          <label className="flex flex-col gap-1">
            <span className="font-code text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
              {t.reviewName}
            </span>
            <input
              name="name"
              required
              minLength={2}
              maxLength={80}
              autoComplete="name"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/15 sm:text-sm"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-code text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
              {t.reviewProject}
            </span>
            <input
              name="project"
              required
              minLength={2}
              maxLength={80}
              placeholder={t.reviewProject}
              autoComplete="off"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/15 sm:text-sm"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="font-code text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
              {t.reviewComment}
            </span>
            <textarea
              name="comment"
              required
              minLength={8}
              maxLength={500}
              rows={5}
              className="w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-900 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/15 sm:text-sm"
            />
          </label>
          <button
            type="submit"
            disabled={pending}
            className="btn-primary flex w-full cursor-pointer items-center justify-center gap-2 rounded-2xl py-2.5 font-display text-sm font-bold text-white disabled:opacity-60"
          >
            <Send size={16} /> {pending ? "…" : t.reviewSubmit}
          </button>
          {status === "ok" ? (
            <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm text-emerald-800">
              {t.reviewOk}
            </p>
          ) : null}
          {status === "error" ? (
            <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-800">
              {t.reviewError}
            </p>
          ) : null}
        </form>

        <div className="lg:col-span-7">
          {reviews.length === 0 ? (
            <p className="border border-dashed border-slate-200 px-5 py-10 text-center text-sm text-slate-500">
              {t.reviewEmpty}
            </p>
          ) : (
            <ul className="flex max-h-[34rem] flex-col gap-6 overflow-y-auto pr-1">
              {reviews.map((review) => (
                <li key={review.id} className="border-l-2 border-blue-600 pl-5">
                  <p className="font-display text-base font-bold text-slate-900">{review.name}</p>
                  <p className="mt-0.5 font-code text-[11px] font-semibold tracking-wider text-blue-600 uppercase">
                    {review.project}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    <MessageSquareQuote className="mr-1 inline size-4 text-slate-300" aria-hidden />
                    {review.comment}
                  </p>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
