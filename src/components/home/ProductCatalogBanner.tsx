'use client';

import { FileText, Download, ExternalLink, Sparkles, CheckCircle2 } from 'lucide-react';

export default function ProductCatalogBanner() {
  return (
    <div className="my-10 bg-gradient-to-br from-[#003D25] via-[#004D2C] to-[#002B1A] text-white rounded-3xl p-6 sm:p-10 border border-[#C88E3E]/40 shadow-xl relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-[#C88E3E]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 bg-[#006838]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Side Info */}
        <div className="lg:col-span-8 space-y-4 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-[#C88E3E]/20 text-[#E5A024] border border-[#C88E3E]/40 text-xs font-bold px-3.5 py-1.5 rounded-full uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E5A024]" />
            <span>Official Product Catalog PDF</span>
          </div>

          <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#FFFDF8] leading-tight">
            Complete Miswak Products &amp; Wholesale Price List
          </h2>

          <p className="text-sm sm:text-base text-[#EFE5D1]/90 max-w-2xl leading-relaxed">
            Download or view our detailed product catalog in high-resolution PDF format. Contains full product specifications, sizes, packaging options, and wholesale rates.
          </p>

          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-1 text-xs text-[#EFE5D1]">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>All 8 Product Variants Included</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>Wholesale &amp; Retail Pricing</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#25D366]" />
              <span>High Quality Official Document</span>
            </div>
          </div>
        </div>

        {/* Right Side Buttons */}
        <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3.5 justify-center">
          {/* View PDF Button */}
          <a
            href="/miswak_products.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full py-3.5 px-5 bg-[#C88E3E] hover:bg-[#b57d32] text-white font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 group"
          >
            <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span>View Catalog PDF</span>
            <ExternalLink className="w-4 h-4 opacity-75 group-hover:translate-x-0.5 transition-transform" />
          </a>

          {/* Download PDF Button */}
          <a
            href="/miswak_products.pdf"
            download="Miswak_Products_Catalog_MGTE.pdf"
            className="w-full py-3.5 px-5 bg-[#FFFDF8] hover:bg-[#F6F0E5] text-[#003D25] font-bold text-sm rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2.5 group"
          >
            <Download className="w-5 h-5 text-[#006838] group-hover:translate-y-0.5 transition-transform" />
            <span>Download Catalog PDF</span>
          </a>
        </div>
      </div>
    </div>
  );
}
