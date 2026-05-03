import Image from "next/image";

export default function LocationsPage() {
  return (
    <main className="pt-[136px]">
      {/* Hero Section */}
      <section className="relative h-[819px] w-full overflow-hidden flex items-end">
        <Image
          className="absolute inset-0 w-full h-full object-cover grayscale contrast-125"
          alt="Royal Cut by Barbosu Storefront"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxlv5tlGMsN-FfrqKu5xKCUjIkYCZl_fDZtJcqeldvAMYnsEtbUcds9twcxAveUwF7xTMggrMNq39Mn1zxLhhoZBGcjpAl8I9kYG6u1S5Bcg6giSeiLSgQszXkyagI3HK0iW5ZJchAoBK7tHaN4jTTOhLKOUkdaahcD4UKQOFLZzmXDBsUnqiwkdATqFSH_-UQUySaMWXlPnrAJ8QhQ0ZttLDcy3ujluCN4VtT3xhxfglFtJlC1MwCsZlzwE4452w-SWt-5KhB8uo"
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

        {/* Map Placeholder (7/12) */}
        <div className="lg:col-span-7 h-[600px] bg-stone-200 relative overflow-hidden group">
          <Image
            className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 transition-opacity duration-700"
            alt="Copenhagen Map Location"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDTk2eglyTJhVA0UAwNS3c2gkCubyvG0f_I5OU8KlbUW2RW92Mu5n8BVFShPC7BPErPKMIWMSS0oYrrCJYCW2dkeRGqvYIBqJ6GqVNQZcTd0galdvFxe7EewsoNkTTovmtsw9qSd0RvEZVvepihrhVVDOQUho_SAvYG4V8Bw0ni-IVXeydrQdNCWiVVCAVxJb9PXsMi_JhbXDivY1xxTYXFUJsgxuBCNYAmI3k7lFkbNE3fJvqvoUpcOWLACOmQNIidyg3IZVfJE_o"
            fill
            sizes="(max-width: 1024px) 100vw, 58vw"
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-12 h-12 bg-primary flex items-center justify-center rounded-full animate-pulse">
              <span
                className="material-symbols-outlined text-on-primary"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                location_on
              </span>
            </div>
          </div>
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
            <button className="bg-primary text-white px-16 py-5 font-label-caps uppercase tracking-widest text-sm hover:opacity-90 transition-all">
              Book Service
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
