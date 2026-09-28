import React from 'react';
import Link from 'next/link';

export default function AnnouncementBar() {
  return (
    <div className="bg-[#003D25] text-white text-xs py-2 px-4 border-b border-[#006838]/30">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Left */}
        <div className="flex items-center gap-2 font-medium tracking-wide text-[#EFE5D1]">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E5A024]"></span>
          <span>Natural. Healthy. Authentic.</span>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4 text-[#EFE5D1]/90">
          <Link href="/wholesale" className="hover:text-white transition-colors">
            International Wholesale
          </Link>
          <span className="text-[#006838]">|</span>
          <span>Retail</span>
          <span className="text-[#006838]">|</span>
          <Link href="/wholesale" className="hover:text-white transition-colors">
            Export
          </Link>
        </div>
      </div>
    </div>
  );
}
