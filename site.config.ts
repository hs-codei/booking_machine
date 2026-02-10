// Site Configuration
// Edit this file to customize for each client

export const siteConfig = {
  // Business identity
  name: "Praxis Bewegungszeit",
  tagline: "Physiotherapie in Charlottenburg",
  industry: "physio" as const, // physio | yoga | chiro | beauty

  // Contact information
  phone: "030 1234567",
  phoneTel: "+4930123456", // For tel: links
  email: "info@praxis-bewegungszeit.de",

  // Address
  address: {
    street: "Kantstraße 42",
    postal: "10625",
    city: "Berlin",
    district: "Charlottenburg",
    country: "DE"
  },

  // Opening hours
  hours: "Mo–Do 8:00–19:00 · Fr 8:00–15:00",
  hoursStructured: [
    { days: ["Monday", "Tuesday", "Wednesday", "Thursday"], opens: "08:00", closes: "19:00" },
    { days: ["Friday"], opens: "08:00", closes: "15:00" }
  ],

  // External service URLs
  siteUrl: "https://www.praxis-bewegungszeit.de",
  calendlyUrl: "https://calendly.com/heinrichsommeil/30min",
  formspreeId: "xabcdefg", // Replace with actual Formspree form ID
  googleMapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2428.2!2d13.3197!3d52.5065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTLCsDMwJzIzLjQiTiAxM8KwMTknMTAuOSJF!5e0!3m2!1sde!2sde!4v1234567890",
  googlePlaceId: "", // For reviews link

  // Social proof
  rating: "4.8",
  reviewCount: 67,
  yearFounded: 2012,
  teamSize: 6,
  patientsServed: "5.000+",

  // Geo coordinates (for Schema markup)
  geo: {
    latitude: 52.5065,
    longitude: 13.3197
  },

  // Branding colors
  colors: {
    primary: "#2B5F4E",        // Waldgrün - main brand color
    primaryLight: "#3A7D66",   // Hover states
    primaryDark: "#1E4639",    // Header, footer
    accent: "#C8956C",         // CTAs, highlights (warm sand)
    accentLight: "#D4A882",    // Accent hover
    background: "#FAFAF7",     // Page background (warm off-white)
    backgroundAlt: "#F0EDE8",  // Section backgrounds
    text: "#2C2C2C",           // Main text
    textLight: "#6B6B6B",      // Secondary text
    border: "#E0DDD6",         // Borders
    star: "#E8B840"            // Review stars
  },

  // Services offered (for services section and Schema)
  services: [
    {
      name: "Manuelle Therapie",
      description: "Gezielte Handgriffe zur Behandlung von Gelenkblockaden, Muskelverspannungen und Bewegungseinschränkungen.",
      icon: "hands"
    },
    {
      name: "Krankengymnastik",
      description: "Aktive und passive Übungen zur Wiederherstellung und Verbesserung der Beweglichkeit.",
      icon: "exercise"
    },
    {
      name: "Sportphysiotherapie",
      description: "Spezialisierte Behandlung für Sportler — von der Verletzungsrehabilitation bis zur Leistungsoptimierung.",
      icon: "sport"
    },
    {
      name: "Lymphdrainage",
      description: "Sanfte Entstauungstherapie bei Ödemen und Schwellungen, besonders nach Operationen.",
      icon: "lymph"
    },
    {
      name: "Wärmetherapie",
      description: "Fango, Heißluft und heiße Rolle zur Lockerung verspannter Muskulatur.",
      icon: "heat"
    },
    {
      name: "Kiefergelenk (CMD)",
      description: "Behandlung von Kiefergelenksbeschwerden, Zähneknirschen und damit verbundenen Kopfschmerzen.",
      icon: "jaw"
    }
  ],

  // Testimonials
  testimonials: [
    {
      text: "Nach meiner Knie-OP war ich ziemlich eingeschränkt. Das Team hat mich mit viel Geduld und Kompetenz wieder auf die Beine gebracht.",
      author: "Michael R.",
      date: "vor 2 Wochen",
      rating: 5
    },
    {
      text: "Ich komme seit Jahren hierher und bin jedes Mal begeistert. Die Therapeuten nehmen sich wirklich Zeit.",
      author: "Sandra K.",
      date: "vor 1 Monat",
      rating: 5
    },
    {
      text: "Freundliches Team, flexible Terminvergabe und vor allem: kompetente Behandlung. Meine chronischen Rückenschmerzen sind deutlich besser.",
      author: "Thomas W.",
      date: "vor 3 Wochen",
      rating: 5
    }
  ],

  // Trust badges/credentials
  credentials: [
    "Alle Kassen",
    "Hausbesuche möglich",
    "Barrierefreier Zugang",
    "Abendtermine Do bis 19 Uhr"
  ],

  // Meta/SEO defaults
  meta: {
    titleSuffix: " | Praxis Bewegungszeit",
    defaultDescription: "Ihre Physiotherapie-Praxis in Berlin-Charlottenburg. Manuelle Therapie, Krankengymnastik & Sportphysiotherapie. Alle Kassen. Jetzt Termin vereinbaren.",
    ogImage: "/images/og-image.jpg"
  }
};

// Type export for TypeScript support
export type SiteConfig = typeof siteConfig;
