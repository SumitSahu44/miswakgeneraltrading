import Link from 'next/link';
import { Building2, Phone, Mail, Globe, Package, ArrowRight, ShieldCheck } from 'lucide-react';
import { CONTACT_INFO } from '@/data/contactInfo';

export default function DistributorsSection() {
  return (
    <section id="distribution" className="py-16 lg:py-24 border-b border-[#DBC6AD]/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#C88E3E]">
            OFFICIAL DISTRIBUTORS & AGENTS
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#003D25]">
            Distributors and Agents
          </h2>
          <p className="text-sm sm:text-base text-[#1C1814]/80 leading-relaxed">
            We partner with authorized distributors, agencies, and wholesale buyers across India.
          </p>
        </div>

        {/* Distribution & Main Office Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          
          {/* Main Office Card */}
          <div className="bg-[#FFFDF8] rounded-3xl p-8 border border-[#DBC6AD] shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#EBE0CE] border border-[#006838]/20 flex items-center justify-center text-[#006838] shrink-0">
                  <Building2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#003D25]">India – Main Office</h3>
                  <p className="text-xs text-[#8A8C8F]">Miswak General Trading Est (MGTE)</p>
                </div>
              </div>

              <div className="space-y-3.5 text-sm text-[#1C1814]/85 pt-2">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F0E5]/60 border border-[#DBC6AD]/40">
                  <Phone className="w-4 h-4 text-[#006838] shrink-0" />
                  <div>
                    <span className="text-xs text-[#8A8C8F] block">Phone / Mobile / WhatsApp</span>
                    <strong className="text-[#003D25]">{CONTACT_INFO.phone}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F0E5]/60 border border-[#DBC6AD]/40">
                  <Mail className="w-4 h-4 text-[#006838] shrink-0" />
                  <div className="min-w-0">
                    <span className="text-xs text-[#8A8C8F] block">Wholesale &amp; Bulk Inquiry</span>
                    <strong className="text-[#003D25] truncate block">{CONTACT_INFO.email}</strong>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-[#F6F0E5]/60 border border-[#DBC6AD]/40">
                  <Globe className="w-4 h-4 text-[#006838] shrink-0" />
                  <div>
                    <span className="text-xs text-[#8A8C8F] block">Official Website</span>
                    <strong className="text-[#006838]">{CONTACT_INFO.website}</strong>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#DBC6AD]/50">
              <Link
                href="/contact"
                className="w-full py-3 px-4 bg-[#006838] hover:bg-[#004D2C] text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Contact Main Office</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Wholesale & International Agency Card */}
          <div className="bg-[#003D25] text-white rounded-3xl p-8 border border-[#006838]/40 shadow-sm space-y-6 flex flex-col justify-between">
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#006838] flex items-center justify-center text-[#C88E3E] shrink-0 border border-[#C88E3E]/30">
                  <Package className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-bold text-[#F6F0E5]">Wholesale &amp; Bulk Distribution</h3>
                  <p className="text-xs text-[#EBE0CE]/70">Pan-India Agency &amp; Bulk Supply</p>
                </div>
              </div>

              <p className="text-sm text-[#EBE0CE]/85 leading-relaxed">
                Join our distribution network. We supply premium vacuum-packed Miswak sticks, bulk natural products, and customized packaging to authorized distributors and agents with fast tracked express shipping across India.
              </p>

              <div className="space-y-2 text-xs text-[#EBE0CE]/90 pt-2">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C88E3E]" />
                  <span>100% Hygienically Vacuum Packed</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C88E3E]" />
                  <span>Direct Supply &amp; Custom Labeling</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C88E3E]" />
                  <span>Pan-India Fast Delivery</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-[#006838]">
              <Link
                href="/wholesale"
                className="w-full py-3 px-4 bg-[#C88E3E] hover:bg-[#b07b32] text-white font-bold text-xs rounded-xl transition-all shadow-md flex items-center justify-center gap-2"
              >
                <span>Inquire for Wholesale &amp; Agency</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
