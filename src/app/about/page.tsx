import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShieldCheck, Leaf, HeartHandshake, Globe2 } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="py-12 lg:py-20 bg-[#F8F4E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Hero */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5A024]">
            OUR HERITAGE &amp; MISSION
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#003D25] leading-tight">
            Miswak General Trading Est
          </h1>
          <p className="text-base sm:text-lg text-[#171717]/80 leading-relaxed">
            Supplying authentic miswak and traditional wellness products with an unyielding commitment to quality, purity and customer satisfaction around the globe.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white rounded-3xl p-8 sm:p-14 border border-[#EFE5D1] shadow-sm">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#006838]">
              AUTHENTIC WELLNESS HERITAGE
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#003D25]">
              Connecting Tradition with Modern Life
            </h2>
            <p className="text-sm text-[#171717]/80 leading-relaxed">
              Founded with the vision to preserve natural sunnah oral hygiene traditions, Miswak General Trading Est (MGTE) sources genuine Salvadora Persica miswak directly from sustainable, unpolluted natural environments.
            </p>
            <p className="text-sm text-[#171717]/80 leading-relaxed">
              Every stick is hand-inspected for moistness, bristle density, and natural bark condition before being vacuum sealed. Our commitment ensures that customers across Haryana, Delhi NCR, Mumbai, Uttar Pradesh, and all over India receive miswak as fresh as the day it was harvested.
            </p>

            <div className="pt-4">
              <Link
                href="/shop"
                className="px-7 py-3.5 bg-[#006838] hover:bg-[#004D2C] text-white font-semibold text-sm rounded-full shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Explore Our Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full aspect-[4/3] max-w-md rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <Image
                src="/lifestyle/about-miswak.png"
                alt="MGTE Miswak Heritage"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* 4 Core Values */}
        <div className="space-y-8">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5A024]">
              WHY WE ARE DIFFERENT
            </span>
            <h2 className="font-serif text-3xl font-bold text-[#003D25]">
              Our Core Principles
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl border border-[#EFE5D1] shadow-xs space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#EFE5D1] text-[#006838] flex items-center justify-center">
                <Leaf className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#003D25]">100% Pure Sourcing</h3>
              <p className="text-xs text-[#8A8C8F] leading-relaxed">
                Zero chemical additives, zero bleach. Pure, natural root cuts preserved in hygienic sealed foils.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EFE5D1] shadow-xs space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#EFE5D1] text-[#006838] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#003D25]">Quality Control</h3>
              <p className="text-xs text-[#8A8C8F] leading-relaxed">
                Strict multi-stage grading system for thickness, flexibility, and natural mineral concentration.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EFE5D1] shadow-xs space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#EFE5D1] text-[#006838] flex items-center justify-center">
                <Globe2 className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#003D25]">Pan-India Reach</h3>
              <p className="text-xs text-[#8A8C8F] leading-relaxed">
                Fast nationwide supply chain serving retail buyers and commercial distributors across all states in India.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-[#EFE5D1] shadow-xs space-y-3">
              <div className="w-11 h-11 rounded-full bg-[#EFE5D1] text-[#006838] flex items-center justify-center">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-base font-bold text-[#003D25]">Customer Trust</h3>
              <p className="text-xs text-[#8A8C8F] leading-relaxed">
                Backed by 5-star customer ratings and dedicated B2B customer support.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
