'use client';

import { usePathname } from "next/navigation";
import { DATE_LOCALE, getLocaleFromPathname, MESSAGES } from "@/lib/i18n";

export function useI18n() {
  const pathname = usePathname();
  const locale = getLocaleFromPathname(pathname);

  return {
    locale,
    messages: MESSAGES[locale],
    dateLocale: DATE_LOCALE[locale],
  };
}
