# 🏛️ Apex Craft & Living — Luxury Glassmorphic & Polymorphic Local Business Website (Demo)

A bespoke, production-ready, high-converting commercial website template engineered with **modern Glassmorphism, Polymorphic multi-surface depth, an Explore Pages Dropdown Menu, and full Android & iOS mobile touch optimizations**.

Built purely with **HTML5, Modern CSS3 (8px design tokens, CSS variables, `backdrop-filter`), and Vanilla ES6+ JavaScript**. Zero heavy framework dependencies, sub-second initial paint, and 100% static direct contact touchpoints.

---

## 🧭 Streamlined Navigation & Pages Dropdown Architecture

- **Desktop Navigation**:
  - Primary links: **Home**, **Services**, **Portfolio**, and **Contact**.
  - **`Explore Pages ▾` Glass Dropdown**: Organizes auxiliary sections (*About Studio*, *Why Choose Us*, *4-Step Process*, *Client Reviews*, *FAQ & Warranties*) into an illuminated multi-layered frosted glass dropdown menu with animated chevron, individual icons, and descriptive subtitles.
  - Hover & click interaction with outside-click dismissal, ESC key dismissal, and seamless accessibility (`aria-haspopup`, `aria-expanded`).
- **Tablet & Mobile Navigation**:
  - Luxury **`Menu` button** (with animated hamburger icon and clear label) at `<= 1024px`.
  - Categorized **Mobile Drawer** divided into *Main Navigation* and *Explore Studio Pages* with high-contrast highlighted conversion CTA.

---

## 📱 Mobile OS & Browser Optimizations (Android & iOS)

- **Safe-Area Inset Handling**: Uses `env(safe-area-inset-top)` and `env(safe-area-inset-bottom)` for iPhone Dynamic Island, home indicator bar, and Android navigation pills.
- **Dynamic Viewport Units**: Implements `100dvh` to prevent jumping when mobile browser navigation and URL bars expand or collapse.
- **Touch-First Interactions**:
  - Minimum 48px × 48px touch targets according to WCAG/Material/Apple guidelines.
  - `-webkit-tap-highlight-color: transparent` to eliminate the grey highlight flash on tap.
  - `touch-action: manipulation` to remove double-tap delays.
  - Smooth inertial momentum scrolling with `-webkit-overflow-scrolling: touch`.
  - Touch-swipe gesture support for the testimonial slider.
- **Status Bar Theming**: Integrated `<meta name="theme-color" content="#0B132B">` and Apple translucent status bar properties.

---

## 🔮 Glassmorphism & Polymorphic Visual Architecture

- **Multi-Layered Frosted Glass**: Uses `backdrop-filter: blur(18px) saturate(180%)` with translucent fills and delicate illuminated borders (`border: 1px solid rgba(255, 255, 255, 0.12)`).
- **Ambient Glowing Mesh Orbs**: Floating multi-color background orbs (Gold, Deep Blue, Teal) providing depth and luxury ambiance.
- **Refractive Specular Highlights**: Subtle inner specular lighting (`inset 0 1px 1px rgba(255, 255, 255, 0.25)`) and shimmering hover sweeps on action buttons and cards.
- **Live Studio Indicator**: Dynamically checks local time and displays real-time status (`● Open Now • Studio Concierge Available`).
- **Interactive Copy-to-Clipboard**: One-click address and phone number copying with toast notification feedback.

---

## 🚀 Quick Client Rebranding (Under 5 Minutes)

You can rebrand this entire website for a completely new client without touching the underlying HTML layout.

### 1. Update Central Business Config (`js/config.js`)
Open [`js/config.js`](file:///d:/Demo%20website%201/js/config.js) and update the `SITE_CONFIG` object:
```javascript
const SITE_CONFIG = {
  business: {
    name: "XYZ Construction",
    tagline: "Precision Commercial & Residential Building",
    locationCity: "Metropolis",
    locationCountry: "United States",
    fullAddress: "100 Demo Avenue, Suite 400, Metropolis, NY 10001",
    // ...
  },
  contact: {
    phoneDisplay: "+1 (555) 019-2834",
    phoneRaw: "+15550192834",
    whatsappDisplay: "+1 (555) 019-2834",
    whatsappRaw: "15550192834",
    email: "concierge@demo-apexcraft.example",
    // ...
  }
};
```

### 2. Update Color Palette & Brand Tokens (`css/style.css`)
Open [`css/style.css`](file:///d:/Demo%20website%201/css/style.css) and customize `:root`:
```css
:root {
  --primary-color: #0B132B;    /* Main brand dark */
  --accent-color: #D4AF37;     /* Warm Gold / Primary CTA */
  --accent-hover: #E5C158;     /* Gold hover state */
  --secondary-color: #0D9488;  /* Accent tint / Trust color */
}
```

---

## 📂 Project Architecture

```
/
├── index.html          # Semantic HTML5 single-page application with schema & Pages dropdown
├── css/
│   └── style.css       # Glassmorphism, Polymorphism, responsive grid & mobile optimizations
├── js/
│   ├── config.js       # Central business configuration & data dictionary (Demo safe)
│   └── script.js       # Dropdown controller, scroll spy, dynamic counters, lightbox modal, touch slider, copy toast
├── robots.txt          # Search engine crawler instructions
├── sitemap.xml         # XML Sitemap
└── README.md           # Documentation & handover guide
```

---

## 🌐 100% Static Deployment

Since this website is 100% static with direct click-to-call, WhatsApp, email, and copy actions, it requires zero backend configuration or databases.

- **Vercel / Netlify / GitHub Pages / Cloudflare Pages**: Drag and drop the folder or push to a Git repository for instant, free static hosting.
- **Traditional Hosting (cPanel / Apache / Nginx / S3)**: Upload the files directly to your web root.
