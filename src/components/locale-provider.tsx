"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useSyncExternalStore,
  type ReactNode,
} from "react";
import { copy, type Locale } from "@/data/portfolio";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: (typeof copy)["fr"];
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

let localeState: Locale = "fr";
const listeners = new Set<() => void>();

function emit() {
  for (const listener of listeners) listener();
}

function subscribe(onStoreChange: () => void) {
  listeners.add(onStoreChange);
  return () => listeners.delete(onStoreChange);
}

function getLocale() {
  return localeState;
}

function writeLocale(next: Locale) {
  localeState = next;
  try {
    window.localStorage.setItem("locale", next);
    document.documentElement.lang = next;
  } catch {
    /* private mode */
  }
  emit();
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const locale = useSyncExternalStore(subscribe, getLocale, () => "fr" as Locale);

  useEffect(() => {
    const stored = window.localStorage.getItem("locale");
    const next: Locale = stored === "en" ? "en" : "fr";
    if (next !== localeState) writeLocale(next);
    else document.documentElement.lang = localeState;
  }, []);

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale: writeLocale,
      t: copy[locale],
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const ctx = useContext(LocaleContext);
  if (!ctx) throw new Error("useLocale must be used within LocaleProvider");
  return ctx;
}
