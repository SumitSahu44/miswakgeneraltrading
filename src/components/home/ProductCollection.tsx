import Link from 'next/link';
import { ArrowRight, Sparkles } from 'lucide-react';
import { products } from '@/data/products';
import ProductCard from '../product/ProductCard';

export default function ProductCollection() {
  return (
    <section className="py-16 lg:py-24 bg-white border-y border-[#EFE5D1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5A024] inline-flex items-center gap-1.5 justify-center">
            <Sparkles className="w-4 h-4 text-[#E5A024]" />
            OUR COMPLETE RANGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#003D25]">
            Authentic Miswak Products
          </h2>
          <p className="text-sm sm:text-base text-[#171717]/75">
            100% natural, fresh Salvadora Persica &amp; Zaitoon products for daily oral wellness.
          </p>
        </div>

        {/* 6 Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Bottom Call to Action */}
        <div className="text-center pt-4">
          <Link
            href="/shop"
            className="px-8 py-3.5 bg-[#006838] hover:bg-[#004D2C] text-white font-semibold text-sm rounded-full shadow-md transition-all inline-flex items-center gap-2"
          >
            <span>Explore All Products</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
