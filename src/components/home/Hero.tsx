import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Award, CheckCircle2, Globe, Sparkles } from 'lucide-react';

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
    <section className="relative overflow-hidden pt-6 pb-16 lg:py-16 border-b border-[#DBC6AD]/60">
      {/* Background Arch Motif Effect */}
      <div className="absolute top-0 right-0 w-full lg:w-1/2 h-full bg-[#EBE0CE]/40 rounded-bl-[100px] pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10">

        {/* Direct Centered Header Announcement Text (As per Image) */}
        <div className="text-center max-w-5xl mx-auto space-y-3 pt-2 pb-6 border-b border-[#DBC6AD]/40">
          <p className="text-sm sm:text-base lg:text-lg text-[#1C1814] font-medium leading-snug">
            Miswak General Trading Est is one of the best miswak manufacturer in India, because of its high quality and low price
          </p>
          <p className="text-base sm:text-xl lg:text-2xl xl:text-3xl font-bold text-[#1E40AF] uppercase tracking-wide leading-tight">
            ALL DETAILS OF PRICES, PACKAGES AND DELIVERY ARE AVAILABLE ON OUR WEBSITE:{' '}
            <a href="https://miswakgeneraltrading.com" className="underline hover:text-[#1d4ed8]">
              MISWAKGENERALTRADING.COM
            </a>
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

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
              Authentic miswak, natural oils and traditional wellness products sourced with care.
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

          {/* RIGHT SIDE (5 Cols) - Direct Product Image (No Border, No Shadow, No Box) */}
          <div className="lg:col-span-5 relative flex justify-center items-center w-full">
            <div className="relative w-full max-w-md lg:max-w-xl xl:max-w-2xl aspect-[4/3.2] lg:aspect-[4/3]">
              <Image
                src="/hero/hero_right.png"
                alt="MGTE Authentic Miswak & Natural Products Composition"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-contain transition-transform duration-500 hover:scale-103"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
