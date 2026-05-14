import Image from "next/image";
import Link from 'next/link';
export default function LocationsPage() {
  return (
    <main className="pt-[136px]">
      {/* Hero Section */}
      <section className="relative h-[819px] w-full overflow-hidden flex items-end">
        <Image
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
          alt="Royal Cut by Barbosu Storefront"
          src="/location.png"
          fill
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 hero-gradient"></div>
        <div className="relative max-w-[1380px] mx-auto px-6 pb-20 w-full">
          <span className="font-label-caps text-primary-container uppercase tracking-[0.3em] mb-4 block">
            Vesterbro Atelier
          </span>
          <h1 className="font-display-lg text-white text-6xl md:text-[64px]">
            Kingosgade 3, København
          </h1>
        </div>
      </section>

      {/* Content Split Section: Info & Map */}
      <section className="max-w-[1380px] mx-auto py-[120px] px-6 grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Address and Hours (5/12) */}
        <div className="lg:col-span-5 flex flex-col justify-center">
          <div className="mb-12">
            <span className="font-label-caps text-primary uppercase tracking-widest mb-6 block">
              Visit Us
            </span>
            <h2 className="font-headline-xl text-4xl mb-6">
              Heritage Precision in the Heart of the City
            </h2>
            <p className="font-body-lg text-on-surface-variant mb-8 max-w-md text-lg">
              Our Copenhagen atelier represents the pinnacle of grooming. Located
              in the vibrant district of Vesterbro, we offer a secluded retreat for
              those who seek mastery in every cut.
            </p>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">
                  location_on
                </span>
                <div>
                  <p className="font-bold uppercase tracking-wider text-xs mb-1">
                    Address
                  </p>
                  <p className="font-body-md">Kingosgade 3, 1623 København</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-primary">call</span>
                <div>
                  <p className="font-bold uppercase tracking-wider text-xs mb-1">
                    Contact
                  </p>
                  <p className="font-body-md">91939263</p>
                </div>
              </div>
            </div>
          </div>
          <div className="p-8 bg-surface-container border border-outline-variant">
            <h3 className="font-headline-md mb-6 text-xl">Opening Hours</h3>
            <div className="space-y-4 font-body-md">
              <div className="flex justify-between border-b border-outline-variant pb-2">
                <span className="text-on-surface-variant">Monday — Friday</span>
                <span className="font-medium">09:00 - 18:00</span>
              </div>
              <div className="flex justify-between border-b border-outline-variant pb-2">
                <span className="text-on-surface-variant">Saturday</span>
                <span className="font-medium">10:00 - 16:00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-on-surface-variant">Sunday</span>
                <span className="text-primary font-bold uppercase tracking-tighter">
                  Closed
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Map Section (7/12) */}
        <div className="lg:col-span-7 h-[600px] bg-stone-900 relative overflow-hidden group">
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
      <section className="bg-surface-container-high py-[120px] border-t border-outline-variant">
        <div className="max-w-[1380px] mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <span className="material-symbols-outlined text-primary text-4xl">
              directions_walk
            </span>
            <h4 className="font-headline-md text-2xl">Arrival by Foot</h4>
            <p className="font-body-md text-on-surface-variant">
              Located just steps from Vesterbrogade, our entrance is distinguished
              by our heritage gold insignia. We are a 10-minute walk from the
              Central Station.
            </p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-primary text-4xl">
              directions_car
            </span>
            <h4 className="font-headline-md text-2xl">Parking</h4>
            <p className="font-body-md text-on-surface-variant">
              Street parking is available on Kingosgade and surrounding side
              streets. Public garages are located on Vesterbros Torv, a 3-minute
              walk away.
            </p>
          </div>
          <div className="space-y-4">
            <span className="material-symbols-outlined text-primary text-4xl">
              train
            </span>
            <h4 className="font-headline-md text-2xl">Public Transit</h4>
            <p className="font-body-md text-on-surface-variant">
              The nearest Metro station is Frederiksberg Allé (M3 Cityring). Bus
              lines 7A and 26 stop directly at Vesterbrogade / Kingosgade.
            </p>
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
          </div>
        </div>
      </section>
    </main>
  );
}
