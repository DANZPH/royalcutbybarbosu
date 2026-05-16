"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import {
  buildLocalePathname,
  LOCALES,
  LOCALE_LABELS,
  Locale,
  stripLocaleFromPathname,
} from "@/lib/i18n";
import { useI18n } from "@/lib/useI18n";

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { locale, messages } = useI18n();
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const controlNavbar = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 150) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const normalizedPathname = stripLocaleFromPathname(pathname);

  const getLocalizedHref = (path: string) => {
    return buildLocalePathname(path, locale);
  };

  const navLinkClass = (path: string) => {
    const isActive = normalizedPathname === path;
    return `font-serif uppercase tracking-widest text-sm transition-colors duration-300 pb-1 ${
      isActive
        ? "border-b-2 border-[#E7CC89] text-black"
        : "text-gray-600 hover:text-[#E7CC89]"
    }`;
  };

  const handleLocaleChange = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }
    const nextPathname = buildLocalePathname(pathname, nextLocale);
    const queryString = typeof window !== "undefined" ? window.location.search.replace(/^\?/, "") : "";
    const nextUrl = queryString ? `${nextPathname}?${queryString}` : nextPathname;
    document.cookie = `NEXT_LOCALE=${nextLocale}; path=/; max-age=31536000`;
    router.replace(nextUrl);
  };

  return (
    <>
      {/* Top Banner */}
      <div className="fixed top-0 w-full h-[40px] bg-[#E7CC89] flex items-center justify-center z-[60] text-[#1c1c18] text-sm font-medium">
        {messages.nav.phoneBanner} <span className="font-bold ml-1">91939263</span>
      </div>

      {/* TopAppBar */}
      <header className={`fixed top-[40px] w-full h-[96px] bg-white/90 backdrop-blur-md border-b border-[#E7CC89]/20 z-50 transition-all duration-300 ${isVisible ? "translate-y-0" : "-translate-y-full -translate-y-[40px] opacity-0 pointer-events-none"}`}>
        <div 
          className="flex justify-between items-center px-6 max-w-[1380px] mx-auto w-full h-full"
          id="main-navbar"
          data-visible={isVisible}
        >
          <Link href={getLocalizedHref("/")} className="flex flex-col items-center">
            <Image
              src="/crown.png"
              alt={messages.common.royalCrownAlt}
              width={42}
              height={42}
              className="opacity-80 mb-1"
              style={{ width: 'auto', height: 'auto' }}
            />
            <span className="text-xl font-serif font-bold text-black tracking-tight leading-none">ROYAL CUT</span>
            <span className="text-xl text-gray-600" style={{ fontFamily: "var(--font-ephesis)" }}>by Barbosu</span>
          </Link>
          <nav className="hidden md:flex gap-8 items-center h-full">
            <Link className={navLinkClass("/")} href={getLocalizedHref("/")}>{messages.nav.heritage}</Link>
            <Link className={navLinkClass("/services")} href={getLocalizedHref("/services")}>{messages.nav.services}</Link>
            <Link className={navLinkClass("/locations")} href={getLocalizedHref("/locations")}>{messages.nav.locations}</Link>
          </nav>
          <div className="flex items-center gap-4 md:gap-6">
            <span className="font-serif text-[#705c25] uppercase tracking-widest text-sm hidden lg:block">91939263</span>
            <div className="hidden sm:flex items-center gap-2" role="group" aria-label={messages.common.language}>
              {LOCALES.map((option) => {
                const isActive = option === locale;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleLocaleChange(option)}
                    aria-pressed={isActive}
                    className={`px-3 py-2 text-[10px] font-label-caps uppercase tracking-widest border transition-colors ${
                      isActive
                        ? "bg-[#E7CC89] text-black border-[#1c1c18]"
                        : "border-[#E7CC89]/40 text-[#705c25] hover:bg-[#E7CC89]/20"
                    }`}
                  >
                    {LOCALE_LABELS[option]}
                  </button>
                );
              })}
            </div>
            <Link 
              href={getLocalizedHref("/book-now")} 
              className="bg-[#1c1c18] text-[#e7cc89] px-6 py-3 font-label-caps uppercase tracking-widest hover:opacity-90 transition-opacity"
            >
              {messages.common.bookNow}
            </Link>
          </div>
        </div>
        <button
          type="button"
          className="md:hidden absolute left-1/2 -translate-x-1/2 -bottom-5 inline-flex items-center justify-center w-10 h-10 rounded-full border-[#E7CC89]/40 bg-white/95 text-[#1c1c18] shadow-md hover:bg-[#E7CC89]/15 transition-colors"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-nav"
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span className="sr-only">{messages.nav.toggleNavigation}</span>
          <span className="material-symbols-outlined text-[24px]">
            {isMenuOpen ? "keyboard_arrow_up" : "keyboard_arrow_down"}
          </span>
        </button>
        <nav
          id="mobile-nav"
          className={`md:hidden absolute left-0 right-0 top-full bg-white/95 backdrop-blur-md border-b border-[#E7CC89]/30 transition-all duration-300 ${isMenuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-2 pointer-events-none"}`}
        >
          <div className="max-w-[1380px] mx-auto px-6 py-6 flex flex-col gap-4">
            <Link className={navLinkClass("/")} href={getLocalizedHref("/")}>{messages.nav.heritage}</Link>
            <Link className={navLinkClass("/services")} href={getLocalizedHref("/services")}>{messages.nav.services}</Link>
            <Link className={navLinkClass("/locations")} href={getLocalizedHref("/locations")}>{messages.nav.locations}</Link>
            <div className="flex items-center gap-2 pt-2" role="group" aria-label={messages.common.language}>
              {LOCALES.map((option) => {
                const isActive = option === locale;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => handleLocaleChange(option)}
                    aria-pressed={isActive}
                    className={`px-3 py-2 text-[10px] font-label-caps uppercase tracking-widest border transition-colors ${
                      isActive
                        ? "bg-[#E7CC89] text-black border-[#1c1c18]"
                        : "border-[#E7CC89]/40 text-[#705c25] hover:bg-[#E7CC89]/20"
                    }`}
                  >
                    {LOCALE_LABELS[option]}
                  </button>
                );
              })}
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
