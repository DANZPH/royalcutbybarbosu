"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function Home() {
  const images = ["/picture4.jpg", "/picture1.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <>
      <main className="pt-[40px]">
        {/* Hero Section */}
        <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            {images.map((src, index) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-1000 ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  alt={`Royal cut by Barbosu Hero ${index + 1}`}
                  className="w-full h-full object-cover"
                  src={src}
                  fill
                  sizes="100vw"
                  priority={index === 0}
                />
              </div>
            ))}
            <div className="absolute inset-0 hero-gradient"></div>
          </div>
          <div className="relative z-10 text-center px-6 max-w-[900px]">
            {/* <span className="font-label-caps text-white tracking-[0.3em] uppercase block mb-6">Established Heritage</span> */}
            <div className="flex justify-center">
              <Image
                src="/crown.png"
                alt="Royal Crown"
                width={80}
                height={80}
                className="md:w-60 h-auto opacity-80"
              />
            </div>
            <h1 className="font-display-lg text-primary-container mb-2 text-6xl md:text-8xl">ROYAL CUT</h1>
            <h2 className="text-primary-container text-5xl md:text-7xl mb-12" style={{ fontFamily: "var(--font-ephesis)" }}>by Barbosu</h2>
            <p className="font-body-lg text-secondary-fixed mb-12 max-w-2xl mx-auto opacity-90 text-lg">
              Precision techniques meet timeless tradition. Experience the pinnacle of grooming in the heart of Copenhagen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              <button className="bg-primary-container text-on-primary-container px-12 py-5 font-label-caps uppercase tracking-widest text-sm hover:bg-white transition-colors">
                Book Appointment
              </button>
              <Link href="/services" className="border border-white text-white px-12 py-5 font-label-caps uppercase tracking-widest text-sm hover:bg-white/10 transition-colors">
                View Services
              </Link>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <span className="material-symbols-outlined text-white opacity-40">expand_more</span>
          </div>
        </section>

        {/* Our Expertise (Bento Grid) */}
        <section className="py-20 bg-surface">
          <div className="max-w-[1380px] mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-[64px] gap-8">
              <div className="max-w-xl">
                <span className="font-label-caps text-primary tracking-widest uppercase block mb-4">The Mastery</span>
                <h2 className="font-headline-xl text-on-surface text-4xl">Curated Services</h2>
              </div>
              <p className="font-body-md text-on-surface-variant max-w-sm">
                Every service is a meticulous ritual designed to restore character and refine your personal style.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 h-auto md:h-[800px]">
              <div className="md:col-span-8 group relative overflow-hidden bg-black">
                <Image
                  alt="Signature Haircut"
                  className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
                  src="/picture3.jpg"
                  fill
                  priority
                />
                <div className="absolute bottom-0 left-0 p-10 bg-gradient-to-t from-black/80 to-transparent w-full">
                  <h3 className="text-white font-headline-md text-3xl mb-2">Signature Royal Cut</h3>
                  <p className="text-gray-300 font-body-md mb-4 max-w-md">Precision scissors work and clipper tapering tailored to your head shape and hair texture.</p>
                  <span className="text-primary-container font-label-caps tracking-widest">FROM 450 DKK</span>
                </div>
              </div>
              <div className="md:col-span-4 flex flex-col gap-8">
                <div className="flex-1 group relative overflow-hidden bg-black">
                  <Image
                    alt="Traditional Shave"
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq8-aBlSwSnPyUs38AQEkoi47kHVKSceCdzZDo8-uWv7LLAX8EoukLPZVusTKXYpxM97WGFntjviVPdN7VaeqmCKpF6BHfvG3HARntjd1DRoZtV3QbZsr7JfMtyJAtXSpjIpuiQCzfH98xZ0yoDSQpMllywZFj8B5vQ5sXUKBo-HB3xMEtjwjGtiUA4GQNVwvZ2CdzqpyIKnNwpsJTjakNulLDwp7pQSGEGZ2b6Q0ynm5QA3-8LxjU8Uqd3I9nOBHr564FA0k48e8"
                    fill
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-headline-md text-2xl mb-1">Ritual Shave</h3>
                    <span className="text-primary-container font-label-caps tracking-widest">FROM 350 DKK</span>
                  </div>
                </div>
                <div className="flex-1 group relative overflow-hidden bg-black">
                  <Image
                    alt="Beard Sculpting"
                    className="w-full h-full object-cover opacity-70 group-hover:scale-105 transition-transform duration-700"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_dyqEQpyue4Uj4ghpNfACUCwvyXW3BhyWZkaRRkJENz5rw7PK81I7sitQPwnIBIn8GL0CuI7ZKsorsxuO5Zgi1WtPoumt27NJqkNy0FeMY1xqoHxMsgSiobVcpy2-Q0foYYIRgjp2__VZYn7b9yL4--elKyMPQYD1-6z8_8SZpq0N65sJGiYyjF0xqy0qQPW-e8LgiVh9jo5dtPRf2lFqdtMSho4zJPipdjNn-1SehrBfhlpx5iZAR9cyDA9YLyyh2WY14lz9Eg0"
                    fill
                  />
                  <div className="absolute inset-0 flex flex-col justify-end p-8 bg-gradient-to-t from-black/80 to-transparent">
                    <h3 className="text-white font-headline-md text-2xl mb-1">Beard Sculpting</h3>
                    <span className="text-primary-container font-label-caps tracking-widest">FROM 250 DKK</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Heritage & Precision Section */}
        <section className="py-20 bg-inverse-surface text-white">
          <div className="max-w-[1380px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-[96px] items-center">
            <div className="relative order-2 md:order-1">
              <div className="aspect-[4/5] overflow-hidden border border-primary/30 relative">
                <Image
                  alt="Heritage Detail"
                  className="w-full h-full object-cover grayscale contrast-125"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBsgMjtFPOTWVg5poDsJTwGxsw0YQHfh_nbOgpNcGTntV8dk2E-WEohv7MVeZmkgvx5KnpvtN7KYTN_s4n7VZV2CVaKz5cDulgAh-QhHEwmJ-g5S-gP__5mgvUOhDMaRHaXyuDJd2lv6c9vETmNslFHmNPhdhJgsJtwjViMsKbhzutvwUlcqLJirQhvmsz0yahqbfIff0dFSMp_jHvpguYEr4DmgeiEAIa8tj6efLIduuEqEH7zgnzELiG_9YwztCrbqu2eTzZz2zo"
                  fill
                />
              </div>
              <div className="absolute -bottom-12 -right-12 w-2/3 h-2/3 bg-primary/10 border border-primary/20 -z-10 hidden lg:block"></div>
            </div>
            <div className="order-1 md:order-2">
              <span className="font-label-caps text-primary-container tracking-widest uppercase block mb-6">Our Legacy</span>
              <h2 className="font-display-lg text-white text-4xl mb-8">Crafted by Tradition, Refined by Precision.</h2>
              <div className="space-y-6 opacity-80 font-body-lg text-lg">
                <p>Royal cut by Barbosu was born from a desire to return to the core of men's grooming: the unwavering pursuit of technical perfection and the social ritual of the barbering sanctuary.</p>
                <p>Located in the heart of Kingosgade, we believe that a haircut is not a transaction, but a statement of identity. Our barbers are trained in both archival techniques and contemporary aesthetics, ensuring that every chair visit results in a look that is both timeless and relevant.</p>
              </div>
              <div className="mt-12">
                <a className="inline-flex items-center gap-4 group" href="#">
                  <span className="font-label-caps uppercase tracking-[0.2em] group-hover:text-primary-container transition-colors">Learn our story</span>
                  <div className="h-[1px] w-12 bg-primary-container group-hover:w-24 transition-all"></div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-surface-container text-center">
          <div className="max-w-[800px] mx-auto px-6">
            <span className="material-symbols-outlined text-primary text-5xl mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
            <h2 className="font-display-lg text-on-surface text-4xl mb-8">Secure Your Place in the Chair</h2>
            <p className="font-body-lg text-on-surface-variant mb-12 text-lg">
              Walk-ins are welcomed, but appointments are honored. Join us for a service that transcends the ordinary.
            </p>
            <button className="bg-[#1c1c18] text-[#E7CC89] px-16 py-6 font-label-caps uppercase tracking-widest hover:bg-primary transition-colors">
              Reserve Your Appointment
            </button>
          </div>
        </section>
      </main>
    </>
  );
}

