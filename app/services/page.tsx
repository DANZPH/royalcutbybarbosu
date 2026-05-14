"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("haircut");
  const [navVisible, setNavVisible] = useState(true);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-120px 0px -70% 0px", // Offset by the maximum possible header height
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll("article[id]");
    sections.forEach((section) => observer.observe(section));

    // Handle Navbar Visibility for Sidebar Sticky Position
    const handleScroll = () => {
      const nav = document.getElementById("main-navbar");
      if (nav) {
        setNavVisible(nav.getAttribute("data-visible") === "true");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <main className="pt-[136px] scroll-smooth">
      {/* BEGIN: Hero Section */}
      <section className="max-w-[1380px] mx-auto px-6 pt-12 pb-20">
        <p className="font-label-caps tracking-[0.3em] uppercase mb-4 text-[#E7CC89]">
          Services
        </p>
        <h1 className="font-display-lg text-7xl md:text-8xl mb-12 leading-tight tracking-tight">
          Crafted for<br />Confidence.
        </h1>
        <div className="grid md:grid-cols-12 gap-12 items-center">
          {/* Hero Image Container */}
          <div className="md:col-span-7">
            <Image
              src="/picture1.jpg"
              alt="Barbershop Interior"
              width={1200}
              height={800}
              className="w-full h-auto \ shadow-2xl hover:scale-[1.02] transition-transform duration-700"
            />
          </div>
          {/* Hero Text */}
          <div className="md:col-span-5 space-y-8">
            <p className="font-body-lg text-xl text-on-surface-variant leading-relaxed max-w-sm italic">
              Keep your classic cut, try a new style, or personalize your trim.
              At Royal Cut by Barbosu, every cut is crafted to bring out your
              best. Book your appointment today.
            </p>
            <Link
              href="/book-now"
              className="bg-black text-white px-12 py-5 font-label-caps text-sm uppercase tracking-widest hover:bg-[#E7CC89] hover:text-black transition-all duration-300 inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
      {/* END: Hero Section */}

      {/* BEGIN: Banner Section */}
      <section className="bg-inverse-surface text-white py-32 overflow-hidden">
        <div className="max-w-[1380px] mx-auto px-6">
          <h2 className="font-display-lg text-6xl md:text-9xl leading-none">
            Your style. Our craft.
          </h2>
        </div>
      </section>
      {/* END: Banner Section */}

      {/* BEGIN: Main Content Grid */}
      <section className="bg-inverse-surface">
        <div className="max-w-[1380px] mx-auto px-6 -mt-20 flex flex-col md:flex-row gap-16 relative z-20">
          {/* Left Sidebar: Navigation & Info */}
          <aside className="md:w-1/4 space-y-8">
            <nav 
              className="bg-black/40 backdrop-blur-md p-2 border border-[#E7CC89]/20 shadow-2xl sticky transition-all duration-300 z-30"
              style={{ top: navVisible ? "150px" : "40px" }}
            >
              <ul className="flex flex-col">
                <li>
                  <a 
                    className={`block py-5 px-8 font-label-caps uppercase tracking-widest text-xs font-bold transition-all duration-300 ${activeSection === "haircut" ? "bg-[#E7CC89] text-black" : "text-white/70 hover:bg-[#E7CC89]/10 hover:text-[#E7CC89]"}`} 
                    href="#haircut"
                  >
                    Haircut
                  </a>
                </li>
                <li>
                  <a 
                    className={`block py-5 px-8 border-b border-[#E7CC89]/10 font-label-caps uppercase tracking-widest text-xs transition-all duration-300 ${activeSection === "hair-styling" ? "bg-[#E7CC89] text-black" : "text-white/70 hover:bg-[#E7CC89]/10 hover:pl-12 hover:text-[#E7CC89]"}`} 
                    href="#hair-styling"
                  >
                    Hair Styling
                  </a>
                </li>
                <li>
                  <a 
                    className={`block py-5 px-8 border-b border-[#E7CC89]/10 font-label-caps uppercase tracking-widest text-xs transition-all duration-300 ${activeSection === "hair-removal" ? "bg-[#E7CC89] text-black" : "text-white/70 hover:bg-[#E7CC89]/10 hover:pl-12 hover:text-[#E7CC89]"}`} 
                    href="#hair-removal"
                  >
                    Hair Removal
                  </a>
                </li>
                {/* <li>
                  <a 
                    className={`block py-5 px-8 border-b border-[#E7CC89]/10 font-label-caps uppercase tracking-widest text-xs transition-all duration-300 ${activeSection === "massages" ? "bg-[#E7CC89] text-black" : "text-white/70 hover:bg-[#E7CC89]/10 hover:pl-12 hover:text-[#E7CC89]"}`} 
                    href="#massages"
                  >
                    Massages
                  </a>
                </li> */}
                <li>
                  <a 
                    className={`block py-5 px-8 border-b border-[#E7CC89]/10 font-label-caps uppercase tracking-widest text-xs transition-all duration-300 ${activeSection === "scalp-care" ? "bg-[#E7CC89] text-black" : "text-white/70 hover:bg-[#E7CC89]/10 hover:pl-12 hover:text-[#E7CC89]"}`} 
                    href="#scalp-care"
                  >
                    Scalp Care
                  </a>
                </li>
                <li>
                  <a 
                    className={`block py-5 px-8 border-b border-[#E7CC89]/10 font-label-caps uppercase tracking-widest text-xs transition-all duration-300 ${activeSection === "facial-care" ? "bg-[#E7CC89] text-black" : "text-white/70 hover:bg-[#E7CC89]/10 hover:pl-12 hover:text-[#E7CC89]"}`} 
                    href="#facial-care"
                  >
                    Facial Care
                  </a>
                </li>
                <li>
                  <a 
                    className={`block py-5 px-8 border-b border-[#E7CC89]/10 font-label-caps uppercase tracking-widest text-xs transition-all duration-300 ${activeSection === "hair-color" ? "bg-[#E7CC89] text-black" : "text-white/70 hover:bg-[#E7CC89]/10 hover:pl-12 hover:text-[#E7CC89]"}`} 
                    href="#hair-color"
                  >
                    Hair Color
                  </a>
                </li>
                <li>
                  <a 
                    className={`block py-5 px-8 font-label-caps uppercase tracking-widest text-xs transition-all duration-300 ${activeSection === "other-services" ? "bg-[#E7CC89] text-black" : "text-white/70 hover:bg-[#E7CC89]/10 hover:pl-12 hover:text-[#E7CC89]"}`} 
                    href="#other-services"
                  >
                    Other Services
                  </a>
                </li>
              </ul>
              <div className="bg-[#E7CC89]/5 p-10 border-l-4 border-[#E7CC89] backdrop-blur-sm">
                <p className="font-body-sm text-[#E7CC89]/80 mb-6 leading-relaxed italic">
                  Prices and service offerings may vary.
                </p>
                <Link 
                  href="/book-now" 
                  className="bg-[#E7CC89] text-black px-8 py-4 font-label-caps text-xs font-bold uppercase tracking-widest w-full hover:bg-white transition-all inline-block text-center"
                >
                  Book Now
                </Link>
              </div>
            </nav>
          </aside>

          {/* Center & Right: Pricing Content */}
          <div className="md:w-3/4 space-y-40 pb-32">
            {/* BEGIN: Service Block - Haircut */}
            <article className="grid md:grid-cols-2 gap-16 scroll-mt-40" id="haircut">
              {/* Image Column */}
              <div className="relative group overflow-hidden max-w-[400px]">
                <Image
                  src="/haircut.webp"
                  alt="Haircut Detail"
                  width={400}
                  height={500}
                  className="w-full h-[500px] object-cover  group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Info Column */}
              <div className="flex flex-col justify-between py-4">
                <div className="text-white">
                  <h3 className="font-display-lg text-5xl mb-8 text-[#E7CC89]">Haircut</h3>
                  <p className="font-body-md text-white/70 mb-12 leading-relaxed italic">
                    A good haircut goes a long way. From first trims to signature
                    styles, we've been shaping generations with care, skill, and
                    steady hands. Every cut is done with pride, just like we've
                    always done it.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Haircut</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">480 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Haircut with Shampoo and Blowdry</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">580 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Head Shave / Skin Shave</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">700 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Hair Art</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">1140 kr</span>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-right">
                  <Link 
                    href="/book-now" 
                    className="border border-[#E7CC89]/40 text-[#E7CC89] px-12 py-5 font-label-caps text-xs uppercase tracking-widest hover:bg-[#E7CC89] hover:text-black transition-all flex items-center justify-center gap-4 ml-auto w-fit"
                  >
                    Book Now <span className="text-lg">›</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* BEGIN: Service Block - Hair Styling */}
            <article className="grid md:grid-cols-2 gap-16 scroll-mt-40" id="hair-styling">
              {/* Image Column */}
              <div className="relative group overflow-hidden max-w-[400px]">
                <Image
                  src="/picture2.jpg"
                  alt="Hair Styling"
                  width={400}
                  height={550}
                  className="w-full h-[550px] object-cover  group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Info Column */}
              <div className="flex flex-col justify-between py-4">
                <div className="text-white">
                  <div className="flex justify-between items-baseline mb-8">
                    <h3 className="font-display-lg text-5xl text-[#E7CC89]">Hair Styling</h3>
                    <span className="font-label-caps text-[10px] uppercase tracking-[0.2em] font-bold flex items-center gap-2 cursor-help hover:text-[#E7CC89] transition-colors text-white/50">
                      The Guide
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                      </svg>
                    </span>
                  </div>
                  <p className="font-body-md text-white/70 mb-12 leading-relaxed italic">
                    Big day or just another good hair day, we've got you covered.
                    Our barbers and stylists know how to bring out your best with
                    styling that holds up, feels right, and fits your routine.
                  </p>
                  <div className="space-y-6 mb-12">
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Shampoo</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">300 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Blowdry Short</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">300 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Blowdry Long</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">450 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Iron</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">550 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Down Perm with Xtenso</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">2000 kr</span>
                    </div>
                  </div>
                  {/* Specialty Perm Section */}
                  <div className="border-t border-[#E7CC89]/20 pt-10">
                    <h4 className="font-display-md italic text-2xl mb-6 text-[#E7CC89]">
                      Cold Perm with Dulcia
                    </h4>
                    <div className="grid grid-cols-3 gap-8 text-white">
                      <div className="group">
                        <p className="font-label-caps text-[10px] uppercase text-[#E7CC89]/60 font-bold tracking-[0.2em] mb-2 group-hover:text-[#E7CC89] transition-colors">
                          Short
                        </p>
                        <p className="font-display-lg text-3xl">2500 kr</p>
                      </div>
                      <div className="group">
                        <p className="font-label-caps text-[10px] uppercase text-[#E7CC89]/60 font-bold tracking-[0.2em] mb-2 group-hover:text-[#E7CC89] transition-colors">
                          Medium
                        </p>
                        <p className="font-display-lg text-3xl">3000 kr</p>
                      </div>
                      <div className="group">
                        <p className="font-label-caps text-[10px] uppercase text-[#E7CC89]/60 font-bold tracking-[0.2em] mb-2 group-hover:text-[#E7CC89] transition-colors">
                          Long
                        </p>
                        <p className="font-display-lg text-3xl">3500 kr</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-right">
                  <Link 
                    href="/book-now" 
                    className="border border-[#E7CC89]/40 text-[#E7CC89] px-12 py-5 font-label-caps text-xs uppercase tracking-widest hover:bg-[#E7CC89] hover:text-black transition-all flex items-center justify-center gap-4 ml-auto w-fit"
                  >
                    Book Now <span className="text-lg">›</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* BEGIN: Service Block - Hair Removal */}
            <article className="grid md:grid-cols-2 gap-16 scroll-mt-40" id="hair-removal">
              <div className="relative group overflow-hidden max-w-[400px]">
                <Image
                  src="/hair-removal.jpg"
                  alt="Hair Removal"
                  width={400}
                  height={550}
                  className="w-full h-[550px] object-cover  group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col justify-between py-4">
                <div className="text-white">
                  <h3 className="font-display-lg text-5xl mb-8 text-[#E7CC89]">Hair Removal</h3>
                  <p className="font-body-md text-white/70 mb-12 leading-relaxed italic">
                    Precision grooming for a clean, sharp look. Our specialized hair removal techniques 
                    ensure comfort and lasting results, tailored to your skin type and style.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Eyebrow Shaping</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">150 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Nose / Ear Waxing</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">100 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Full Face Grooming</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">400 kr</span>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-right">
                  <Link 
                    href="/book-now" 
                    className="border border-[#E7CC89]/40 text-[#E7CC89] px-12 py-5 font-label-caps text-xs uppercase tracking-widest hover:bg-[#E7CC89] hover:text-black transition-all flex items-center justify-center gap-4 ml-auto w-fit"
                  >
                    Book Now <span className="text-lg">›</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* BEGIN: Service Block - Massages */}
            {/* <article className="grid md:grid-cols-2 gap-16 scroll-mt-40" id="massages">
              <div className="relative group overflow-hidden max-w-[400px]">
                <Image
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHd7rvMt-Pay2wQmoUMevEiXjfCnq4Qb9GiPHC3748bKQmjaNCWYLUed7bbUGFFfv2k0e61yfwOaViHLndByWe6cYLCA54dVv9sGX0y3uxlRG1YGyhSIBsYT_UJMEj3kWm60OgGYg6MKkcycRojt1B9LJAuQ7C7C11ZmzTDrL7UFsjw3eS5ZcCXqLEWZ95uoi0DaDDAVCoEq40Rd35Lrv3Zzh3don5xsL1Cya400xuvwGfhV-qhK2OaEVN7_DnVZ142n3LWPvfFyo"
                  alt="Massages"
                  width={400}
                  height={550}
                  className="w-full h-[550px] object-cover  group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col justify-between py-4">
                <div className="text-white">
                  <h3 className="font-display-lg text-5xl mb-8 text-[#E7CC89]">Massages</h3>
                  <p className="font-body-md text-white/70 mb-12 leading-relaxed italic">
                    Unwind and rejuvenate with our signature massage treatments. Designed to relieve 
                    tension and restore balance, our sessions provide a sanctuary of peace in your busy day.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Scalp & Neck Massage</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">250 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Shoulder Relaxation</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">300 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Full Royal Treatment</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">600 kr</span>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-right">
                  <Link 
                    href="/book-now" 
                    className="border border-[#E7CC89]/40 text-[#E7CC89] px-12 py-5 font-label-caps text-xs uppercase tracking-widest hover:bg-[#E7CC89] hover:text-black transition-all flex items-center justify-center gap-4 ml-auto w-fit"
                  >
                    Book Now <span className="text-lg">›</span>
                  </Link>
                </div>
              </div>
            </article> */}

            {/* BEGIN: Service Block - Scalp Care */}
            <article className="grid md:grid-cols-2 gap-16 scroll-mt-40" id="scalp-care">
              <div className="relative group overflow-hidden max-w-[400px]">
                <Image
                  src="/haircolor.webp"
                  alt="Scalp Care"
                  width={400}
                  height={550}
                  className="w-full h-[550px] object-cover  group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col justify-between py-4">
                <div className="text-white">
                  <h3 className="font-display-lg text-5xl mb-8 text-[#E7CC89]">Scalp Care</h3>
                  <p className="font-body-md text-white/70 mb-12 leading-relaxed italic">
                    The foundation of healthy hair is a healthy scalp. Our deep-cleansing and 
                    nourishing treatments target dryness, congestion, and promote hair growth.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Detoxifying Scrub</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">350 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Nourishing Oil Therapy</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">400 kr</span>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-right">
                  <Link 
                    href="/book-now" 
                    className="border border-[#E7CC89]/40 text-[#E7CC89] px-12 py-5 font-label-caps text-xs uppercase tracking-widest hover:bg-[#E7CC89] hover:text-black transition-all flex items-center justify-center gap-4 ml-auto w-fit"
                  >
                    Book Now <span className="text-lg">›</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* BEGIN: Service Block - Facial Care */}
            <article className="grid md:grid-cols-2 gap-16 scroll-mt-40" id="facial-care">
              <div className="relative group overflow-hidden max-w-[400px]">
                <Image
                  src="/haircolor.webp"
                  alt="Facial Care"
                  width={400}
                  height={550}
                  className="w-full h-[550px] object-cover  group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col justify-between py-4">
                <div className="text-white">
                  <h3 className="font-display-lg text-5xl mb-8 text-[#E7CC89]">Facial Care</h3>
                  <p className="font-body-md text-white/70 mb-12 leading-relaxed italic">
                    Revitalize your skin with our professional facial treatments. We use premium 
                    products to cleanse, exfoliate, and hydrate, leaving you with a refreshed glow.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Express Facial</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">450 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Hot Towel Cleanse</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">300 kr</span>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-right">
                  <Link 
                    href="/book-now" 
                    className="border border-[#E7CC89]/40 text-[#E7CC89] px-12 py-5 font-label-caps text-xs uppercase tracking-widest hover:bg-[#E7CC89] hover:text-black transition-all flex items-center justify-center gap-4 ml-auto w-fit"
                  >
                    Book Now <span className="text-lg">›</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* BEGIN: Service Block - Hair Color */}
            <article className="grid md:grid-cols-2 gap-16 scroll-mt-40" id="hair-color">
              <div className="relative group overflow-hidden max-w-[400px]">
                <Image
                  src="/haircolor.webp"
                  alt="Hair Color"
                  width={400}
                  height={550}
                  className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col justify-between py-4">
                <div className="text-white">
                  <h3 className="font-display-lg text-5xl mb-8 text-[#E7CC89]">Hair Color</h3>
                  <p className="font-body-md text-white/70 mb-12 leading-relaxed italic">
                    Transform your look with expert color services. From subtle grey blending to 
                    bold new shades, our colorists use techniques that maintain hair health.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Grey Blending</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">800 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Full Color Appointment</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">1200 kr+</span>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-right">
                  <Link 
                    href="/book-now" 
                    className="border border-[#E7CC89]/40 text-[#E7CC89] px-12 py-5 font-label-caps text-xs uppercase tracking-widest hover:bg-[#E7CC89] hover:text-black transition-all flex items-center justify-center gap-4 ml-auto w-fit"
                  >
                    Book Now <span className="text-lg">›</span>
                  </Link>
                </div>
              </div>
            </article>

            {/* BEGIN: Service Block - Other Services */}
            <article className="grid md:grid-cols-2 gap-16 scroll-mt-40" id="other-services">
              <div className="relative group overflow-hidden max-w-[400px]">
                <Image
                  src="/haircolor.webp"
                  alt="Other Services"
                  width={400}
                  height={550}
                  className="w-full h-[550px] object-cover  group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="flex flex-col justify-between py-4">
                <div className="text-white">
                  <h3 className="font-display-lg text-5xl mb-8 text-[#E7CC89]">Other Services</h3>
                  <p className="font-body-md text-white/70 mb-12 leading-relaxed italic">
                    Specialized grooming needs handled with the same Royal precision. If you don't 
                    see what you need, just ask—we are masters of all traditional craft.
                  </p>
                  <div className="space-y-6">
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Beard Trim</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">350 kr</span>
                    </div>
                    <div className="flex items-baseline justify-between w-full mb-2 before:content-[''] before:flex-1 before:border-b before:border-dotted before:border-[#E7CC89]/30 before:mx-4 before:order-2">
                      <span className="order-1 whitespace-nowrap font-headline-md text-lg">Luxury Shave</span>
                      <span className="order-3 whitespace-nowrap font-display-lg text-xl text-[#E7CC89]">500 kr</span>
                    </div>
                  </div>
                </div>
                <div className="mt-16 text-right">
                  <Link 
                    href="/book-now" 
                    className="border border-[#E7CC89]/40 text-[#E7CC89] px-12 py-5 font-label-caps text-xs uppercase tracking-widest hover:bg-[#E7CC89] hover:text-black transition-all flex items-center justify-center gap-4 ml-auto w-fit"
                  >
                    Book Now <span className="text-lg">›</span>
                  </Link>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-[120px] text-center bg-surface">
        <div className="max-w-[800px] mx-auto px-6">
          <span
            className="material-symbols-outlined text-[#E7CC89] text-5xl mb-8"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            content_cut
          </span>
          <h2 className="font-headline-xl text-5xl md:text-[48px] mb-8 leading-[1.2]">
            Ready to define your legacy?
          </h2>
          <p className="font-body-lg text-on-surface-variant mb-12 text-lg leading-[1.6]">
            Our master barbers are ready to craft your individual style with the
            precision of centuries-old tradition.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/book-now">
              <button className="bg-primary text-white px-16 py-5 font-label-caps uppercase tracking-widest text-sm hover:opacity-90 transition-all">
                Book Service
              </button>
            </Link>
            <Link href="/locations">
            <button className="border-b-2 border-primary text-on-surface px-8 py-5 font-label-caps uppercase tracking-widest text-sm hover:bg-primary-container transition-all">
              View Locations
            </button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
