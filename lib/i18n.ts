export const LOCALES = ["da", "en-US"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "da";

export const LOCALE_LABELS: Record<Locale, string> = {
  da: "DA",
  "en-US": "US",
};

export const DATE_LOCALE: Record<Locale, string> = {
  da: "da-DK",
  "en-US": "en-US",
};

export const MESSAGES = {
  da: {
    common: {
      language: "Sprog",
      bookNow: "Book nu",
      bookAppointment: "Book tid",
      viewServices: "Se ydelser",
      reserveAppointment: "Reserver din tid",
      viewLocations: "Se lokationer",
      bookService: "Book service",
      callUs: "Ring til os",
      royalCrownAlt: "Royal krone",
    },
    nav: {
      phoneBanner: "Vil du helst booke pr. telefon? Ring til os på",
      heritage: "Tradition",
      services: "Ydelser",
      locations: "Lokationer",
      toggleNavigation: "Åbn/luk menu",
    },
    footer: {
      brand: "Royal cut by Barbosu",
      copyright: "© Royal cut by Barbosu | CVR 46410351",
      contactUs: "Kontakt os",
      hours: "Åbningstider",
      address: "Kingosgade 3, 1623 København",
      phone: "Telefon: 91939263",
      monFri: "Man - Fre: 09:00 - 18:00",
      saturday: "Lørdag: 10:00 - 16:00",
      sunday: "Søndag: Lukket",
      tagline: "Grooming i topklasse i København",
    },
    floatingCall: {
      label: "Ring til os",
      aria: "Ring til os",
    },
    home: {
      hero: {
        description:
          "Præcisionsteknikker møder tidløs tradition. Oplev grooming i topklasse i hjertet af København.",
      },
      mastery: {
        label: "Mesterskabet",
        title: "Udvalgte ydelser",
        description:
          "Hver service er et omhyggeligt ritual, skabt til at genskabe karakter og forfine din personlige stil.",
        signature: {
          title: "Royal signaturklip",
          description:
            "Præcisionsklip med saks og maskine, tilpasset din hovedform og hårstruktur.",
          price: "FRA 450 DKK",
        },
        ritual: {
          title: "barbering",
          price: "FRA 350 DKK",
        },
        beard: {
          title: "Skægformning",
          price: "FRA 250 DKK",
        },
      },
      legacy: {
        label: "Vores arv",
        title: "Skabt af tradition, forfinet af præcision.",
        paragraphs: [
          "Royal Cut by Barbosu er født af ønsket om at vende tilbage til kernen i herrepleje: den kompromisløse jagt på teknisk perfektion og det sociale ritual i barberens fristed.",
          "Midt i Kingosgade tror vi på, at en klipning ikke er en transaktion, men et identitetsstatement. Vores barberer er trænet i både klassiske teknikker og moderne æstetik, så hvert besøg i stolen resulterer i et look, der er tidløst og aktuelt.",
        ],
        link: "Læs vores historie",
      },
      cta: {
        title: "Sikr din plads i stolen",
        description:
          "Walk-ins er velkomne, men aftaler prioriteres. Kom forbi til en service, der løfter sig over det almindelige.",
        button: "Reserver din tid",
      },
      alts: {
        hero: "Royal Cut by Barbosu hero {index}",
        signature: "Signaturklip",
        ritual: "Traditionel barbering",
        beard: "Skægformning",
        heritage: "Arv-detalje",
      },
    },
    services: {
      hero: {
        label: "Ydelser",
        titleLine1: "Skabt til",
        titleLine2: "Selvtillid.",
        description:
          "Behold dit klassiske klip, prøv en ny stil, eller tilpas din trim. Hos Royal Cut by Barbosu bliver hver klipning skabt til at fremhæve det bedste i dig. Book din tid i dag.",
      },
      banner: {
        title: "Din stil. Vores håndværk.",
      },
      nav: {
        haircut: "Klipning",
        hairStyling: "Hårstyling",
        hairRemoval: "Hårfjerning",
        scalpCare: "Hovedbund",
        facialCare: "Ansigtspleje",
        hairColor: "Hårfarve",
        otherServices: "Andre ydelser",
      },
      sidebar: {
        note: "Priser og serviceudvalg kan variere.",
      },
      sections: {
        haircut: {
          title: "Klipning",
          description:
            "En god klipning gør en stor forskel. Fra de første trims til signaturstile har vi formet generationer med omhu, teknik og sikre hænder. Hver klipning udføres med stolthed, præcis som vi altid har gjort.",
          items: [
            "Klipning",
            "Klipning med vask og føn",
            "Hovedbarbering / Glatbarbering",
            "Hårkunst",
          ],
        },
        hairStyling: {
          title: "Hårstyling",
          guideLabel: "Guiden",
          description:
            "Stor dag eller bare en ekstra god hårdag - vi har dig. Vores barberer og stylister fremhæver det bedste med styling, der holder, føles rigtigt og passer til din hverdag.",
          items: [
            "Vask",
            "Føn kort",
            "Føn langt",
            "Udglatning",
            "Down Perm med Xtenso",
          ],
          permTitle: "Cold Perm med Dulcia",
          permSizes: ["Kort", "Mellem", "Lang"],
        },
        hairRemoval: {
          title: "Hårfjerning",
          description:
            "Præcis grooming for et rent, skarpt look. Vores specialiserede teknikker sikrer komfort og holdbare resultater, tilpasset din hud og stil.",
          items: ["Brynstyling", "Næse / Ørevoks", "Komplet ansigtspleje"],
        },
        scalpCare: {
          title: "Hovedbundspleje",
          description:
            "Fundamentet for sundt hår er en sund hovedbund. Vores dybderensende og nærende behandlinger målretter tørhed, ophobninger og fremmer hårvækst.",
          items: ["Detox-skrub", "Nærende olieterapi"],
        },
        facialCare: {
          title: "Ansigtspleje",
          description:
            "Giv huden nyt liv med professionelle ansigtsbehandlinger. Vi bruger premiumprodukter til at rense, eksfoliere og fugte, så du får en frisk glød.",
          items: ["Express ansigtsbehandling", "Rens med varm klud"],
        },
        hairColor: {
          title: "Hårfarve",
          description:
            "Forvandl dit look med professionelle farveservices. Fra diskret gråtoning til markante nuancer - vores colorister bruger teknikker, der bevarer hårets sundhed.",
          items: ["Gråtoning", "Fuld farvebehandling"],
        },
        otherServices: {
          title: "Andre ydelser",
          description:
            "Specialiserede behov håndteres med samme Royal-præcision. Finder du ikke det, du søger, så spørg - vi mestrer alt traditionelt håndværk.",
          items: ["Skægtrim", "Luksusbarbering"],
        },
      },
      cta: {
        title: "Klar til at definere din arv?",
        description:
          "Vores masterbarberer er klar til at skabe din personlige stil med præcision fra århundreders tradition.",
        primary: "Book service",
        secondary: "Se lokationer",
      },
      alts: {
        barbershopInterior: "Barbershop-interiør",
        haircut: "Klipningsdetalje",
        hairStyling: "Hårstyling",
        hairRemoval: "Hårfjerning",
        scalpCare: "Hovedbundspleje",
        facialCare: "Ansigtspleje",
        hairColor: "Hårfarve",
        otherServices: "Andre ydelser",
      },
    },
    locations: {
      hero: {
        label: "Vesterbro Atelier",
        title: "Kingosgade 3, København",
        alt: "Royal Cut by Barbosu facade",
      },
      visit: {
        label: "Besøg os",
        title: "Traditionel præcision i hjertet af byen",
        description:
          "Vores atelier i København repræsenterer toppen af grooming. Placeret i det levende Vesterbro tilbyder vi et tilbagetrukket fristed for dem, der søger mesterskab i hvert klip.",
        addressLabel: "Adresse",
        contactLabel: "Kontakt",
      },
      hours: {
        title: "Åbningstider",
        monFri: "Mandag — Fredag",
        saturday: "Lørdag",
        sunday: "Søndag",
        closed: "Lukket",
      },
      gettingThere: {
        walk: {
          title: "Til fods",
          description:
            "Kun få skridt fra Vesterbrogade. Vores indgang kendes på den gyldne heritage-insignia. Vi er 10 minutters gang fra Hovedbanegården.",
        },
        parking: {
          title: "Parkering",
          description:
            "Gadeparkering findes på Kingosgade og omkringliggende sidegader. Offentlige parkeringshuse ligger ved Vesterbros Torv, 3 minutters gang væk.",
        },
        transit: {
          title: "Offentlig transport",
          description:
            "Nærmeste metro er Frederiksberg Allé (M3 Cityring). Buslinjer 7A og 26 stopper ved Vesterbrogade / Kingosgade.",
        },
      },
      cta: {
        title: "Klar til at definere din arv?",
        description:
          "Vores masterbarberer er klar til at skabe din personlige stil med præcision fra århundreders tradition.",
        button: "Book service",
      },
    },
    bookNow: {
      steps: ["Service", "Dato & tid", "Ønsker", "Dine oplysninger"],
      headlines: [
        "Vælg din foretrukne service.",
        "Vælg en dato og et tidspunkt, der passer dig.",
        "Har du særlige ønsker?",
        "Fortæl os lidt om dig selv.",
      ],
      descriptions: [
        "Vælg blandt vores brede udvalg af grooming-services.",
        "Vælg din foretrukne dato og tid for din næste grooming-session.",
        "Fortæl os, hvis du har særlige præferencer eller stilarter i tankerne.",
        "Angiv dine kontaktoplysninger for at bekræfte din tid.",
      ],
      labels: {
        service: "Service*",
        appointmentDate: "Aftaledato*",
        appointmentTime: "Tidspunkt*",
        specialRequests: "Særlige ønsker",
        fullName: "Fuldt navn*",
        phone: "Telefonnummer*",
        email: "E-mailadresse",
        newCustomer: "Er du ny kunde?",
      },
      placeholders: {
        selectService: "Vælg service",
        selectDate: "Vælg dato",
        selectTime: "Vælg tidspunkt",
        requests: "Frisure, skægønske osv.",
        fullName: "Dit navn",
        phone: "09123456789",
        email: "eksempel@email.com",
      },
      buttons: {
        back: "Tilbage",
        proceed: "Fortsæt",
        confirm: "Bekræft booking",
        bookAnother: "Book en ny tid",
      },
      success: {
        title: "Booking bekræftet!",
        message:
          "Tak for din booking, {name}. Vi har modtaget din anmodning om {service} og ses den {date} kl. {time}.",
      },
      errors: {
        missing: "Udfyld venligst alle påkrævede felter.",
        submit: "Noget gik galt. Prøv igen.",
        network: "Kunne ikke oprette forbindelse til serveren. Tjek din internetforbindelse.",
      },
      calendar: {
        closeModal: "Luk vindue",
      },
      services: [
        "Klipning",
        "Klipning med vask og føn",
        "Hovedbarbering / Glatbarbering",
        "Hårkunst",
        "Vask",
        "Føn kort",
        "Føn langt",
        "Udglatning",
        "Down Perm med Xtenso",
        "Cold Perm med Dulcia - Kort",
        "Cold Perm med Dulcia - Mellem",
        "Cold Perm med Dulcia - Lang",
        "Andre",
      ],
      timeSlots: [
        "10:00",
        "10:30",
        "11:00",
        "11:30",
        "12:00",
        "12:30",
        "13:00",
        "13:30",
        "14:00",
        "14:30",
        "15:00",
        "15:30",
        "16:00",
        "16:30",
        "17:00",
        "17:30",
      ],
      daysOfWeek: ["Sø", "Ma", "Ti", "On", "To", "Fr", "Lø"],
      alts: {
        barbershop: "Barbershop",
      },
    },
  },
  "en-US": {
    common: {
      language: "Language",
      bookNow: "Book Now",
      bookAppointment: "Book Appointment",
      viewServices: "View Services",
      reserveAppointment: "Reserve Your Appointment",
      viewLocations: "View Locations",
      bookService: "Book Service",
      callUs: "Call us",
      royalCrownAlt: "Royal Crown",
    },
    nav: {
      phoneBanner: "Prefer to book by phone? Call us at",
      heritage: "Heritage",
      services: "Services",
      locations: "Locations",
      toggleNavigation: "Toggle navigation",
    },
    footer: {
      brand: "Royal cut by Barbosu",
      copyright: "© Royal cut by Barbosu | CVR 46410351",
      contactUs: "Contact Us",
      hours: "Hours",
      address: "Kingosgade 3, 1623 København",
      phone: "Phone: 91939263",
      monFri: "Mon - Fri: 09:00 - 18:00",
      saturday: "Saturday: 10:00 - 16:00",
      sunday: "Sunday: Closed",
      tagline: "Elevated Grooming Excellence in København",
    },
    floatingCall: {
      label: "Call us",
      aria: "Call us",
    },
    home: {
      hero: {
        description:
          "Precision techniques meet timeless tradition. Experience the pinnacle of grooming in the heart of Copenhagen.",
      },
      mastery: {
        label: "The Mastery",
        title: "Curated Services",
        description:
          "Every service is a meticulous ritual designed to restore character and refine your personal style.",
        signature: {
          title: "Signature Royal Cut",
          description:
            "Precision scissors work and clipper tapering tailored to your head shape and hair texture.",
          price: "FROM 450 DKK",
        },
        ritual: {
          title: "Shave",
          price: "FROM 350 DKK",
        },
        beard: {
          title: "Beard Sculpting",
          price: "FROM 250 DKK",
        },
      },
      legacy: {
        label: "Our Legacy",
        title: "Crafted by Tradition, Refined by Precision.",
        paragraphs: [
          "Royal cut by Barbosu was born from a desire to return to the core of men's grooming: the unwavering pursuit of technical perfection and the social ritual of the barbering sanctuary.",
          "Located in the heart of Kingosgade, we believe that a haircut is not a transaction, but a statement of identity. Our barbers are trained in both archival techniques and contemporary aesthetics, ensuring that every chair visit results in a look that is both timeless and relevant.",
        ],
        link: "Learn our story",
      },
      cta: {
        title: "Secure Your Place in the Chair",
        description:
          "Walk-ins are welcomed, but appointments are honored. Join us for a service that transcends the ordinary.",
        button: "Reserve Your Appointment",
      },
      alts: {
        hero: "Royal cut by Barbosu Hero {index}",
        signature: "Signature Haircut",
        ritual: "Traditional Shave",
        beard: "Beard Sculpting",
        heritage: "Heritage Detail",
      },
    },
    services: {
      hero: {
        label: "Services",
        titleLine1: "Crafted for",
        titleLine2: "Confidence.",
        description:
          "Keep your classic cut, try a new style, or personalize your trim. At Royal Cut by Barbosu, every cut is crafted to bring out your best. Book your appointment today.",
      },
      banner: {
        title: "Your style. Our craft.",
      },
      nav: {
        haircut: "Haircut",
        hairStyling: "Hair Styling",
        hairRemoval: "Hair Removal",
        scalpCare: "Scalp Care",
        facialCare: "Facial Care",
        hairColor: "Hair Color",
        otherServices: "Other Services",
      },
      sidebar: {
        note: "Prices and service offerings may vary.",
      },
      sections: {
        haircut: {
          title: "Haircut",
          description:
            "A good haircut goes a long way. From first trims to signature styles, we've been shaping generations with care, skill, and steady hands. Every cut is done with pride, just like we've always done it.",
          items: [
            "Haircut",
            "Haircut with Shampoo and Blowdry",
            "Head Shave / Skin Shave",
            "Hair Art",
          ],
        },
        hairStyling: {
          title: "Hair Styling",
          guideLabel: "The Guide",
          description:
            "Big day or just another good hair day, we've got you covered. Our barbers and stylists know how to bring out your best with styling that holds up, feels right, and fits your routine.",
          items: [
            "Shampoo",
            "Blowdry Short",
            "Blowdry Long",
            "Iron",
            "Down Perm with Xtenso",
          ],
          permTitle: "Cold Perm with Dulcia",
          permSizes: ["Short", "Medium", "Long"],
        },
        hairRemoval: {
          title: "Hair Removal",
          description:
            "Precision grooming for a clean, sharp look. Our specialized hair removal techniques ensure comfort and lasting results, tailored to your skin type and style.",
          items: ["Eyebrow Shaping", "Nose / Ear Waxing", "Full Face Grooming"],
        },
        scalpCare: {
          title: "Scalp Care",
          description:
            "The foundation of healthy hair is a healthy scalp. Our deep-cleansing and nourishing treatments target dryness, congestion, and promote hair growth.",
          items: ["Detoxifying Scrub", "Nourishing Oil Therapy"],
        },
        facialCare: {
          title: "Facial Care",
          description:
            "Revitalize your skin with our professional facial treatments. We use premium products to cleanse, exfoliate, and hydrate, leaving you with a refreshed glow.",
          items: ["Express Facial", "Hot Towel Cleanse"],
        },
        hairColor: {
          title: "Hair Color",
          description:
            "Transform your look with expert color services. From subtle grey blending to bold new shades, our colorists use techniques that maintain hair health.",
          items: ["Grey Blending", "Full Color Appointment"],
        },
        otherServices: {
          title: "Other Services",
          description:
            "Specialized grooming needs handled with the same Royal precision. If you don't see what you need, just ask—we are masters of all traditional craft.",
          items: ["Beard Trim", "Luxury Shave"],
        },
      },
      cta: {
        title: "Ready to define your legacy?",
        description:
          "Our master barbers are ready to craft your individual style with the precision of centuries-old tradition.",
        primary: "Book Service",
        secondary: "View Locations",
      },
      alts: {
        barbershopInterior: "Barbershop Interior",
        haircut: "Haircut Detail",
        hairStyling: "Hair Styling",
        hairRemoval: "Hair Removal",
        scalpCare: "Scalp Care",
        facialCare: "Facial Care",
        hairColor: "Hair Color",
        otherServices: "Other Services",
      },
    },
    locations: {
      hero: {
        label: "Vesterbro Atelier",
        title: "Kingosgade 3, København",
        alt: "Royal Cut by Barbosu Storefront",
      },
      visit: {
        label: "Visit Us",
        title: "Heritage Precision in the Heart of the City",
        description:
          "Our Copenhagen atelier represents the pinnacle of grooming. Located in the vibrant district of Vesterbro, we offer a secluded retreat for those who seek mastery in every cut.",
        addressLabel: "Address",
        contactLabel: "Contact",
      },
      hours: {
        title: "Opening Hours",
        monFri: "Monday — Friday",
        saturday: "Saturday",
        sunday: "Sunday",
        closed: "Closed",
      },
      gettingThere: {
        walk: {
          title: "Arrival by Foot",
          description:
            "Located just steps from Vesterbrogade, our entrance is distinguished by our heritage gold insignia. We are a 10-minute walk from the Central Station.",
        },
        parking: {
          title: "Parking",
          description:
            "Street parking is available on Kingosgade and surrounding side streets. Public garages are located on Vesterbros Torv, a 3-minute walk away.",
        },
        transit: {
          title: "Public Transit",
          description:
            "The nearest Metro station is Frederiksberg Allé (M3 Cityring). Bus lines 7A and 26 stop directly at Vesterbrogade / Kingosgade.",
        },
      },
      cta: {
        title: "Ready to define your legacy?",
        description:
          "Our master barbers are ready to craft your individual style with the precision of centuries-old tradition.",
        button: "Book Service",
      },
    },
    bookNow: {
      steps: ["Service", "Date & Time", "Requests", "Your Info"],
      headlines: [
        "Choose your preferred service.",
        "Pick a date and time that works for you.",
        "Any special requests for us?",
        "Tell us a bit about yourself.",
      ],
      descriptions: [
        "Select from our wide range of grooming services.",
        "Choose your preferred date and time for your next grooming session.",
        "Let us know if you have specific preferences or styles in mind.",
        "Provide your contact details to confirm your appointment.",
      ],
      labels: {
        service: "Service*",
        appointmentDate: "Appointment Date*",
        appointmentTime: "Appointment Time*",
        specialRequests: "Special Requests",
        fullName: "Full Name*",
        phone: "Phone Number*",
        email: "Email Address",
        newCustomer: "Are you a new customer?",
      },
      placeholders: {
        selectService: "Select Service",
        selectDate: "Select Date",
        selectTime: "Select Time",
        requests: "Hair style, beard preference, etc.",
        fullName: "Your Name",
        phone: "09123456789",
        email: "example@email.com",
      },
      buttons: {
        back: "Back",
        proceed: "Proceed",
        confirm: "Confirm Booking",
        bookAnother: "Book Another Appointment",
      },
      success: {
        title: "Booking Confirmed!",
        message:
          "Thank you for booking with us, {name}. We have received your request for a {service} and will see you on {date} at {time}.",
      },
      errors: {
        missing: "Please fill in all required fields.",
        submit: "Something went wrong. Please try again.",
        network: "Failed to connect to the server. Please check your internet connection.",
      },
      calendar: {
        closeModal: "Close modal",
      },
      services: [
        "Haircut",
        "Haircut with Shampoo and Blowdry",
        "Head Shave / Skin Shave",
        "Hair Art",
        "Shampoo",
        "Blowdry Short",
        "Blowdry Long",
        "Iron",
        "Down Perm with Xtenso",
        "Cold Perm with Dulcia - Short",
        "Cold Perm with Dulcia - Medium",
        "Cold Perm with Dulcia - Long",
        "Others",
      ],
      timeSlots: [
        "10:00 AM",
        "10:30 AM",
        "11:00 AM",
        "11:30 AM",
        "12:00 PM",
        "12:30 PM",
        "01:00 PM",
        "01:30 PM",
        "02:00 PM",
        "02:30 PM",
        "03:00 PM",
        "03:30 PM",
        "04:00 PM",
        "04:30 PM",
        "05:00 PM",
        "05:30 PM",
      ],
      daysOfWeek: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
      alts: {
        barbershop: "Barbershop",
      },
    },
  },
} as const;

export function isLocale(value: string): value is Locale {
  return (LOCALES as readonly string[]).includes(value);
}

export function getLocaleFromPathname(pathname?: string | null): Locale {
  if (!pathname) {
    return DEFAULT_LOCALE;
  }
  const segments = pathname.split("/");
  if (segments.length > 1 && isLocale(segments[1])) {
    return segments[1];
  }
  return DEFAULT_LOCALE;
}

export function stripLocaleFromPathname(pathname: string): string {
  const segments = pathname.split("/");
  if (segments.length > 1 && isLocale(segments[1])) {
    const rest = `/${segments.slice(2).join("/")}`;
    return rest === "/" ? "/" : rest.replace(/\/$/, "");
  }
  return pathname || "/";
}

export function buildLocalePathname(pathname: string, locale: Locale): string {
  const basePath = stripLocaleFromPathname(pathname || "/");
  if (locale === DEFAULT_LOCALE) {
    return basePath === "" ? "/" : basePath;
  }
  if (basePath === "/") {
    return `/${locale}`;
  }
  return `/${locale}${basePath}`;
}

export function formatMessage(
  template: string,
  params: Record<string, string | number> = {}
): string {
  return template.replace(/\{(\w+)\}/g, (match, key) => {
    if (Object.prototype.hasOwnProperty.call(params, key)) {
      return String(params[key]);
    }
    return match;
  });
}
