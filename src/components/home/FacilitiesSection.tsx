'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { 
  Warehouse, 
  ChevronDown, 
  ChevronUp, 
  ChevronLeft, 
  ChevronRight, 
  X
} from 'lucide-react';

interface FacilityImage {
  src: string;
  alt: string;
  category: string;
}

const facilityImages: FacilityImage[] = [
  {
    src: '/warehouse/1.jpeg',
    alt: 'Hygienic cleanroom miswak inspection and sorting',
    category: 'Processing & Quality',
  },
  {
    src: '/warehouse/3.jpeg',
    alt: 'Modern automated miswak packaging and sealing line',
    category: 'Modern Machinery',
  },
  {
    src: '/warehouse/5.jpeg',
    alt: 'Bulk vacuum-sealed miswak inventory storage',
    category: 'Bulk Storage',
  },
  {
    src: '/warehouse/4.jpeg',
    alt: 'Precision trimming and sizing of natural miswaks',
    category: 'Handcrafted Quality',
  },
  {
    src: '/warehouse/6.jpeg',
    alt: 'Fresh harvest sorting and carton inventory',
    category: 'Inventory Operations',
  },
  {
    src: '/warehouse/7.jpeg',
    alt: 'Inspected miswak bundles and specialized cuts',
    category: 'Inspection & Testing',
  },
  {
    src: '/warehouse/12.jpeg',
    alt: 'Heavy duty shipping cartons ready for dispatch',
    category: 'Logistics & Shipping',
  },
  {
    src: '/warehouse/8.jpeg',
    alt: 'Evenly cut natural miswak nuggets and pieces',
    category: 'Specialized Processing',
  },
  {
    src: '/warehouse/9.jpeg',
    alt: 'Standardized food grade storage crates',
    category: 'Material Handling',
  },
  {
    src: '/warehouse/10.jpeg',
    alt: 'Bulk harvest batches of authentic Salvadora Persica roots',
    category: 'Raw Material Inflow',
  },
  {
    src: '/warehouse/11.jpeg',
    alt: 'Precision length and caliper measurement verification',
    category: 'Quality Control',
  },
  {
    src: '/warehouse/13.jpeg',
    alt: 'Freshly harvested natural Salvadora Persica stems',
    category: 'Raw Materials',
  },
  {
    src: '/warehouse/14.jpeg',
    alt: 'Handheld fresh miswak bundle showing bark texture',
    category: 'Finished Bundles',
  },
  {
    src: '/warehouse/2.jpeg',
    alt: 'Finished retail miswak sticks with precision peeler tool',
    category: 'Retail Ready',
  },
];

export default function FacilitiesSection() {
  const [showAll, setShowAll] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Initial 6 images, or all 14 when expanded
  const displayedImages = showAll ? facilityImages : facilityImages.slice(0, 6);

  // Keyboard navigation for Lightbox
  const handleNext = useCallback(() => {
    setActiveImageIndex((prev) => (prev !== null ? (prev + 1) % facilityImages.length : null));
  }, []);

  const handlePrev = useCallback(() => {
    setActiveImageIndex((prev) =>
      prev !== null ? (prev - 1 + facilityImages.length) % facilityImages.length : null
    );
  }, []);

  const handleClose = useCallback(() => {
    setActiveImageIndex(null);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') handleClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    if (activeImageIndex !== null) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeImageIndex, handleClose, handleNext, handlePrev]);

  const toggleShowAll = () => {
    if (showAll) {
      setShowAll(false);
      const section = document.getElementById('facilities');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    } else {
      setShowAll(true);
    }
  };

  const currentImage = activeImageIndex !== null ? facilityImages[activeImageIndex] : null;

  return (
    <section id="facilities" className="py-16 lg:py-24 border-b border-[#DBC6AD]/40 bg-[#FDFBF7]/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C88E3E] inline-flex items-center gap-2 justify-center">
            <Warehouse className="w-4 h-4 text-[#C88E3E]" />
            INFRASTRUCTURE &amp; SUPPLY CHAIN
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003D25] leading-tight">
            Our Facilities / Warehouse
          </h2>
          <p className="text-sm sm:text-base text-[#1C1814]/80 leading-relaxed">
            Modern storage and automated packaging facilities delivering fresh, authentic Miswak across India.
          </p>
        </div>

        {/* Gallery Grid - Only Images with Tag on Top */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {displayedImages.map((image) => {
            const actualIndex = facilityImages.findIndex((img) => img.src === image.src);
            return (
              <div
                key={image.src}
                onClick={() => setActiveImageIndex(actualIndex)}
                className="group relative aspect-[4/3] w-full rounded-2xl sm:rounded-3xl border border-[#DBC6AD]/70 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 cursor-pointer bg-[#EFE5D1]/30"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle Hover Gradient */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                {/* Top Category Badge */}
                <div className="absolute top-3.5 left-3.5 z-10">
                  <span className="px-3 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full bg-[#FFFDF8]/90 text-[#003D25] backdrop-blur-xs shadow-sm border border-[#DBC6AD]/70">
                    {image.category}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* View All / Show Less Toggle Button */}
        <div className="text-center pt-2">
          <button
            onClick={toggleShowAll}
            className="px-8 py-3.5 bg-[#006838] hover:bg-[#004D2C] text-white font-semibold text-sm rounded-full shadow-md hover:shadow-lg transition-all duration-300 inline-flex items-center gap-2.5 group cursor-pointer"
          >
            {showAll ? (
              <>
                <span>Show Less</span>
                <ChevronUp className="w-4 h-4 transition-transform group-hover:-translate-y-0.5" />
              </>
            ) : (
              <>
                <Warehouse className="w-4 h-4" />
                <span>View All Facilities</span>
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-0.5" />
              </>
            )}
          </button>
        </div>

      </div>

      {/* Lightbox Fullscreen Modal */}
      {currentImage && activeImageIndex !== null && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between p-3 sm:p-6 animate-fade-in"
          onClick={handleClose}
        >
          {/* Top Bar - Tag & Close */}
          <div 
            className="flex items-center justify-between text-white max-w-7xl w-full mx-auto pb-3 border-b border-white/10 shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider rounded-full bg-[#006838] text-white">
                {currentImage.category}
              </span>
            </div>

            <button
              onClick={handleClose}
              className="p-2 sm:px-3 sm:py-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Close (Press Esc)"
              aria-label="Close image viewer"
            >
              <X className="w-5 h-5 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">Close</span>
            </button>
          </div>

          {/* Main Image Area with Slider Controls */}
          <div 
            className="relative flex-1 flex items-center justify-center my-2 max-w-6xl w-full mx-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Prev Button */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 z-20 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-[#006838] text-white transition-all duration-200 border border-white/20 hover:scale-105 cursor-pointer"
              aria-label="Previous photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 z-20 p-2.5 sm:p-3.5 rounded-full bg-black/60 hover:bg-[#006838] text-white transition-all duration-200 border border-white/20 hover:scale-105 cursor-pointer"
              aria-label="Next photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Clear Image with Contain */}
            <div className="relative w-full h-full max-h-[75vh] flex items-center justify-center">
              <Image
                src={currentImage.src}
                alt={currentImage.alt}
                fill
                priority
                sizes="100vw"
                className="object-contain"
              />
            </div>
          </div>

          {/* Bottom Controls / Dots */}
          <div 
            className="max-w-4xl w-full mx-auto pt-3 border-t border-white/10 text-center shrink-0"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center gap-1.5 py-1">
              {facilityImages.map((img, idx) => (
                <button
                  key={img.src}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`transition-all rounded-full cursor-pointer ${
                    activeImageIndex === idx
                      ? 'w-6 h-2 bg-[#006838]'
                      : 'w-2 h-2 bg-white/40 hover:bg-white/80'
                  }`}
                  aria-label={`Go to photo ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
