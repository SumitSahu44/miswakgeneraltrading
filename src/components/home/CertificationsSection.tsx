import Image from 'next/image';
import { Award, CheckCircle2 } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = [
    {
      id: 'jaivik-bharat',
      title: 'Jaivik Bharat Certified',
      subtitle: 'Official Organic Standard (FSSAI)',
      description: 'Certified under FSSAI Jaivik Bharat regulations, guaranteeing 100% authentic organic product purity, safety and standards.',
      image: '/certifications/jaivik-bharat.png',
      badge: 'JAIVIK BHARAT',
    },
    {
      id: 'iso',
      title: 'ISO 9001:2015 Certified',
      subtitle: 'Certified Quality Management System',
      description: 'Manufactured and packaged under strict ISO 9001:2015 standards, ensuring international quality control and hygiene.',
      image: '/certifications/iso-certified.png',
      badge: 'ISO 9001:2015',
    },
    {
      id: 'halal-india',
      title: 'Halal India Certified',
      subtitle: 'Authentic Sunnah & Shariah Compliant',
      description: 'Certified by Halal India. Pure 100% natural Salvadora Persica roots processed without alcohol, animal derivatives, or synthetic chemicals.',
      image: '/certifications/halal-india.png',
      badge: 'HALAL INDIA',
    },
    {
      id: 'india-organic',
      title: 'India Organic (NPOP)',
      subtitle: 'National Programme for Organic Production',
      description: 'Officially accredited under NPOP standards for sustainable organic harvesting and eco-friendly chemical-free processing.',
      image: '/certifications/india-organic.png',
      badge: 'INDIA ORGANIC',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-[#FFFDF8] border-b border-[#DBC6AD]/40 relative overflow-hidden">
      {/* Background Decorative Accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-64 bg-[#EBE0CE]/30 blur-3xl rounded-full pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EBE0CE] border border-[#006838]/20 text-[#006838] text-xs font-bold uppercase tracking-wider">
            <Award className="w-4 h-4 text-[#C88E3E]" />
            <span>As A Certified Company</span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003D25] leading-tight">
            Our Quality &amp; Trust Certifications
          </h2>

          <p className="text-sm sm:text-base text-[#1C1814]/80 leading-relaxed">
            Miswak General Trading Est adheres to strict international hygiene and manufacturing benchmarks to deliver the finest natural oral care products.
          </p>
        </div>

        {/* 4 Certifications Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch">
          {certifications.map((item) => (
            <div
              key={item.id}
              className="group bg-[#F8F4E9]/80 backdrop-blur-xs rounded-3xl p-6 sm:p-7 border border-[#DBC6AD] shadow-sm hover:shadow-xl hover:border-[#006838]/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between text-center relative overflow-hidden"
            >
              {/* Top Card Badge */}
              <div className="absolute top-3.5 right-3.5">
                <span className="text-[9px] sm:text-[10px] font-bold px-2.5 py-1 rounded-full bg-[#006838] text-white tracking-wider uppercase shadow-2xs">
                  {item.badge}
                </span>
              </div>

              {/* Logo Visual Container */}
              <div className="space-y-5 pt-2">
                <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto relative rounded-2xl bg-white p-3.5 border-2 border-[#DBC6AD]/80 shadow-md group-hover:scale-105 group-hover:border-[#006838] transition-all duration-300 flex items-center justify-center">
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={140}
                    height={140}
                    className="w-full h-full object-contain"
                    priority
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-1.5">
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#003D25] group-hover:text-[#006838] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-semibold text-[#C88E3E] uppercase tracking-wider">
                    {item.subtitle}
                  </p>
                  <p className="text-xs text-[#1C1814]/75 leading-relaxed pt-1.5">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Verified Badge Tag */}
              <div className="pt-4 border-t border-[#DBC6AD]/60 mt-5 flex items-center justify-center gap-1.5 text-xs font-bold text-[#006838]">
                <CheckCircle2 className="w-4 h-4 text-[#006838]" />
                <span>Verified Official Seal</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

