"use client";

import { FormEvent, useState } from "react";
import { Code2, Mail, MapPin, Send } from "lucide-react";
import { useLocale } from "@/components/locale-provider";
import { social } from "@/data/portfolio";
import { WhatsAppIcon } from "@/components/brand-icons";

export function Contact() {
  const { t, locale } = useLocale();
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [pending, setPending] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setStatus("idle");
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const projectType = String(data.get("projectType") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const typeLabel = t.types.find((item) => item.value === projectType)?.label ?? projectType;

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          projectType,
          message,
          fax_number: data.get("fax_number"),
        }),
      });
      if (!res.ok) throw new Error("fail");
      const result = (await res.json()) as { ok?: boolean; mailed?: boolean };
      if (!result.mailed) {
        const subject = encodeURIComponent(`Portfolio — ${name} (${typeLabel})`);
        const body = encodeURIComponent(`${name}\n${email}\n${typeLabel}\n\n${message}`);
        window.location.href = `mailto:${social.emails.join(",")}?subject=${subject}&body=${body}`;
      }
      setStatus("ok");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      setPending(false);
    }
  }

  return (
    <section id="contact" className="relative overflow-x-hidden bg-white py-24">
      <div className="pointer-events-none absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-blue-100/60 blur-[140px]" />
      <div className="relative mx-auto max-w-7xl px-4 lg:px-6">
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <span className="font-code text-xs font-bold tracking-widest text-violet-600 uppercase">
            {t.contactKicker}
          </span>
          <h2 className="mt-1 font-display text-3xl font-bold text-slate-900 sm:text-[38px]">
            {t.contactTitle}
          </h2>
          <p className="mt-2 text-slate-600">{t.contactLead}</p>
        </div>
        <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
          <div className="flex flex-col space-y-4 lg:col-span-5">
            <div className="space-y-4">
              <h3 className="font-display text-xl font-bold text-slate-900">{t.coords}</h3>
              <p className="text-sm text-slate-600">{t.coordsLead}</p>
              {social.emails.map((address) => (
                <a
                  key={address}
                  href={`mailto:${address}`}
                  className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-violet-300"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-violet-100 bg-violet-50 text-violet-600">
                    <Mail />
                  </span>
                  <span className="min-w-0">
                    <span className="block font-code text-[11px] font-semibold tracking-wider text-slate-400 uppercase">
                      {t.labelEmail}
                    </span>
                    <span className="block truncate font-code text-sm font-semibold text-slate-900 group-hover:text-violet-600">
                      {address}
                    </span>
                  </span>
                </a>
              ))}
              <a
                href={social.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-emerald-300"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-emerald-100 bg-emerald-50 text-emerald-600">
                  <WhatsAppIcon size={22} />
                </span>
                <span className="min-w-0">
                  <span className="block font-code text-sm font-semibold text-slate-900">{t.labelPhone}</span>
                </span>
              </a>
              <a
                href={social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm hover:border-indigo-300"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-indigo-100 bg-indigo-50 text-indigo-600">
                  <Code2 />
                </span>
                <span className="min-w-0">
                  <span className="block font-code text-sm font-semibold text-slate-900">{t.labelGithub}</span>
                </span>
              </a>
            </div>
            <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4">
              <MapPin className="shrink-0 text-violet-600" />
              <div>
                <p className="font-code text-xs font-bold text-slate-900">{social.location[locale]}</p>
                <p className="font-code text-xs text-slate-500">{t.remote}</p>
              </div>
            </div>
          </div>
          <form
            onSubmit={onSubmit}
            className="relative space-y-4 rounded-2xl border border-slate-200/90 bg-white p-8 shadow-[0_10px_35px_rgba(0,0,0,0.04)] lg:col-span-7"
          >
            <input
              type="text"
              name="fax_number"
              tabIndex={-1}
              autoComplete="off"
              className="sr-only"
              aria-hidden="true"
            />
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <label className="space-y-1">
                <span className="block font-code text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
                  {t.formName}
                </span>
                <input
                  id="contact-name"
                  name="name"
                  required
                  minLength={2}
                  maxLength={80}
                  autoComplete="name"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/15"
                />
              </label>
              <label className="space-y-1">
                <span className="block font-code text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
                  {t.formEmail}
                </span>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  maxLength={120}
                  autoComplete="email"
                  className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/15"
                />
              </label>
            </div>
            <label className="block space-y-1">
              <span className="block font-code text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
                {t.formType}
              </span>
              <select
                id="contact-type"
                name="projectType"
                required
                className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white"
              >
                {t.types.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </label>
            <label className="block space-y-1">
              <span className="block font-code text-[11px] font-semibold tracking-wider text-slate-600 uppercase">
                {t.formMessage}
              </span>
              <textarea
                id="contact-message"
                name="message"
                required
                minLength={5}
                maxLength={2000}
                rows={5}
                className="w-full resize-y rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-600/15"
              />
            </label>
            <button
              type="submit"
              disabled={pending}
              className="btn-primary flex w-full items-center justify-center gap-2 rounded-2xl py-2.5 font-display text-sm font-bold text-white disabled:opacity-60"
            >
              <Send size={16} /> {pending ? "…" : t.formSubmit}
            </button>
            {status === "ok" ? (
              <p className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-center text-sm text-emerald-800">
                {t.formOk} {t.formOkLead}
              </p>
            ) : null}
            {status === "error" ? (
              <p className="rounded-xl border border-red-200 bg-red-50 p-4 text-center text-sm text-red-800">
                {t.formError}
              </p>
            ) : null}
          </form>
        </div>
      </div>
    </section>
  );
}
