import Image from "next/image";

export default function ServicesPage() {
  return (
    <main className="pt-[136px]">
      {/* Hero Section */}
      <section className="relative h-[614px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1aOdEWdCTU9E3yn9H3JOEMM-4CMud-Fv8L2jVmGXmSz9kqitlNy_AH3RNz1LtAHkCfTZFQZ0Xf-I1rSd1o2ldO3L7YO-ncKWo8hGWjEojZNA5Lr57_QKz0O5oDQEe2_Ja3UPkRIprohWNdrf7vFwBsqn_YRSromrL3DEYmZJ-Ee-vG3fTxjuSRJWE7HKhYNMU42ope_HlYeOG8ltKnxXaZzBvuuaVdxVOnewIBB_q2CIaPJ710o0hYJSMhWl3Azkxj6dF5qVXaBY"
            alt="A sophisticated close-up of a high-end barber's workstation"
            fill
            sizes="100vw"
            className="object-cover grayscale brightness-50"
            priority
          />
        </div>
        <div className="relative z-10 max-w-[1380px] mx-auto px-6 w-full text-white">
          <p className="font-label-caps tracking-[0.3em] uppercase mb-4 text-[#E7CC89]">
            Artisanal Excellence
          </p>
          <h1 className="font-display-lg text-6xl md:text-[64px] max-w-2xl mb-8 leading-[1.1] tracking-tight">
            Grooming Menu
          </h1>
          <div className="w-24 h-px bg-[#E7CC89]"></div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-[120px] max-w-[1380px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-[64px]">
          {/* Haircuts Section */}
          <div className="md:col-span-4 flex flex-col gap-12">
            <div className="border-l-4 border-[#E7CC89] pl-6">
              <h2 className="font-headline-md text-3xl md:text-[32px] uppercase tracking-tight mb-2 leading-[1.3]">
                Haircuts
              </h2>
              <p className="font-body-md text-on-surface-variant italic">
                Precision architectural cuts tailored to your unique profile.
              </p>
            </div>
            <div className="space-y-12">
              <div className="group cursor-default">
                <div className="flex justify-between items-baseline border-b border-outline-variant pb-2 mb-2">
                  <h3 className="font-headline-md text-2xl group-hover:text-primary transition-colors">
                    Signature Cut
                  </h3>
                  <span className="font-display-lg text-2xl">450kr</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-body-md text-on-surface-variant max-w-[80%]">
                    Full consultation, precision cut, wash, and style.
                  </p>
                  <span className="font-label-caps text-outline text-[10px]">
                    45 MIN
                  </span>
                </div>
              </div>
              <div className="group cursor-default">
                <div className="flex justify-between items-baseline border-b border-outline-variant pb-2 mb-2">
                  <h3 className="font-headline-md text-2xl group-hover:text-primary transition-colors">
                    Buzz & Taper
                  </h3>
                  <span className="font-display-lg text-2xl">300kr</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-body-md text-on-surface-variant max-w-[80%]">
                    Even length clipper cut with precise tapered edges.
                  </p>
                  <span className="font-label-caps text-outline text-[10px]">
                    30 MIN
                  </span>
                </div>
              </div>
              <div className="group cursor-default">
                <div className="flex justify-between items-baseline border-b border-outline-variant pb-2 mb-2">
                  <h3 className="font-headline-md text-2xl group-hover:text-primary transition-colors">
                    Junior Royal
                  </h3>
                  <span className="font-display-lg text-2xl">250kr</span>
                </div>
                <div className="flex justify-between items-center">
                  <p className="font-body-md text-on-surface-variant max-w-[80%]">
                    A refined experience for the next generation.
                  </p>
                  <span className="font-label-caps text-outline text-[10px]">
                    30 MIN
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Image Break and other sections */}
          <div className="md:col-span-8 flex flex-col gap-12">
            <div className="h-[500px] w-full overflow-hidden relative">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjLhIKlnToqCcOcTM---aKfNmST5gMLO5b9L-MPlWndn9g1qRs9_xx9m1lB7ee1IYIG9i7AgZnLF8d2HjnLXdH9hF2ZKgsL1iufo8U-9Wy64_KzWTqp8XrvuwT3cRDOhMGv_uwt256GmJ8TA3QkaZtVqcPTRq9fWGpVqbMlJMHDsa3ZK_png9TMWVnl13UNg9lg2-IWbuLx8cBePm9lFsM8riWHi1vjsN-xD6OcuKeePWAfYSphgJALrWJJtXVRR2I_8_aOUKRuKQ"
                alt="Minimalist, high-end barbershop interior"
                fill
                sizes="(max-width: 768px) 100vw, 66vw"
                className="object-cover grayscale hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Beard & Shave */}
              <div className="flex flex-col gap-8">
                <div className="border-l-4 border-[#E7CC89] pl-6">
                  <h2 className="font-headline-md text-3xl md:text-[32px] uppercase tracking-tight mb-2 leading-[1.3]">
                    Beard & Shave
                  </h2>
                  <p className="font-body-md text-on-surface-variant italic">
                    The ritual of the blade and towel.
                  </p>
                </div>
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex justify-between items-baseline border-b border-outline-variant pb-2 mb-2">
                      <h3 className="font-headline-md text-xl">
                        Traditional Hot Towel Shave
                      </h3>
                      <span className="font-display-lg text-xl">400kr</span>
                    </div>
                    <span className="font-label-caps text-outline text-[10px]">
                      40 MIN
                    </span>
                  </div>
                  <div className="group">
                    <div className="flex justify-between items-baseline border-b border-outline-variant pb-2 mb-2">
                      <h3 className="font-headline-md text-xl">
                        Beard Sculpting
                      </h3>
                      <span className="font-display-lg text-xl">350kr</span>
                    </div>
                    <span className="font-label-caps text-outline text-[10px]">
                      35 MIN
                    </span>
                  </div>
                </div>
              </div>

              {/* Treatments */}
              <div className="flex flex-col gap-8">
                <div className="border-l-4 border-[#E7CC89] pl-6">
                  <h2 className="font-headline-md text-3xl md:text-[32px] uppercase tracking-tight mb-2 leading-[1.3]">
                    Treatments
                  </h2>
                  <p className="font-body-md text-on-surface-variant italic">
                    Restorative care for hair and skin.
                  </p>
                </div>
                <div className="space-y-8">
                  <div className="group">
                    <div className="flex justify-between items-baseline border-b border-outline-variant pb-2 mb-2">
                      <h3 className="font-headline-md text-xl">
                        Clarifying Facial
                      </h3>
                      <span className="font-display-lg text-xl">250kr</span>
                    </div>
                    <span className="font-label-caps text-outline text-[10px]">
                      20 MIN
                    </span>
                  </div>
                  <div className="group">
                    <div className="flex justify-between items-baseline border-b border-outline-variant pb-2 mb-2">
                      <h3 className="font-headline-md text-xl">
                        Scalp Detox
                      </h3>
                      <span className="font-display-lg text-xl">200kr</span>
                    </div>
                    <span className="font-label-caps text-outline text-[10px]">
                      15 MIN
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Royal Treatment */}
      <section className="bg-inverse-surface py-[120px]">
        <div className="max-w-[1380px] mx-auto px-6 text-white">
          <div className="text-center mb-24">
            <p className="font-label-caps tracking-[0.4em] uppercase text-[#E7CC89] mb-4">
              Unrivaled Distinction
            </p>
            <h2 className="font-display-lg text-5xl md:text-[48px] leading-[1.2]">
              The Royal Treatment
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 relative aspect-[4/5] w-full">
              <Image
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCJ0P2otVZ-g-_4QUv1S9RrFI8OHRrLensUKKiunFPzUhAddvSc2IBtXr5dwyXX9a1MAlem8x13u4xYz5nFH4ITGIQ0tviVrljyN8JLhsUpa_c_JWI0mCqESiY0i70zoQRjWo-vlfZn6VOY2vkbOaoxWOjMqkHEs4BV_bq7MhNUUTFFTYvcHE0ve-Fp3r1_d6L5Sz7bdfHsBeO260NLWwPPmisfPv0K4Z9whtQdOggizu9V3mqCjEdidcgBIUqLjk_Q26yQLwXR_M8"
                alt="Distinguished gentleman receiving a luxury grooming service"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
            <div className="order-1 md:order-2 flex flex-col gap-8">
              <div className="p-12 border border-[#E7CC89]/30 bg-black/20">
                <h3 className="font-display-lg text-4xl mb-4 text-[#E7CC89]">
                  Barbosu&apos;s Masterpiece
                </h3>
                <p className="font-body-lg text-surface-container-high mb-8 leading-relaxed">
                  The ultimate grooming experience designed for the modern sovereign.
                  Includes our Signature Cut, Traditional Hot Towel Shave, Scalp Detox,
                  and a complimentary premium spirit or artisanal espresso.
                </p>
                <ul className="space-y-4 mb-12">
                  <li className="flex items-center gap-4 text-surface-container">
                    <span
                      className="material-symbols-outlined text-[#E7CC89]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-label-caps tracking-widest uppercase">
                      90 Minutes of Mastery
                    </span>
                  </li>
                  <li className="flex items-center gap-4 text-surface-container">
                    <span
                      className="material-symbols-outlined text-[#E7CC89]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-label-caps tracking-widest uppercase">
                      Personal Grooming Profile
                    </span>
                  </li>
                  <li className="flex items-center gap-4 text-surface-container">
                    <span
                      className="material-symbols-outlined text-[#E7CC89]"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      check_circle
                    </span>
                    <span className="font-label-caps tracking-widest uppercase">
                      Premium Product Kit
                    </span>
                  </li>
                </ul>
                <div className="flex flex-col sm:flex-row justify-between items-center pt-8 border-t border-[#E7CC89]/20">
                  <div className="text-left mb-6 sm:mb-0">
                    <p className="font-label-caps text-[#E7CC89] uppercase mb-1">
                      Total Experience
                    </p>
                    <p className="font-display-lg text-4xl">950kr</p>
                  </div>
                  <button className="bg-[#E7CC89] text-on-surface px-12 py-5 font-label-caps uppercase tracking-widest text-sm hover:bg-white transition-colors w-full sm:w-auto">
                    Secure the Crown
                  </button>
                </div>
              </div>
            </div>
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
            <button className="bg-primary text-white px-16 py-5 font-label-caps uppercase tracking-widest text-sm hover:opacity-90 transition-all">
              Book Service
            </button>
            <button className="border-b-2 border-primary text-on-surface px-8 py-5 font-label-caps uppercase tracking-widest text-sm hover:bg-primary-container transition-all">
              View Locations
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
