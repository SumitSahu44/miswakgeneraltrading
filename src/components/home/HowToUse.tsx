import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function HowToUse() {
  const steps = [
    {
      num: '01',
      title: 'Prepare',
      desc: 'Remove the soft outer layer and chew the tip.',
      image: '/lifestyle/how-step1.png',
    },
    {
      num: '02',
      title: 'Brush Gently',
      desc: 'Use gentle strokes like a toothbrush.',
      image: '/lifestyle/how-step2.png',
    },
    {
      num: '03',
      title: 'Rinse & Store',
      desc: 'Rinse after use and keep it in a clean place.',
      image: '/lifestyle/how-step3.png',
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white border-b border-[#EFE5D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5A024]">
            HOW TO USE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#003D25]">
            Simple Steps, Natural Care
          </h2>
          <p className="text-sm sm:text-base text-[#171717]/75">
            Using miswak is easy and can be part of your daily routine.
          </p>
        </div>

        {/* 3 Steps Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative items-start">
          {steps.map((step, idx) => (
            <div key={idx} className="flex flex-col items-center text-center space-y-4 group relative">
              
              {/* Image & Badge Wrapper */}
              <div className="relative">
                {/* Circular Image Container */}
                <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-full overflow-hidden border-4 border-[#F8F4E9] shadow-lg group-hover:border-[#006838] transition-all duration-300">
                  <Image
                    src={step.image}
                    alt={`Step ${step.num}: ${step.title}`}
                    fill
                    sizes="200px"
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* Step Number Badge (Unclipped & fully visible) */}
                <div className="absolute top-1 left-2 bg-[#003D25] text-[#E5A024] font-serif text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center shadow-xl border-2 border-[#E5A024] z-20">
                  {step.num}
                </div>
              </div>

              {/* Title & Desc */}
              <div className="space-y-1.5 max-w-xs">
                <h3 className="font-serif text-xl font-bold text-[#003D25] group-hover:text-[#006838] transition-colors">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#171717]/70 leading-relaxed">
                  {step.desc}
                </p>
              </div>

              {/* Directional Arrow between steps (Desktop only) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-6 top-20 text-[#8A8C8F] z-10">
                  <ChevronRight className="w-8 h-8 stroke-[1.5]" />
                </div>
              )}

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
