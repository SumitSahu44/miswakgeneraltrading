import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Award, CheckCircle2, Globe } from 'lucide-react';
import ProductCatalogBanner from '@/components/home/ProductCatalogBanner';

export default function Hero() {
  const trustIndicators = [
    {
      icon: Leaf,
      label: '100% Natural Products',
    },
    {
      icon: Award,
      label: 'Premium Quality',
    },
    {
      icon: CheckCircle2,
      label: 'Halal Certified',
    },
    {
      icon: Globe,
      label: 'Pan-India Shipping',
    },
  ];

  return (
    <section className="relative overflow-hidden pt-6 pb-12 lg:py-16 border-b border-[#DBC6AD]/60">
      {/* Background Arch Motif Effect */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#EBE0CE]/40 rounded-bl-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

        {/* Direct Centered Header Announcement Text */}
        <div className="text-center max-w-5xl mx-auto space-y-3 pt-2 pb-6 border-b border-[#DBC6AD]/40">
          <p className="text-sm sm:text-base lg:text-lg text-[#1C1814] font-medium leading-snug">
            Miswak General Trading Est is one of the best miswak manufacturers in India, known for its authentic premium quality
          </p>
          <p className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1E40AF] uppercase tracking-wide leading-tight">
            ALL DETAILS OF PRODUCTS, PACKAGES AND DELIVERY ARE AVAILABLE ON OUR WEBSITE:{' '}
            <a href="https://miswakgeneraltrading.com" className="underline hover:text-[#1d4ed8]">
              MISWAKGENERALTRADING.COM
            </a>
          </p>
        </div>

        {/* Hero Main 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

          {/* LEFT SIDE (7 Cols) */}
          <div className="lg:col-span-7 space-y-8 text-center lg:text-left">

            {/* Main Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#003D25] leading-[1.12] tracking-tight">
              Pure Miswak &amp;<br className="hidden sm:inline" />
              <span className="text-[#006838]"> Natural Products</span><br />
              for a Healthier You
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#171717]/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Authentic miswak and traditional natural oral wellness products sourced with care.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4">
              <Link
                href="/shop"
                className="px-8 py-4 bg-[#006838] hover:bg-[#004D2C] text-white font-semibold text-sm rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>

              <Link
                href="/shop"
                className="px-8 py-4 bg-[#FFFDF8] border border-[#006838] hover:bg-[#EBE0CE]/60 text-[#003D25] font-semibold text-sm rounded-full transition-all duration-300 shadow-xs"
              >
                Explore Products
              </Link>
            </div>

            {/* 4 Trust Indicators */}
            <div className="pt-8 border-t border-[#DBC6AD]/60 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {trustIndicators.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-2">
                    <div className="w-11 h-11 rounded-full bg-[#EBE0CE]/80 border border-[#006838]/20 flex items-center justify-center text-[#006838]">
                      <IconComponent className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-semibold text-[#003D25] leading-tight max-w-[110px]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT SIDE (5 Cols) - Main Product Image & Stick Image */}
          <div className="lg:col-span-5 flex flex-col items-center justify-center space-y-4 w-full">
            {/* Main Product Box Image */}
            <div className="relative w-full max-w-md lg:max-w-xl aspect-[4/3.2] lg:aspect-[4/3]">
              <Image
                src="/hero/hero_right.png"
                alt="MGTE Authentic Miswak & Natural Products Composition"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-contain"
              />
            </div>

            {/* Miswak Stick Image (stick.png) shown directly under hero image on mobile & desktop */}
            <div className="relative w-full max-w-sm h-20 sm:h-24">
              <Image
                src="/hero/stick.png"
                alt="Authentic Miswak Stick"
                fill
                className="object-contain"
              />
            </div>
          </div>

        </div>

        {/* SIMPLE CLEAN TEXT SPECIFICATIONS (No heavy boxes, simple text with divider lines) */}
        <div className="pt-8 border-t border-[#DBC6AD]/80">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-0 md:divide-x md:divide-[#DBC6AD]/80 text-center md:text-left">

            {/* Item 1 */}
            <div className="space-y-1.5 md:pr-8">
              <h3 className="font-serif text-lg font-bold text-[#003D25]">
                Single piece packaging
              </h3>
              <p className="text-sm text-[#1C1814]/80">
                Length: <span className="font-semibold text-[#003D25]">6 inches</span>
              </p>
              <p className="text-sm text-[#1C1814]/80">
                Thickness: <span className="font-semibold text-[#003D25]">7 mm to 14 mm</span>
              </p>
            </div>

            {/* Item 2 */}
            <div className="space-y-1.5 md:px-8 pt-6 md:pt-0 border-t border-[#DBC6AD]/50 md:border-t-0">
              <h3 className="font-serif text-lg font-bold text-[#003D25]">
                Single piece packaging
              </h3>
              <p className="text-sm text-[#1C1814]/80">
                Length: <span className="font-semibold text-[#003D25]">9 inches</span>
              </p>
              <p className="text-sm text-[#1C1814]/80">
                Thickness: <span className="font-semibold text-[#003D25]">10 mm to 22 mm</span>
              </p>
            </div>

            {/* Item 3 */}
            <div className="space-y-1.5 md:pl-8 pt-6 md:pt-0 border-t border-[#DBC6AD]/50 md:border-t-0">
              <h3 className="font-serif text-lg font-bold text-[#003D25]">
                Zaitoon miswak
              </h3>
              <p className="text-sm text-[#1C1814]/80">
                Length: <span className="font-semibold text-[#003D25]">9 inches</span>
              </p>
              <p className="text-sm text-[#1C1814]/80">
                Thickness: <span className="font-semibold text-[#003D25]">8 mm to 20 mm</span>
              </p>
            </div>

          </div>
        </div>

        {/* High visibility PDF Catalog Banner right after stick image and pricing section */}
        <ProductCatalogBanner />

      </div>
    </section>
  );
}


