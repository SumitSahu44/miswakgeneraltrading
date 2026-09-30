'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { X, Search, ChevronRight, ChevronDown, Phone, Mail, MapPin, Package } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { CONTACT_INFO } from '@/data/contactInfo';
import { products } from '@/data/products';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [isProductsOpen, setIsProductsOpen] = useState(true);
  const { openSearch } = useCartStore();

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
      }`}
    >
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={onClose}
      />

      {/* Drawer */}
      <div
        className={`fixed inset-y-0 left-0 w-full max-w-xs bg-[#F8F4E9] shadow-2xl flex flex-col z-10 transition-transform duration-300 ease-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-[#EFE5D1] bg-[#003D25]">
          <Link href="/" onClick={onClose} className="block relative w-48 h-12">
            <Image
              src="/miswakgeneraltrading-small.jpeg"
              alt="Miswak General Trading Est Logo"
              fill
              className="object-contain object-left rounded-md bg-white/90 p-0.5"
            />
          </Link>
          <button
            onClick={onClose}
            className="p-2 text-[#EFE5D1] hover:text-white rounded-lg hover:bg-white/10"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Quick Actions */}
        <div className="p-4 bg-[#EFE5D1]/50 border-b border-[#EFE5D1]">
          <button
            onClick={() => { onClose(); openSearch(); }}
            className="w-full flex items-center justify-center gap-2 py-2.5 px-3 bg-white rounded-lg border border-[#8A8C8F]/20 text-[#006838] font-medium text-sm shadow-xs"
          >
            <Search className="w-4 h-4" />
            <span>Search Products</span>
          </button>
        </div>

        {/* Navigation Links */}
        <div className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
          {/* Home */}
          <Link
            href="/"
            onClick={onClose}
            className="flex items-center justify-between px-4 py-3 text-[#171717] hover:text-[#006838] hover:bg-[#EFE5D1]/60 font-semibold rounded-lg transition-colors text-sm"
          >
            <span>Home</span>
            <ChevronRight className="w-4 h-4 text-[#8A8C8F]" />
          </Link>

          {/* About US */}
          <Link
            href="/#about"
            onClick={onClose}
            className="flex items-center justify-between px-4 py-3 text-[#171717] hover:text-[#006838] hover:bg-[#EFE5D1]/60 font-semibold rounded-lg transition-colors text-sm"
          >
            <span>About US</span>
            <ChevronRight className="w-4 h-4 text-[#8A8C8F]" />
          </Link>

          {/* Benefits of Miswak */}
          <Link
            href="/#benefits"
            onClick={onClose}
            className="flex items-center justify-between px-4 py-3 text-[#171717] hover:text-[#006838] hover:bg-[#EFE5D1]/60 font-semibold rounded-lg transition-colors text-sm"
          >
            <span>Benefits of Miswak</span>
            <ChevronRight className="w-4 h-4 text-[#8A8C8F]" />
          </Link>

          {/* Distributors and Agents */}
          <Link
            href="/#distribution"
            onClick={onClose}
            className="flex items-center justify-between px-4 py-3 text-[#171717] hover:text-[#006838] hover:bg-[#EFE5D1]/60 font-semibold rounded-lg transition-colors text-sm"
          >
            <span>Distributors and Agents</span>
            <ChevronRight className="w-4 h-4 text-[#8A8C8F]" />
          </Link>

          {/* Products Accordion / Dropdown */}
          <div className="space-y-1">
            <button
              onClick={() => setIsProductsOpen(!isProductsOpen)}
              className="w-full flex items-center justify-between px-4 py-3 text-[#006838] bg-[#EFE5D1]/40 font-bold rounded-lg transition-colors text-sm"
            >
              <div className="flex items-center gap-2">
                <Package className="w-4 h-4 text-[#006838]" />
                <span>Products</span>
              </div>
              <ChevronDown className={`w-4 h-4 transition-transform ${isProductsOpen ? 'rotate-180 text-[#006838]' : 'text-[#8A8C8F]'}`} />
            </button>

            {isProductsOpen && (
              <div className="pl-4 pr-2 space-y-1 py-1">
                {products.map((item) => (
                  <Link
                    key={item.id}
                    href={`/shop/${item.slug}`}
                    onClick={onClose}
                    className="flex items-center justify-between px-3 py-2 text-xs font-medium text-[#171717] hover:text-[#006838] hover:bg-white rounded-lg transition-colors"
                  >
                    <span>• {item.name}</span>
                    <span className="text-[11px] font-bold text-[#006838]">₹{item.price}</span>
                  </Link>
                ))}

                <Link
                  href="/shop"
                  onClick={onClose}
                  className="block text-center py-2 text-xs font-bold text-[#006838] hover:underline pt-2"
                >
                  View All Products →
                </Link>
              </div>
            )}
          </div>

          {/* Contact */}
          <Link
            href="/contact"
            onClick={onClose}
            className="flex items-center justify-between px-4 py-3 text-[#171717] hover:text-[#006838] hover:bg-[#EFE5D1]/60 font-semibold rounded-lg transition-colors text-sm"
          >
            <span>Contact</span>
            <ChevronRight className="w-4 h-4 text-[#8A8C8F]" />
          </Link>
        </div>

        {/* Contact Info Footer */}
        <div className="p-4 bg-[#003D25] text-white text-xs space-y-2 border-t border-[#006838]/40">
          <p className="font-semibold text-[#E5A024]">{CONTACT_INFO.companyName}</p>
          <div className="flex items-center gap-2 text-[#EFE5D1]/90">
            <Mail className="w-3.5 h-3.5 text-[#E5A024] shrink-0" />
            <a href={`mailto:${CONTACT_INFO.email}`} className="hover:text-white transition-colors truncate">
              {CONTACT_INFO.email}
            </a>
          </div>
          <div className="flex items-center gap-2 text-[#EFE5D1]/90">
            <Phone className="w-3.5 h-3.5 text-[#E5A024] shrink-0" />
            <a href={`https://wa.me/${CONTACT_INFO.whatsappNumber}`} target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
              {CONTACT_INFO.phone}
            </a>
          </div>
          <div className="flex items-start gap-2 text-[#EFE5D1]/90">
            <MapPin className="w-3.5 h-3.5 text-[#E5A024] shrink-0 mt-0.5" />
            <span className="text-[11px] leading-tight">{CONTACT_INFO.address}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
