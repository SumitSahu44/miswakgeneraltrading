'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { SlidersHorizontal, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '@/components/product/ProductCard';

function ShopContent() {
  const searchParams = useSearchParams();
  const initialSort = searchParams.get('sort') || 'featured';

  const [selectedSort, setSelectedSort] = useState(initialSort);
  const [inStockOnly, setInStockOnly] = useState(false);

  useEffect(() => {
    const sortParam = searchParams.get('sort');
    if (sortParam) {
      setSelectedSort(sortParam);
    }
  }, [searchParams]);

  // Filtering & Sorting
  let filtered = products.filter((p) => {
    if (inStockOnly && !p.inStock) return false;
    return true;
  });

  if (selectedSort === 'price-low') {
    filtered.sort((a, b) => a.price - b.price);
  } else if (selectedSort === 'price-high') {
    filtered.sort((a, b) => b.price - a.price);
  } else if (selectedSort === 'newest') {
    filtered.reverse();
  }

  return (
    <div className="py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#8A8C8F]">
          <Link href="/" className="hover:text-[#006838]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#003D25] font-semibold">Our Product Range</span>
        </nav>

        {/* Page Title & Count */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-[#DBC6AD]/60">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#C88E3E]">
              DIRECT CATALOGUE
            </span>
            <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#003D25] mt-1">
              All Products
            </h1>
            <p className="text-xs sm:text-sm text-[#8A8C8F] mt-1">
              Showing all {filtered.length} authentic miswak sticks, extracts &amp; natural products
            </p>
          </div>

          {/* Controls (Sort & Stock toggle) */}
          <div className="flex flex-wrap items-center gap-3">
            <label className="flex items-center gap-2 px-3 py-2 bg-[#FFFDF8] rounded-xl border border-[#DBC6AD] text-xs font-medium text-[#171717] cursor-pointer select-none">
              <input
                type="checkbox"
                checked={inStockOnly}
                onChange={(e) => setInStockOnly(e.target.checked)}
                className="w-4 h-4 accent-[#006838] rounded cursor-pointer"
              />
              <span>In Stock Only</span>
            </label>

            {/* Sort Dropdown */}
            <div className="flex items-center gap-2 bg-[#FFFDF8] px-3 py-2 rounded-xl border border-[#DBC6AD]">
              <SlidersHorizontal className="w-4 h-4 text-[#8A8C8F]" />
              <select
                value={selectedSort}
                onChange={(e) => setSelectedSort(e.target.value)}
                className="bg-transparent text-xs font-semibold text-[#003D25] focus:outline-none cursor-pointer"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="newest">Newest Arrivals</option>
              </select>
            </div>
          </div>
        </div>

        {/* PRODUCT GRID */}
        <main>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </main>

      </div>
    </div>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm text-[#8A8C8F]">Loading shop products...</div>}>
      <ShopContent />
    </Suspense>
  );
}
