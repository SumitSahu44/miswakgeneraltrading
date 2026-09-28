import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Sparkles, Globe2 } from 'lucide-react';

export default function AboutSection() {
  const trustPoints = [
    {
      icon: ShieldCheck,
      title: 'Reliable Supply',
    },
    {
      icon: Sparkles,
      title: 'Quality Products',
    },
    {
      icon: Globe2,
      title: 'Global Reach',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#F8F4E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5A024]">
              ABOUT US
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#003D25] leading-tight">
              Miswak General Trading Est
            </h2>

            <p className="text-base text-[#171717]/80 leading-relaxed">
              We are committed to providing authentic miswak, natural oils and traditional products to customers across Pakistan and around the world. Our focus is on quality, purity and customer satisfaction.
            </p>

            <div className="pt-2">
              <Link
                href="/about"
                className="px-7 py-3.5 bg-[#006838] hover:bg-[#004D2C] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all inline-flex items-center gap-2 group"
              >
                <span>Learn More</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

            {/* Trust Items */}
            <div className="pt-8 border-t border-[#EFE5D1] grid grid-cols-3 gap-4">
              {trustPoints.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                    <div className="w-10 h-10 rounded-full bg-[#EFE5D1] text-[#006838] flex items-center justify-center border border-[#006838]/20">
                      <IconComponent className="w-5 h-5 stroke-[1.75]" />
                    </div>
                    <span className="text-xs font-bold text-[#003D25]">
                      {item.title}
                    </span>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT: Lifestyle Visual */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/lifestyle/about-miswak.png"
                alt="Authentic natural miswak sticks on ceramic dish"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover hover:scale-103 transition-transform duration-700"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
