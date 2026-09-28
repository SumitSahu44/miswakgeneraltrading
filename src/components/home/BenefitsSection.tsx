import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Leaf, Moon, Award, PackageCheck } from 'lucide-react';

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Leaf,
      label: '100% Natural and Pure',
    },
    {
      icon: Moon,
      label: 'Halal Certified',
    },
    {
      icon: Award,
      label: 'Premium Quality',
    },
    {
      icon: PackageCheck,
      label: 'Safe & Secure Packaging',
    },
  ];

  return (
    <section className="relative overflow-hidden bg-[#003D25] text-white py-16 lg:py-24">
      {/* Background Subtle Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#003D25] via-[#004D2C] to-[#003D25] opacity-90 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* LEFT: Text & CTA */}
          <div className="lg:col-span-5 space-y-6 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5A024]">
              WHY CHOOSE US
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F8F4E9] leading-tight">
              The Natural Choice<br />for Everyday Care
            </h2>

            <p className="text-sm sm:text-base text-[#EFE5D1]/85 max-w-md mx-auto lg:mx-0 leading-relaxed">
              Authentic products, premium quality and a commitment to natural wellness.
            </p>

            <div className="pt-2">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-white text-[#003D25] hover:bg-[#F8F4E9] font-bold text-sm rounded-full shadow-lg transition-all inline-flex items-center gap-2 group"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* CENTER: 4 Benefits Icons */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-6">
            {benefits.map((item, idx) => {
              const IconComponent = item.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center p-4 rounded-2xl bg-[#004D2C]/60 border border-[#006838]/60 backdrop-blur-xs space-y-3">
                  <div className="w-12 h-12 rounded-full border-2 border-[#E5A024] flex items-center justify-center text-[#E5A024] shrink-0">
                    <IconComponent className="w-6 h-6 stroke-[1.5]" />
                  </div>
                  <span className="text-xs font-semibold text-[#F8F4E9] leading-snug">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>

          {/* RIGHT: Visual */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-full max-w-xs aspect-square rounded-2xl overflow-hidden border-2 border-[#006838]/60 shadow-xl">
              <Image
                src="/categories/miswak-sticks.png"
                alt="Fresh cut miswak sticks bundle"
                fill
                sizes="(max-width: 1024px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
