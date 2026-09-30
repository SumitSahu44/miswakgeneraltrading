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
    <section id="benefits" className="relative overflow-hidden bg-[#003D25] text-white py-16 lg:py-24">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/benefits.png"
          alt="Benefits of Miswak Background"
          fill
          sizes="100vw"
          className="object-cover opacity-35 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#003D25]/90 via-[#004D2C]/80 to-[#003D25]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT: Text & Content */}
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C88E3E]">
              NATURAL DENTAL CARE
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F6F0E5] leading-tight">
              Benefits of Miswak
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#EBE0CE]/90 leading-relaxed">
              <p>
                Modern medicine has emphasized the remarkable usefulness of Miswak, indicating its great benefits for oral health to the extent that led dental researchers and manufacturers to extract its natural active components and use them in toothpastes.
              </p>
              <p>
                Miswak is usually harvested from widely spread desert trees in various regions, but the best and most beneficial of all is the tree existing in the region known as the <strong>Arak tree</strong> (<em>Salvadora persica</em>, Arak, Meswak, Peelu, Toothbrush tree, Mustard tree, Mustard bush).
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-white text-[#003D25] hover:bg-[#F6F0E5] font-bold text-sm rounded-full shadow-lg transition-all inline-flex items-center gap-2 group"
              >
                <span>Shop Authentic Miswak</span>
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


        </div>
      </div>
    </section>
  );
}
