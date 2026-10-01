'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Star, MessageCircle } from 'lucide-react';
import { Product } from '@/types/product';
import { getSingleProductWhatsAppLink } from '@/data/contactInfo';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-[#FFFDF8] rounded-2xl border border-[#DBC6AD] shadow-sm hover:shadow-xl hover:border-[#006838]/40 transition-all duration-300 flex flex-col h-full overflow-hidden relative">
      
      {/* Product Image Area */}
      <Link href={`/shop/${product.slug}`} className="block relative aspect-square bg-[#F6F0E5]/60 p-6 overflow-hidden">
        {/* Badge */}
        {product.badge && (
          <span className="absolute top-3 left-3 z-10 bg-[#006838] text-[#F6F0E5] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-md shadow-xs">
            {product.badge}
          </span>
        )}

        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
        />
      </Link>

      {/* Product Info Area */}
      <div className="p-5 flex flex-col flex-1 justify-between bg-[#FFFDF8]">
        <div>
          {/* Specifications Badges & Rating */}
          <div className="flex items-center justify-between gap-2 mb-1.5">
            <span className="text-[11px] font-semibold text-[#003D25] bg-[#EBE0CE] px-2.5 py-0.5 rounded-md border border-[#DBC6AD]/40">
              {product.specifications?.[0] || '100% Natural'}
            </span>
            <div className="flex items-center gap-1 text-xs font-semibold text-[#171717]">
              <Star className="w-3.5 h-3.5 fill-[#C88E3E] text-[#C88E3E]" />
              <span>{product.rating}</span>
            </div>
          </div>

          {/* Title */}
          <Link href={`/shop/${product.slug}`} className="block">
            <h3 className="font-serif text-base font-bold text-[#003D25] group-hover:text-[#006838] transition-colors line-clamp-2 leading-snug min-h-[2.75rem]">
              {product.name}
            </h3>
          </Link>
          
          {/* Specifications Sublist */}
          {product.specifications && product.specifications.length > 1 && (
            <div className="mt-1 space-y-0.5">
              {product.specifications.slice(1).map((spec, idx) => (
                <p key={idx} className="text-[11px] text-[#8A8C8F]">
                  • {spec}
                </p>
              ))}
            </div>
          )}
        </div>

        {/* Pricing & Direct WhatsApp Order */}
        <div className="pt-4 border-t border-[#DBC6AD]/60 mt-4 flex flex-col gap-3">
          <div className="flex items-baseline justify-between gap-2">
            <div className="flex items-baseline gap-2">
              <span className="text-xl font-bold text-[#006838]">
                {product.currency}{product.price.toLocaleString()}
              </span>
              {product.compareAtPrice && (
                <span className="text-xs text-[#8A8C8F] line-through">
                  {product.currency}{product.compareAtPrice.toLocaleString()}
                </span>
              )}
            </div>
            <span className="text-[10px] font-bold text-[#006838] bg-[#EBE0CE] px-2 py-0.5 rounded-md">
              MOQ: 1,000 Pcs
            </span>
          </div>

          <a
            href={getSingleProductWhatsAppLink(product.name, product.price, 1000)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full py-2.5 px-3 bg-[#25D366] hover:bg-[#20bd5a] active:scale-98 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
          >
            <MessageCircle className="w-4 h-4 fill-current shrink-0" />
            <span>Order on WhatsApp (1000 Pcs)</span>
          </a>
        </div>

      </div>

    </div>
  );
}
