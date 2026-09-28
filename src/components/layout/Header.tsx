'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Search, Menu, ChevronDown, Sparkles } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { products } from '@/data/products';
import MobileMenu from './MobileMenu';

export default function Header() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const { openSearch } = useCartStore();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isProductsActive = pathname.startsWith('/shop');

  return (
    <>
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F4E9]/95 backdrop-blur-md shadow-md border-b border-[#EFE5D1] py-3'
            : 'bg-[#F8F4E9] border-b border-[#EFE5D1]/80 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            
            {/* Mobile Hamburger (Left on mobile) */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2 text-[#003D25] hover:text-[#006838] hover:bg-[#EFE5D1]/50 rounded-lg"
                aria-label="Open Mobile Menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>

            {/* LEFT: MGTE Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="relative block w-40 sm:w-48 h-12">
                <Image
                  src="/miswakgeneraltrading-small.jpeg"
                  alt="Miswak General Trading Est (MGTE)"
                  fill
                  priority
                  className="object-contain object-left rounded-md"
                />
              </Link>
            </div>

            {/* CENTER: Navigation Links (Desktop) */}
            <nav className="hidden lg:flex items-center gap-8">
              {/* Home Link */}
              <Link
                href="/"
                className={`relative font-medium text-sm transition-colors py-1 ${
                  pathname === '/'
                    ? 'text-[#006838] font-semibold'
                    : 'text-[#171717] hover:text-[#006838]'
                }`}
              >
                Home
                {pathname === '/' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#006838] rounded-full" />
                )}
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                ref={dropdownRef}
                onMouseEnter={() => setIsDropdownOpen(true)}
                onMouseLeave={() => setIsDropdownOpen(false)}
              >
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`relative font-medium text-sm transition-colors py-1 flex items-center gap-1.5 ${
                    isProductsActive
                      ? 'text-[#006838] font-semibold'
                      : 'text-[#171717] hover:text-[#006838]'
                  }`}
                >
                  <span>Products</span>
                  <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180 text-[#006838]' : 'text-[#8A8C8F]'}`} />
                  {isProductsActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#006838] rounded-full" />
                  )}
                </button>

                {/* Dropdown Menu Box */}
                {isDropdownOpen && (
                  <div className="absolute top-full left-0 pt-1 z-50">
                    <div className="w-80 bg-white rounded-2xl shadow-2xl border border-[#EFE5D1] p-3 space-y-1 animate-fade-in">
                      <div className="px-3 py-1.5 border-b border-[#EFE5D1] flex items-center justify-between text-[11px] font-bold uppercase tracking-wider text-[#E5A024]">
                        <span>Our 6 Products</span>
                        <Sparkles className="w-3.5 h-3.5" />
                      </div>

                    {products.map((item) => (
                      <Link
                        key={item.id}
                        href={`/shop/${item.slug}`}
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center justify-between px-3 py-2.5 rounded-xl hover:bg-[#F8F4E9] transition-colors group"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          <span className="w-2 h-2 rounded-full bg-[#006838] shrink-0 opacity-70 group-hover:opacity-100" />
                          <span className="text-xs font-semibold text-[#171717] group-hover:text-[#006838] truncate">
                            {item.name}
                          </span>
                        </div>
                        <span className="text-[11px] font-bold text-[#006838] shrink-0">
                          ₹{item.price}
                        </span>
                      </Link>
                    ))}

                    <div className="pt-2 border-t border-[#EFE5D1] mt-1">
                      <Link
                        href="/shop"
                        onClick={() => setIsDropdownOpen(false)}
                        className="block w-full py-2 text-center text-xs font-bold text-[#006838] hover:bg-[#006838] hover:text-white rounded-xl transition-all"
                      >
                        Browse All Products →
                      </Link>
                    </div>
                  </div>
                </div>
                )}
              </div>

              {/* Wholesale Link */}
              <Link
                href="/wholesale"
                className={`relative font-medium text-sm transition-colors py-1 ${
                  pathname === '/wholesale'
                    ? 'text-[#006838] font-semibold'
                    : 'text-[#171717] hover:text-[#006838]'
                }`}
              >
                Wholesale
                {pathname === '/wholesale' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#006838] rounded-full" />
                )}
              </Link>

              {/* About Link */}
              <Link
                href="/about"
                className={`relative font-medium text-sm transition-colors py-1 ${
                  pathname === '/about'
                    ? 'text-[#006838] font-semibold'
                    : 'text-[#171717] hover:text-[#006838]'
                }`}
              >
                About
                {pathname === '/about' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#006838] rounded-full" />
                )}
              </Link>

              {/* Contact Link */}
              <Link
                href="/contact"
                className={`relative font-medium text-sm transition-colors py-1 ${
                  pathname === '/contact'
                    ? 'text-[#006838] font-semibold'
                    : 'text-[#171717] hover:text-[#006838]'
                }`}
              >
                Contact
                {pathname === '/contact' && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#006838] rounded-full" />
                )}
              </Link>
            </nav>

            {/* RIGHT: Actions (Search) */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* Search */}
              <button
                onClick={openSearch}
                className="p-2 text-[#003D25] hover:text-[#006838] hover:bg-[#EFE5D1]/50 rounded-full transition-colors"
                aria-label="Search Products"
                title="Search"
              >
                <Search className="w-5 h-5" />
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
      />
    </>
  );
}
