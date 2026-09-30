'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '@/data/testimonials';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-16 lg:py-24 border-b border-[#DBC6AD]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C88E3E]">
            WHAT OUR CUSTOMERS SAY
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#003D25]">
            Trusted by Customers Across India
          </h2>
        </div>

        {/* Carousel / Cards Grid */}
        <div className="relative">
          {/* Desktop Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="bg-[#FFFDF8] rounded-2xl border border-[#DBC6AD] p-8 shadow-xs flex flex-col justify-between hover:shadow-lg transition-all duration-300 relative"
              >
                <Quote className="w-10 h-10 text-[#DBC6AD] absolute top-6 right-6 fill-[#DBC6AD]/30" />

                <div className="space-y-4 relative z-10">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#C88E3E] text-[#C88E3E]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-sm text-[#171717]/80 leading-relaxed font-normal italic">
                    &quot;{item.quote}&quot;
                  </p>
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 pt-6 border-t border-[#DBC6AD]/60 mt-6">
                  <div className="w-11 h-11 rounded-full overflow-hidden relative border-2 border-[#DBC6AD]">
                    <Image
                      src={item.avatar}
                      alt={item.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-[#003D25]">{item.name}</h4>
                    <p className="text-xs text-[#8A8C8F]">{item.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Arrows (Bottom/Mobile controls) */}
          <div className="flex items-center justify-center gap-4 mt-8 md:hidden">
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-[#EFE5D1] text-[#003D25] flex items-center justify-center hover:bg-[#006838] hover:text-white transition-colors"
              aria-label="Previous Testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-semibold text-[#8A8C8F]">
              {currentIndex + 1} / {testimonials.length}
            </span>
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-[#EFE5D1] text-[#003D25] flex items-center justify-center hover:bg-[#006838] hover:text-white transition-colors"
              aria-label="Next Testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
