'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Search, ChevronRight } from 'lucide-react';
import { products } from '@/data/products';
import { Product } from '@/types/product';
import ProductCard from '@/components/product/ProductCard';

function SearchContent() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';

  const [query, setQuery] = useState(initialQuery);
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    const qParam = searchParams.get('q');
    if (qParam) {
      setQuery(qParam);
    }
  }, [searchParams]);

  useEffect(() => {
    if (!query.trim()) {
      setResults(products);
    } else {
      const q = query.toLowerCase().trim();
      const filtered = products.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          (p.category && p.category.toLowerCase().includes(q)) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
      setResults(filtered);
    }
  }, [query]);

  return (
    <div className="py-12 lg:py-20 bg-[#F8F4E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#8A8C8F]">
          <Link href="/" className="hover:text-[#006838]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/shop" className="hover:text-[#006838]">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#003D25] font-semibold">Search Results</span>
        </nav>

        {/* Search Input Banner */}
        <div className="bg-white rounded-3xl p-8 border border-[#EFE5D1] shadow-xs space-y-4">
          <h1 className="font-serif text-3xl font-bold text-[#003D25]">
            Search Product Catalog
          </h1>

          <form onSubmit={(e) => e.preventDefault()} className="relative flex items-center max-w-2xl">
            <Search className="w-5 h-5 text-[#006838] absolute left-4" />
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products by name, specifications, or keyword..."
              className="w-full pl-12 pr-4 py-3.5 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-2xl text-sm focus:outline-none focus:border-[#006838]"
            />
          </form>

          <p className="text-xs text-[#8A8C8F]">
            {query.trim()
              ? `Showing ${results.length} result(s) for "${query}"`
              : `Showing all ${results.length} products`}
          </p>
        </div>

        {/* Product Grid */}
        {results.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center border border-[#EFE5D1] space-y-3">
            <h3 className="font-serif text-xl font-bold text-[#003D25]">No matching products found</h3>
            <p className="text-sm text-[#8A8C8F]">Try searching with a different term like &quot;miswak&quot;, &quot;zaitoon&quot;, or &quot;powder&quot;.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {results.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <Suspense fallback={<div className="py-20 text-center text-sm text-[#8A8C8F]">Loading search...</div>}>
      <SearchContent />
    </Suspense>
  );
}
