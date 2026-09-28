import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '../product/ProductCard';

export default function BestSellers() {
  const bestSellers = products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-16 lg:py-24 bg-white border-y border-[#EFE5D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header with View All Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div className="space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E5A024]">
              POPULAR PRODUCTS
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#003D25]">
              Best Selling Miswak Products
            </h2>
          </div>

          <Link
            href="/shop"
            className="inline-flex items-center gap-1.5 text-sm font-bold text-[#006838] hover:text-[#004D2C] hover:underline transition-colors shrink-0"
          >
            <span>View All</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
}
