# Miswak General Trading Est (MGTE) — Premium E-commerce Frontend

A production-quality, responsive Next.js 16 (App Router) frontend designed for **Miswak General Trading Est (MGTE)**. Built with TypeScript, React 19, Tailwind CSS v4, Lucide React icons, and Zustand state management with `localStorage` persistence.

---

## 🚀 Getting Started

### 1. Installation
Dependencies are already installed. If needed, re-install with:
```bash
npm install
```

### 2. Development Server
Start the development server:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build
```bash
npm run build
npm start
```

---

## 🎨 Brand Color Tokens

- **Primary Dark Green**: `#006838`
- **Deep Green**: `#004D2C`
- **Very Dark Green**: `#003D25`
- **Background Cream**: `#F8F4E9`
- **Warm Light Beige**: `#EFE5D1`
- **Logo Grey**: `#8A8C8F`
- **Black / Charcoal**: `#171717`
- **Accent Gold / Orange**: `#E5A024` / `#D49A38`

---

## 📁 How to Replace Logo, Hero & Product Images

All public media assets are stored inside the `public/` directory with clean, modular folder structures:

```
public/
├── brand/
│   ├── mgte-logo.svg           # Main dark green logo for header
│   └── mgte-logo-white.svg     # White/cream logo for footer
├── hero/
│   └── hero-products.png       # Main hero product composition (Supports transparent PNG/WebP)
├── categories/
│   ├── miswak-sticks.png       # Miswak Sticks Category
│   ├── miswak-packs.png        # Miswak Box Packs Category
│   ├── natural-oils.png        # Natural Oils Category
│   └── other-products.png      # Other Products Category
├── products/
│   ├── tybakh.png              # Tybakh Sewak product image
│   ├── sewak-al-nusuk.png      # Sewak Al-Nusuk product image
│   ├── al-haram.png            # Al-Haram Sewak product image
│   └── al-mutahir.png          # Al-Mutahir box pack image
└── lifestyle/
    ├── about-miswak.png        # About section lifestyle dish image
    ├── how-step1.png           # Step 1: Prepare image
    ├── how-step2.png           # Step 2: Brush Gently image
    └── how-step3.png           # Step 3: Rinse & Store image
```

### Replacing Assets:
- **Logo**: Replace `/public/brand/mgte-logo.svg` or `.png` with your official vector logo asset.
- **Hero Image**: Replace `/public/hero/hero-products.png` with transparent product composition WebP/PNG.
- **Products**: Replace PNG/WebP files in `/public/products/` and update `/src/data/products.ts` if you add new products or change filenames.
- **Categories**: Replace images in `/public/categories/`.

---

## 🏗️ Architecture & Data Layer

- **Types**: Defined in `src/types/product.ts`
- **Mock Data**: Located in `src/data/products.ts`, `src/data/categories.ts`, `src/data/testimonials.ts`
- **API Abstraction Layer**: Located in `src/services/products.ts` and `src/services/categories.ts`. These functions expose `getProducts()`, `getProductBySlug()`, `getFeaturedProducts()`, `searchProducts()` and can easily be connected to a REST API, Next.js Server Actions, or Node.js Express backend in the future without changing any UI components.
- **Cart State**: Managed with Zustand in `src/store/cartStore.ts` with instant slide-over drawer, local storage persistence, quantity controls, and toast notifications.

---

## 📱 Supported Pages & Routes

- `/` — Homepage (Hero, Categories, Best Sellers, About, How to Use, Benefits, Testimonials, Newsletter)
- `/shop` — Shop page with Category Filters, Price range slider, In-stock toggle, Sort dropdown, and Mobile Drawer
- `/shop/[slug]` — Product Details Page with thumbnail gallery, stock status, quantity picker, wholesale inquiry banner, and tabs
- `/category/[slug]` — Category listing page (`/category/miswak-sticks`, `/category/natural-oils`, etc.)
- `/wholesale` — B2B Wholesale & International Export page with quotation form, MOQ table, export catalog download
- `/about` — About Miswak General Trading Est & brand heritage
- `/contact` — Contact page with inquiry form & company details
- `/cart` — Full Shopping Cart page with promo code input and summary breakdown
- `/search` — Live product search results page (`/search?q=miswak`)
- `/privacy-policy` & `/terms` — Legal policies
