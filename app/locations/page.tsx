"use client";

import Image from "next/image";
import Link from 'next/link';
import { buildLocalePathname } from "@/lib/i18n";
import { useI18n } from "@/lib/useI18n";
export default function LocationsPage() {
  const { locale, messages } = useI18n();

  const getLocalizedHref = (path: string) => {
    return buildLocalePathname(path, locale);
  };

  return (
    <main className="pt-[136px]">
      {/* Hero Section */}
      <section className="relative h-[520px] sm:h-[640px] md:h-[819px] w-full overflow-hidden flex items-end">
        <Image
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
          alt={messages.locations.hero.alt}
          src="/location.png"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative max-w-[1380px] mx-auto px-6 pb-12 sm:pb-16 md:pb-20 w-full">
          <span className="font-label-caps text-primary-container uppercase tracking-[0.3em] mb-4 block">
            {messages.locations.hero.label}
          </span>
          <h1 className="font-display-lg text-white text-3xl sm:text-5xl md:text-[64px]">
            {messages.locations.hero.title}
          </h1>
        </div>
      </section>

      {/* Content Split Section: Info & Map */}
      <section className="max-w-[1380px] mx-auto py-16 sm:py-24 md:py-[120px] px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16">
        {/* Address and Hours (5/12) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-12">
            <span className="font-label-caps text-primary uppercase tracking-widest mb-6 block">
              {messages.locations.visit.label}
            </span>
            <h2 className="font-headline-xl text-2xl sm:text-4xl mb-6">
              {messages.locations.visit.title}
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-8 max-w-md text-base sm:text-lg">
              {messages.locations.visit.description}
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <div>
                  <p className="font-bold uppercase tracking-wider text-xs mb-1">
                    {messages.locations.visit.addressLabel}
                  </p>
                  <p className="font-body-md">Kingosgade 3, 1623 København</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">call</span>
                <div>
                  <p className="font-bold uppercase tracking-wider text-xs mb-1">
                    {messages.locations.visit.contactLabel}
                  </p>
                  <p className="font-body-md">91939263</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8 bg-surface-container border border-outline-variant">
            <h3 className="font-headline-md mb-6 text-lg sm:text-xl">{messages.locations.hours.title}</h3>
            <div className="space-y-4 font-body-md">
              <div className="flex justify-between border-b border-outline-variant pb-2">
                <span className="text-on-surface-variant">{messages.locations.hours.monFri}</span>
                <span className="font-medium">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant pb-2">
                <span className="text-on-surface-variant">{messages.locations.hours.saturday}</span>
                <span className="font-medium">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">{messages.locations.hours.sunday}</span>
                <span className="text-primary font-bold uppercase tracking-tighter">
                  {messages.locations.hours.closed}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section (7/12) */}
        <div className="lg:col-span-7 h-[360px] sm:h-[500px] lg:h-[600px] bg-stone-900 relative overflow-hidden group">
          <iframe
            width="100%"
            height="100%"
            style={{ 
              border: 0, 
              filter: 'grayscale(0.5)' // Dark theme effect
            }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2249.799797204561!2d12.539824677271813!3d55.67323819808386!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465253755452f1d9%3A0x6d36e2f1837f4d2f!2sKingosgade%203%2C%201623%20K%C3%B8benhavn%2C%20Denmark!5e0!3m2!1sen!2sdk!4v1715694000000!5m2!1sen!2sdk"
            className="hover:opacity-100 transition-opacity duration-700"
          ></iframe>
        </div>
      </section>

      {/* Getting There Section */}
      <section className="bg-surface-container-high py-16 sm:py-24 md:py-[120px] border-t border-outline-variant">
        <div className="max-w-[1380px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
          <div className="space-y-4">
            <span className="material-symbols-outlined text-primary text-4xl">
              directions_walk
            </span>
            <h4 className="font-headline-md text-xl sm:text-2xl">{messages.locations.gettingThere.walk.title}</h4>
            <p className="font-body-md text-on-surface-variant">
              {messages.locations.gettingThere.walk.description}
            </p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-primary text-4xl">
              directions_car
            </span>
            <h4 className="font-headline-md text-xl sm:text-2xl">{messages.locations.gettingThere.parking.title}</h4>
            <p className="font-body-md text-on-surface-variant">
              {messages.locations.gettingThere.parking.description}
            </p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-primary text-4xl">
              train
            </span>
            <h4 className="font-headline-md text-xl sm:text-2xl">{messages.locations.gettingThere.transit.title}</h4>
            <p className="font-body-md text-on-surface-variant">
              {messages.locations.gettingThere.transit.description}
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-24 md:py-[120px] text-center bg-surface">
        <div className="max-w-[800px] mx-auto px-6">
          <span
            className="material-symbols-outlined text-[#E7CC89] text-5xl mb-8"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            content_cut
          </span>
          <h2 className="font-headline-xl text-3xl sm:text-5xl md:text-[48px] mb-6 sm:mb-8 leading-[1.2]">
            {messages.locations.cta.title}
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-10 sm:mb-12 text-base sm:text-lg leading-[1.6]">
            {messages.locations.cta.description}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/book-now">
              <button className="bg-primary text-white px-12 sm:px-16 py-4 sm:py-5 font-label-caps uppercase tracking-widest text-xs sm:text-sm hover:opacity-90 transition-all">
                {messages.locations.cta.button}
              </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
