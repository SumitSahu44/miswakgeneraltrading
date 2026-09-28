import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '@/data/contactInfo';

export default function TermsPage() {
  return (
    <div className="py-12 lg:py-20 bg-[#F8F4E9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <nav className="flex items-center gap-2 text-xs text-[#8A8C8F]">
          <Link href="/" className="hover:text-[#006838]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#003D25] font-semibold">Terms &amp; Conditions</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EFE5D1] shadow-xs space-y-6 text-sm text-[#171717]/85 leading-relaxed">
          <h1 className="font-serif text-3xl font-bold text-[#003D25]">Terms &amp; Conditions</h1>
          <p className="text-xs text-[#8A8C8F]">Last Updated: September 2026</p>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#003D25]">1. Terms of Use</h2>
            <p>
              By accessing and placing an order with Miswak General Trading Est (MGTE), you confirm that you agree to and are bound by the terms of service outlined below.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#003D25]">2. Product Authenticity</h2>
            <p>
              All miswak sticks and natural oils supplied by MGTE are 100% natural, unadulterated, and sourced from natural Salvadora Persica roots.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#003D25]">3. International Wholesale &amp; Exports</h2>
            <p>
              Wholesale export orders are subject to Proforma Invoice terms, minimum order quantities (MOQs), and local import customs compliance of the destination country.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#003D25]">4. Contact</h2>
            <p>
              For legal or commercial inquiries, contact <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#006838] underline">{CONTACT_INFO.email}</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
