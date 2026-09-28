import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { CONTACT_INFO } from '@/data/contactInfo';

export default function PrivacyPolicyPage() {
  return (
    <div className="py-12 lg:py-20 bg-[#F8F4E9]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <nav className="flex items-center gap-2 text-xs text-[#8A8C8F]">
          <Link href="/" className="hover:text-[#006838]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#003D25] font-semibold">Privacy Policy</span>
        </nav>

        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-[#EFE5D1] shadow-xs space-y-6 text-sm text-[#171717]/85 leading-relaxed">
          <h1 className="font-serif text-3xl font-bold text-[#003D25]">Privacy Policy</h1>
          <p className="text-xs text-[#8A8C8F]">Last Updated: September 2026</p>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#003D25]">1. Introduction</h2>
            <p>
              Miswak General Trading Est (&quot;MGTE&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;) respects your privacy and is committed to protecting your personal data. This privacy policy informs you how we look after your personal data when you visit our website and shop our products.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#003D25]">2. Information We Collect</h2>
            <p>
              We may collect personal identity data (name, contact numbers), delivery address data for order fulfillment, and transaction history when placing retail or wholesale inquiries.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#003D25]">3. How We Use Your Information</h2>
            <p>
              We process your personal information strictly to fulfill customer orders, process export documentation, communicate order tracking, and provide customer support.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="font-serif text-xl font-bold text-[#003D25]">4. Contact Us</h2>
            <p>
              If you have any questions regarding this Privacy Policy, please email us at <a href={`mailto:${CONTACT_INFO.email}`} className="text-[#006838] underline">{CONTACT_INFO.email}</a>.
            </p>
          </section>
        </div>

      </div>
    </div>
  );
}
