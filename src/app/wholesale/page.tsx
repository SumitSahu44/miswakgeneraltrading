'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Globe, Building2, PackageCheck, Send, CheckCircle2, ChevronRight, FileText } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function WholesalePage() {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    phone: '',
    country: '',
    estimatedQuantity: '1000 - 5000 units',
    productInterest: 'Miswak Sticks (Vacuum Sealed)',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const showToast = useCartStore((state) => state.showToast);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    showToast('Your wholesale inquiry has been received! Our export team will contact you within 24 hours.');
  };

  return (
    <div className="py-12 lg:py-20 bg-[#F8F4E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#8A8C8F] mb-8">
          <Link href="/" className="hover:text-[#006838]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#003D25] font-semibold">Wholesale &amp; Export</span>
        </nav>

        {/* Hero Banner */}
        <div className="bg-[#003D25] text-white rounded-3xl p-8 sm:p-14 border border-[#006838]/40 shadow-xl mb-12 relative overflow-hidden">
          <div className="relative z-10 max-w-3xl space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5A024]">
              PAN-INDIA B2B WHOLESALE DIRECT
            </span>
            <h1 className="font-serif text-3xl sm:text-5xl font-bold leading-tight">
              Nationwide Wholesale &amp; Bulk Supply
            </h1>
            <p className="text-base text-[#EFE5D1]/85 leading-relaxed">
              Miswak General Trading Est (MGTE) is a premier bulk supplier of fresh, vacuum-sealed Salvadora Persica miswak sticks and traditional wellness products to retailers, distributors, and pharmacy chains across India.
            </p>
          </div>
        </div>

        {/* Key Wholesale Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white p-6 rounded-2xl border border-[#EFE5D1] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#EFE5D1] text-[#006838] flex items-center justify-center">
              <PackageCheck className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#003D25]">Custom Branding &amp; OEM</h3>
            <p className="text-xs text-[#8A8C8F] leading-relaxed">
              Private label packaging, custom box design, barcode printing, and custom stick lengths for your market.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#EFE5D1] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#EFE5D1] text-[#006838] flex items-center justify-center">
              <Globe className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#003D25]">Pan-India Express Logistics</h3>
            <p className="text-xs text-[#8A8C8F] leading-relaxed">
              Direct shipping from Nagina, Mewat (Haryana) hub to all states &amp; cities across India.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-[#EFE5D1] shadow-xs space-y-3">
            <div className="w-12 h-12 rounded-full bg-[#EFE5D1] text-[#006838] flex items-center justify-center">
              <Building2 className="w-6 h-6 stroke-[1.5]" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#003D25]">GST &amp; Quality Certification</h3>
            <p className="text-xs text-[#8A8C8F] leading-relaxed">
              GST compliant invoice, Certificate of Origin, and Lab Quality Reports provided with every bulk order.
            </p>
          </div>
        </div>

        {/* Wholesale Form & Catalog Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Inquiry Form (7 Cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-8 border border-[#EFE5D1] shadow-sm">
            <h2 className="font-serif text-2xl font-bold text-[#003D25] mb-2">
              Request Wholesale Quotation
            </h2>
            <p className="text-xs text-[#8A8C8F] mb-6">
              Fill out the form below to receive factory direct wholesale pricing and sample details.
            </p>

            {isSubmitted ? (
              <div className="bg-[#003D25] text-white p-6 rounded-2xl space-y-3 animate-fade-in text-center">
                <CheckCircle2 className="w-12 h-12 text-[#E5A024] mx-auto" />
                <h3 className="font-serif text-xl font-bold">Inquiry Sent Successfully!</h3>
                <p className="text-xs text-[#EFE5D1]/80">
                  Thank you for contacting Miswak General Trading Est. Our B2B export manager will get in touch with you shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#003D25] mb-1">Company / Business Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      placeholder="e.g. Crescent Imports Ltd"
                      className="w-full px-4 py-3 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-xs focus:outline-none focus:border-[#006838]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#003D25] mb-1">Contact Person Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="e.g. Mr. Tariq Mansoor"
                      className="w-full px-4 py-3 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-xs focus:outline-none focus:border-[#006838]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#003D25] mb-1">Business Email *</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="wholesale@yourcompany.com"
                      className="w-full px-4 py-3 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-xs focus:outline-none focus:border-[#006838]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#003D25] mb-1">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-xs focus:outline-none focus:border-[#006838]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-[#003D25] mb-1">State / City *</label>
                    <input
                      type="text"
                      required
                      value={formData.country}
                      onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Maharashtra, Mumbai"
                      className="w-full px-4 py-3 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-xs focus:outline-none focus:border-[#006838]"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-[#003D25] mb-1">Estimated Order Quantity</label>
                    <select
                      value={formData.estimatedQuantity}
                      onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                      className="w-full px-4 py-3 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-xs focus:outline-none focus:border-[#006838]"
                    >
                      <option value="500 - 1000 units">500 - 1,000 units</option>
                      <option value="1000 - 5000 units">1,000 - 5,000 units</option>
                      <option value="5000 - 20000 units">5,000 - 20,000 units</option>
                      <option value="Full Container Load">Full Container Load (FCL)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-[#003D25] mb-1">Additional Requirements / Notes</label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Specify stick sizes, custom packaging, or specific target delivery dates..."
                    className="w-full px-4 py-3 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-xs focus:outline-none focus:border-[#006838]"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-[#006838] hover:bg-[#004D2C] text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Wholesale Inquiry</span>
                </button>
              </form>
            )}
          </div>

          {/* Download Catalog & Minimum Orders Info (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#003D25] text-white rounded-3xl p-8 border border-[#006838]/40 space-y-4">
              <FileText className="w-10 h-10 text-[#E5A024]" />
              <h3 className="font-serif text-2xl font-bold">Download Wholesale Catalog</h3>
              <p className="text-xs text-[#EFE5D1]/80 leading-relaxed">
                Get instant access to our complete product specifications, packaging dimensions, box counts, and export terms.
              </p>
              <button
                onClick={() => showToast('MGTE Product Catalog PDF downloaded!')}
                className="w-full py-3 bg-[#E5A024] hover:bg-[#d4931f] text-[#003D25] font-bold text-xs rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Download PDF Catalog</span>
              </button>
            </div>

            <div className="bg-white rounded-3xl p-8 border border-[#EFE5D1] space-y-4 shadow-xs">
              <h3 className="font-serif text-lg font-bold text-[#003D25]">Standard Export MOQs</h3>
              <ul className="space-y-3 text-xs text-[#171717]/80 divide-y divide-[#EFE5D1]">
                <li className="pt-2 flex justify-between">
                  <span>Miswak Sticks (Vacuum Pack)</span>
                  <span className="font-bold text-[#006838]">500 Packs</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span>Box Packs (Multi-Stick)</span>
                  <span className="font-bold text-[#006838]">250 Boxes</span>
                </li>
                <li className="pt-2 flex justify-between">
                  <span>Custom OEM Private Label</span>
                  <span className="font-bold text-[#006838]">2,000 Units</span>
                </li>
              </ul>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
