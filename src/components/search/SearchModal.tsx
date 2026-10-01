'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X, ArrowRight } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { products } from '@/data/products';
import { Product } from '@/types/product';

export default function SearchModal() {
  const { isSearchOpen, closeSearch } = useCartStore();
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
    } else {
      const q = query.toLowerCase().trim();
      const filtered = products.filter(
        p => p.name.toLowerCase().includes(q) ||
             (p.category && p.category.toLowerCase().includes(q)) ||
             p.tags.some(t => t.toLowerCase().includes(q))
      );
      setResults(filtered.slice(0, 5));
    }
  }, [query]);

  if (!isSearchOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      closeSearch();
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={closeSearch}
      />

      {/* Modal Container */}
      <div className="min-h-screen px-4 text-center">
        <div className="inline-block w-full max-w-2xl my-12 text-left align-middle transition-all transform bg-[#F6F0E5] shadow-2xl rounded-2xl border border-[#DBC6AD] overflow-hidden relative animate-fade-in z-10">
          
          {/* Search Header Form */}
          <form onSubmit={handleSubmit} className="relative flex items-center p-4 border-b border-[#DBC6AD] bg-[#FFFDF8]">
            <Search className="w-5 h-5 text-[#006838] ml-2 shrink-0" />
            <input
              type="text"
              value={query}
              onChange={e => setQuery(e.target.value)}
              placeholder="Search products (e.g. Miswak, Zaitoon, Powder, Extract)..."
              className="w-full px-4 py-2 text-base bg-transparent text-[#171717] focus:outline-none placeholder-[#8A8C8F]"
              autoFocus
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                className="p-1 text-[#8A8C8F] hover:text-[#171717] mr-2"
              >
                <X className="w-4 h-4" />
              </button>
            )}
            <button
              type="button"
              onClick={closeSearch}
              className="p-2 text-[#003D25] hover:bg-[#EBE0CE]/50 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </form>

          {/* Instant Search Suggestions / Results */}
          <div className="p-6 max-h-[60vh] overflow-y-auto divide-y divide-[#DBC6AD]/60">
            {query.trim() === '' ? (
              <div className="space-y-4">
                <p className="text-xs font-semibold text-[#8A8C8F] uppercase tracking-wider">Popular Searches</p>
                <div className="flex flex-wrap gap-2">
                  {['Miswak Stick', 'Zaitoon Stick', 'Miswak Powder', 'Miswak Extract', 'Raw Cut Miswak'].map(tag => (
                    <button
                      key={tag}
                      onClick={() => setQuery(tag)}
                      className="px-3 py-1.5 bg-[#FFFDF8] border border-[#DBC6AD] hover:border-[#006838] text-xs font-medium text-[#003D25] rounded-full transition-all"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            ) : results.length === 0 ? (
              <div className="py-8 text-center text-[#8A8C8F]">
                <p>No products found matching &quot;{query}&quot;</p>
              </div>
            ) : (
              <div className="space-y-3">
                <p className="text-xs font-semibold text-[#8A8C8F] uppercase tracking-wider mb-3">Quick Suggestions</p>
                {results.map(product => (
                  <Link
                    key={product.id}
                    href={`/shop/${product.slug}`}
                    onClick={closeSearch}
                    className="flex items-center gap-4 py-2 px-2 hover:bg-[#EBE0CE]/50 rounded-xl transition-colors group"
                  >
                    <div className="w-14 h-14 bg-[#FFFDF8] border border-[#DBC6AD] rounded-lg relative overflow-hidden shrink-0 p-1">
                      <Image
                        src={product.images[0]}
                        alt={product.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="text-sm font-medium text-[#171717] group-hover:text-[#006838] transition-colors truncate">
                        {product.name}
                      </h4>
                      <p className="text-xs text-[#8A8C8F]">{product.specifications?.[0] || '100% Natural'}</p>
                    </div>
                    <p className="text-sm font-semibold text-[#006838]">₹{product.price}</p>
                  </Link>
                ))}

                <div className="pt-4 text-center">
                  <button
                    onClick={handleSubmit}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#006838] hover:text-[#004D2C] hover:underline"
                  >
                    View all results for &quot;{query}&quot; <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
