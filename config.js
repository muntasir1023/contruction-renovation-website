/**
 * ============================================================================
 * SITE CONFIGURATION & BUSINESS VARIABLES (DEMO SHOWCASE)
 * ============================================================================
 * Centralized business data dictionary. Replace any values below to customize
 * for any business in under 5 minutes.
 */

const SITE_CONFIG = {
  // 1. Business Identity
  business: {
    name: "Apex Craft & Living",
    legalName: "Apex Craft & Living Studio Ltd.",
    shortName: "Apex",
    category: "Bespoke Architectural Renovations & Luxury Living",
    tagline: "Transforming Exceptional Visions Into Timeless Architectural Living",
    shortTagline: "Architectural Renovation & Bespoke Interiors",
    locationCity: "Metropolis",
    locationCountry: "United States",
    fullAddress: "100 Demo Avenue, Suite 400, Metropolis, NY 10001",
    yearEstablished: 2012,
    licenseNumber: "DEMO-LIC-8942-X",
  },

  // 2. Demo Contact Channels (All non-real fictional demo placeholders)
  contact: {
    phoneDisplay: "+1 (555) 019-2834",
    phoneRaw: "+15550192834",
    whatsappDisplay: "+1 (555) 019-2834",
    whatsappRaw: "15550192834",
    whatsappDefaultMessage: "Hello Apex Craft team, I would like to inquire about a bespoke renovation project.",
    email: "concierge@demo-apexcraft.example",
    supportEmail: "hello@demo-apexcraft.example",
    telegramUsername: "ApexCraftDemo",
    studioAddressLine1: "100 Demo Avenue, Suite 400",
    studioAddressLine2: "Metropolis Design District, NY 10001",
    googleMapsDirectionsUrl: "https://maps.google.com/?q=Metropolis+Design+District",
  },

  // 3. Operating Schedule
  openingHours: [
    { days: "Monday – Friday", hours: "08:00 – 18:30" },
    { days: "Saturday", hours: "09:00 – 16:00" },
    { days: "Sunday", hours: "By Private Appointment" }
  ],

  // 4. Social Links (Demo links)
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    linkedin: "https://linkedin.com",
    pinterest: "https://pinterest.com"
  },

  // 5. Brand Color Tokens
  theme: {
    primaryColor: "#0B132B",
    primaryLight: "#1C2541",
    accentColor: "#D4AF37",
    accentHover: "#E5C158",
    secondaryColor: "#0D9488",
    bgBody: "#070B19"
  },

  // 6. Statistics / Impact Metrics
  stats: [
    { target: 480, suffix: "+", label: "Completed Projects", desc: "Residential & Commercial" },
    { target: 14, suffix: "+", label: "Years of Mastery", desc: "Established in 2012" },
    { target: 99.6, suffix: "%", decimals: 1, label: "Client Satisfaction", desc: "Independent Audited Reviews" },
    { target: 10, suffix: " Yrs", label: "Structural Warranty", desc: "Comprehensive Guarantee" }
  ],

  // 7. Core Services Catalog
  services: [
    {
      id: "luxury-kitchens",
      number: "01",
      title: "Luxury Kitchen Transformations",
      desc: "Custom cabinetry, Italian quartzite countertops, concealed appliances, and architectural lighting engineered for timeless elegance.",
      features: ["Custom bespoke joinery", "Integrated smart appliances", "Natural stone & quartz slabs"]
    },
    {
      id: "master-bathrooms",
      number: "02",
      title: "Spa & Master Bathrooms",
      desc: "Floor-to-ceiling bookmatched porcelain, rainfall thermostatic systems, custom vanities, and ambient radiant underfloor heating.",
      features: ["Frameless glass walk-ins", "Underfloor radiant heating", "Acoustic waterproofing guarantee"]
    },
    {
      id: "full-home-renovations",
      number: "03",
      title: "Full-Home Architecture & Build",
      desc: "End-to-end structural alterations, open-plan structural steel additions, heritage restorations, and complete turnkey execution.",
      features: ["Complete permit management", "Dedicated master architect", "Fixed guaranteed timeline"]
    },
    {
      id: "custom-extensions",
      number: "04",
      title: "Bespoke Extensions & Glasshouses",
      desc: "Architectural floor-to-ceiling glass pavilions, double-height living extensions, and seamless indoor-outdoor terrace integrations.",
      features: ["Thermal-break structural glass", "Custom steelwork", "Passive climate control"]
    },
    {
      id: "custom-joinery",
      number: "05",
      title: "Architectural Millwork & Joinery",
      desc: "Handcrafted walk-in dressing rooms, fluted oak wall paneling, hidden pivot doors, and custom wine display sanctuaries.",
      features: ["Sustainably sourced European timber", "Concealed magnetic hardware", "Integrated LED channels"]
    },
    {
      id: "smart-energy-systems",
      number: "06",
      title: "Smart Home & Energy Retrofits",
      desc: "Intelligent lighting scenes, discreet climate control integration, acoustic sound dampening, and high-efficiency heat pump upgrades.",
      features: ["Lutron & KNX integration", "High-efficiency insulation", "Acoustic ceiling baffles"]
    }
  ],

  // 8. Gallery Portfolio Projects
  gallery: [
    {
      id: 1,
      category: "living",
      title: "Lakeside Penthouse Modernization",
      location: "Metropolis Waterfront",
      image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
      description: "Complete interior restructuring with minimalist oak panelling, floor-to-ceiling windows, and custom limestone fireplace."
    },
    {
      id: 2,
      category: "kitchens",
      title: "Monolithic Quartzite Kitchen",
      location: "Highland Heights",
      image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80",
      description: "Patinated bronze accents, cantilevered quartzite island with concealed induction cooking and custom cabinetry."
    },
    {
      id: 3,
      category: "bathrooms",
      title: "Travertine Master Spa Suite",
      location: "Grand Avenue Estate",
      image: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?auto=format&fit=crop&w=1200&q=80",
      description: "Bookmatched Roman travertine, freestanding sculpted stone tub, and rainfall chromotherapy shower."
    },
    {
      id: 4,
      category: "living",
      title: "Heritage Residence Salon",
      location: "Historic District",
      image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      description: "Restoration of chevron parquet flooring combined with modern concealed mood lighting and bespoke library."
    },
    {
      id: 5,
      category: "extensions",
      title: "Glasshouse Garden Pavilion",
      location: "Oakridge Park",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
      description: "Ultra-slim structural glazing extension connecting the historic residence with private landscaped gardens."
    },
    {
      id: 6,
      category: "kitchens",
      title: "Smoked Oak & Brass Kitchen",
      location: "Downtown Arts Quarter",
      image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80",
      description: "Hand-brushed brass hardware with dark fumed oak cabinetry, integrated wine column, and hidden scullery."
    }
  ],

  // 9. Client Testimonials
  testimonials: [
    {
      quote: "Apex transformed our historic residence beyond our highest expectations. Their attention to joinery details, strict budget adherence, and immaculate on-site cleanliness were world-class.",
      author: "Beatriz & Marc V.",
      role: "Estate Transformation • Metropolis Waterfront",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      quote: "Working with their team was completely stress-free. Every single trade arrived on schedule, the 3D visualizations matched the physical build 100%, and we finished days ahead of deadline.",
      author: "Dr. Adrian H.",
      role: "Penthouse Spa & Kitchen • Highland Heights",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
      rating: 5
    },
    {
      quote: "The fixed-price contract gave us complete peace of mind. No surprise bills, no delays, and an unparalleled level of finish that has significantly increased the value of our residence.",
      author: "Elena R.",
      role: "Complete Residence Renovation • Grand Avenue",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=200&q=80",
      rating: 5
    }
  ],

  // 10. Frequently Asked Questions
  faqs: [
    {
      q: "How does your pricing work, and do you offer fixed quotes?",
      a: "Yes. Following our detailed site evaluation and 3D architectural planning phase, we provide an all-inclusive, transparent fixed-price proposal. Unless you request scope alterations during the build, your final invoice will never exceed the quoted figure."
    },
    {
      q: "How long does a typical architectural renovation take?",
      a: "Standard bespoke kitchen or master bathroom transformations take between 3 to 6 weeks. Complete home renovations typically require 8 to 16 weeks. We establish a clear calendar schedule before day one with weekly milestone reports."
    },
    {
      q: "Do you handle all necessary building permits and structural calculations?",
      a: "Yes. Our team manages all structural engineering assessments, statutory building regulations, environmental compliances, and local council permits from initial submission to final sign-off."
    },
    {
      q: "What warranties and guarantees do you provide on completed work?",
      a: "We provide an industry-leading 10-Year Structural Guarantee on all building work and structural modifications, alongside a 2-Year comprehensive warranty on fixtures, bespoke cabinetry, and finishes."
    },
    {
      q: "Can we remain living in our property during the renovation?",
      a: "For single-room projects (like a kitchen or master suite), yes. We install heavy-duty negative-pressure dust barriers, floor armor, and air filtration. For full-home overhauls, we usually recommend vacating during high-intensity construction phases."
    },
    {
      q: "How do we get started with a consultation?",
      a: "Simply call our direct concierge line, message us on WhatsApp, or send an email. We organize a confidential, complimentary 45-minute discovery consultation at your property or our studio within 24 hours."
    }
  ]
};

// Export to window for global access
if (typeof window !== "undefined") {
  window.SITE_CONFIG = SITE_CONFIG;
}
