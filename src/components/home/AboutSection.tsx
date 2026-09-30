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
      title: 'Pan-India Reach',
    },
  ];

  return (
    <section id="about" className="py-16 lg:py-24 border-b border-[#DBC6AD]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Content */}
          <div className="lg:col-span-7 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#C88E3E]">
              ABOUT US
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#003D25] leading-tight">
              Miswak General Trading Est
            </h2>

            <div className="space-y-4 text-sm sm:text-base text-[#1C1814]/85 leading-relaxed">
              <p>
                The project of packing and packaging Miswak sticks started from an urgent need summarized in our mission to spread a great prophetic tradition that has been forgotten by many people due to the lack of modern marketing and scientific packaging methods.
              </p>
              <p>
                We established <strong>Miswak General Trading Est (MGTE)</strong> as a premier establishment that develops and packages Miswak automatically, based on research, development, and 100% hygienic health supervision. Our commitment is providing the finest quality of Miswak across India.
              </p>
              <p>
                We work to spread Miswak across the country through participation in local exhibitions, research development, and scientific papers in cooperation with scientific research centers in India.
              </p>
              <p>
                Seeking to follow market developments and modern shopping methods, we created our specialized website for online shopping, featuring our complete product range with secure electronic payments and fast shipping across India:{' '}
                <a href="https://miswakgeneraltrading.com" className="font-bold text-[#006838] underline">
                  miswakgeneraltrading.com
                </a>.
              </p>
            </div>

            {/* Trust Items */}
            <div className="pt-6 border-t border-[#DBC6AD]/60 grid grid-cols-3 gap-4">
              {trustPoints.map((item, idx) => {
                const IconComponent = item.icon;
                return (
                  <div key={idx} className="flex flex-col items-center sm:items-start text-center sm:text-left space-y-2">
                    <div className="w-10 h-10 rounded-full bg-[#EBE0CE] text-[#006838] flex items-center justify-center border border-[#006838]/20">
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
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-lg aspect-[4/3] rounded-3xl overflow-hidden shadow-xl border-4 border-[#FFFDF8]">
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
