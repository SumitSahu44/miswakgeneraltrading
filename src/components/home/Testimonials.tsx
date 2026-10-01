'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote, Globe } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Duplicating testimonials array for seamless infinite looping on X-axis
  const infiniteTestimonials = [...testimonials, ...testimonials];

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -340, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 340, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 lg:py-24 border-b border-[#DBC6AD]/40 bg-[#FFFDF8] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header with Navigation Controls */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 border-b border-[#DBC6AD]/40 pb-8">
          <div className="text-center sm:text-left space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EBE0CE] text-[#006838] text-xs font-bold uppercase tracking-wider border border-[#006838]/20">
              <Globe className="w-3.5 h-3.5 text-[#006838]" />
              <span>International Wholesale Reviews</span>
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#003D25]">
              Trusted by Clients Worldwide
            </h2>
            <p className="text-xs sm:text-sm text-[#1C1814]/75 max-w-xl">
              Authentic feedback from wholesale &amp; retail partners in Saudi Arabia, UAE, Egypt, Qatar, Oman, and India.
            </p>
          </div>

          {/* Navigation Arrows for X-Axis Slider */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollLeft}
              className="w-11 h-11 rounded-full bg-white border border-[#DBC6AD] text-[#003D25] flex items-center justify-center hover:bg-[#006838] hover:text-white transition-all shadow-xs shrink-0"
              aria-label="Scroll Left"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              className="w-11 h-11 rounded-full bg-white border border-[#DBC6AD] text-[#003D25] flex items-center justify-center hover:bg-[#006838] hover:text-white transition-all shadow-xs shrink-0"
              aria-label="Scroll Right"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* X-AXIS INFINITE HORIZONTAL SLIDER */}
        <div 
          ref={scrollContainerRef}
          className="overflow-x-auto no-scrollbar scroll-smooth py-2 -mx-4 px-4 sm:mx-0 sm:px-0"
        >
          <div className="animate-marquee-loop flex gap-6 w-max">
            {infiniteTestimonials.map((item, idx) => (
              <div
                key={`${item.id}-${idx}`}
                className="w-[300px] sm:w-[380px] shrink-0 bg-[#F8F4E9]/80 rounded-2xl border border-[#DBC6AD] p-6 sm:p-7 shadow-2xs flex flex-col justify-between hover:shadow-md hover:border-[#006838]/50 transition-all duration-300 relative group"
              >
                <Quote className="w-8 h-8 text-[#DBC6AD] absolute top-6 right-6 fill-[#DBC6AD]/30 group-hover:text-[#006838]/30 transition-colors" />

                <div className="space-y-4 relative z-10">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C88E3E] text-[#C88E3E]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-xs sm:text-sm text-[#171717]/85 leading-relaxed italic">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-5 border-t border-[#DBC6AD]/60 mt-6">
                  <div className="w-10 h-10 rounded-full overflow-hidden relative border-2 border-[#DBC6AD] bg-white shrink-0">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-xs sm:text-sm font-bold text-[#003D25]">{item.name}</h4>
                    <p className="text-[11px] font-semibold text-[#006838] flex items-center gap-1 mt-0.5">
                      <span>📍</span>
                      <span>{item.location}</span>
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

