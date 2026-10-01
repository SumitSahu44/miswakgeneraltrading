'use client';

import { useState } from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Star, ShieldCheck, Truck, PackageCheck, ChevronRight, Building2, HelpCircle, MessageCircle, Check } from 'lucide-react';
import { products } from '@/data/products';
import { getSingleProductWhatsAppLink } from '@/data/contactInfo';
import ProductGallery from '@/components/product/ProductGallery';
import QuantitySelector from '@/components/product/QuantitySelector';
import ProductCard from '@/components/product/ProductCard';

interface ProductDetailsClientProps {
  slug: string;
}

export default function ProductDetailsClient({ slug }: ProductDetailsClientProps) {
  const product = products.find((p) => p.slug === slug);

  const [quantity, setQuantity] = useState(1000);
  const [selectedSpecIndex, setSelectedSpecIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'desc' | 'details' | 'shipping' | 'faq'>('desc');

  if (!product) {
    return notFound();
  }

  const relatedProducts = products
    .filter((p) => p.id !== product.id)
    .slice(0, 3);

  const activeSpec = product.specifications?.[selectedSpecIndex] || '';

  return (
    <div className="py-10 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#8A8C8F] mb-8">
          <Link href="/" className="hover:text-[#006838]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href="/shop" className="hover:text-[#006838]">Shop</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#003D25] font-semibold truncate max-w-[200px]">
            {product.name}
          </span>
        </nav>

        {/* Main Product Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-[#FFFDF8] rounded-3xl p-6 sm:p-10 border border-[#DBC6AD] shadow-sm mb-12">
          
          {/* LEFT: Product Gallery (6 Cols) */}
          <div className="lg:col-span-6">
            <ProductGallery images={product.images} productName={product.name} />
          </div>

          {/* RIGHT: Product Information (6 Cols) */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Badge */}
            {product.badge && (
              <div>
                <span className="bg-[#006838] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                  {product.badge}
                </span>
              </div>
            )}

            {/* Title */}
            <h1 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#003D25] leading-snug">
              {product.name}
            </h1>

            {/* Rating & Stock */}
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-4 h-4 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#E5A024] text-[#E5A024]'
                        : 'fill-gray-200 text-gray-300'
                    }`}
                  />
                ))}
                <span className="font-bold text-[#003D25] ml-1">{product.rating}</span>
                <span className="text-[#8A8C8F]">({product.reviewCount} reviews)</span>
              </div>

              <span className="text-[#8A8C8F]">|</span>

              <span className={`font-semibold ${product.inStock ? 'text-green-700' : 'text-red-600'}`}>
                {product.inStock ? 'In Stock (Ready to Ship)' : 'Out of Stock'}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 pt-2">
              <span className="font-serif text-3xl font-bold text-[#006838]">
                {product.currency}{product.price.toLocaleString()}
              </span>
              {product.compareAtPrice && (
                <span className="text-sm text-[#8A8C8F] line-through">
                  {product.currency}{product.compareAtPrice.toLocaleString()}
                </span>
              )}
              {product.compareAtPrice && (
                <span className="text-xs font-bold text-red-600 bg-red-50 px-2 py-0.5 rounded-md">
                  Save {Math.round(((product.compareAtPrice - product.price) / product.compareAtPrice) * 100)}%
                </span>
              )}
            </div>

            {/* Short Description */}
            <p className="text-sm text-[#171717]/80 leading-relaxed border-t border-[#EFE5D1] pt-4">
              {product.shortDescription}
            </p>

            {/* Specifications Selector (Length / Thickness) */}
            {product.specifications && product.specifications.length > 0 && (
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold uppercase tracking-wider text-[#003D25]">
                  Select Length &amp; Thickness:
                </span>
                <div className="flex flex-wrap gap-2">
                  {product.specifications.map((spec, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedSpecIndex(idx)}
                      className={`px-3.5 py-2 rounded-xl text-xs font-semibold border transition-all flex items-center gap-1.5 ${
                        selectedSpecIndex === idx
                          ? 'border-[#006838] bg-[#006838] text-white shadow-xs'
                          : 'border-[#DBC6AD] bg-[#F6F0E5] text-[#003D25] hover:border-[#006838]/50'
                      }`}
                    >
                      {selectedSpecIndex === idx && <Check className="w-3.5 h-3.5 text-white" />}
                      <span>{spec}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Quantity Selector & Action Buttons */}
            <div className="space-y-4 pt-2">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-[#8A8C8F]">
                    Quantity:
                  </span>
                  <span className="text-[11px] font-bold text-[#006838] bg-[#EBE0CE] px-2 py-0.5 rounded-md">
                    MOQ: 1,000 Pcs
                  </span>
                </div>
                <QuantitySelector quantity={quantity} onChange={setQuantity} min={1000} step={100} />
              </div>

              <div className="pt-2">
                <a
                  href={getSingleProductWhatsAppLink(
                    `${product.name}${activeSpec ? ` (${activeSpec})` : ''}`,
                    product.price,
                    quantity
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 bg-[#25D366] hover:bg-[#20bd5a] active:scale-98 text-white font-bold text-base rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2.5"
                >
                  <MessageCircle className="w-5 h-5 fill-current shrink-0" />
                  <span>Order on WhatsApp (97291 37786)</span>
                </a>
              </div>

              {/* Wholesale / Bulk Export Banner */}
              <div className="bg-[#F6F0E5] p-4 rounded-2xl border border-[#DBC6AD] flex items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2.5 text-[#003D25]">
                  <Building2 className="w-5 h-5 text-[#C88E3E] shrink-0" />
                  <div>
                    <p className="font-bold">Need Bulk / Wholesale Quantity?</p>
                    <p className="text-[#8A8C8F]">Wholesale rates &amp; pan-India delivery available.</p>
                  </div>
                </div>
                <Link
                  href="/wholesale"
                  className="px-3.5 py-2 bg-white border border-[#006838] text-[#006838] font-bold rounded-xl hover:bg-[#006838] hover:text-white transition-all shrink-0"
                >
                  Inquire
                </Link>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-3 border-t border-[#DBC6AD]/60 pt-6 text-center text-xs">
              <div className="space-y-1">
                <ShieldCheck className="w-5 h-5 text-[#006838] mx-auto" />
                <p className="font-bold text-[#003D25]">Secure Quality</p>
                <p className="text-[11px] text-[#8A8C8F]">Fresh natural cut</p>
              </div>
              <div className="space-y-1">
                <PackageCheck className="w-5 h-5 text-[#006838] mx-auto" />
                <p className="font-bold text-[#003D25]">Quality Checked</p>
                <p className="text-[11px] text-[#8A8C8F]">100% authentic root</p>
              </div>
              <div className="space-y-1">
                <Truck className="w-5 h-5 text-[#006838] mx-auto" />
                <p className="font-bold text-[#003D25]">Pan-India Delivery</p>
                <p className="text-[11px] text-[#8A8C8F]">Fast express tracking</p>
              </div>
            </div>

          </div>

        </div>

        {/* Detailed Tabs (Description, Product Details, Shipping, FAQ) */}
        <div className="bg-[#FFFDF8] rounded-3xl border border-[#DBC6AD] p-6 sm:p-10 shadow-sm mb-16">
          <div className="flex items-center gap-6 border-b border-[#DBC6AD]/60 pb-4 overflow-x-auto">
            <button
              onClick={() => setActiveTab('desc')}
              className={`font-serif text-lg font-bold pb-2 border-b-2 transition-colors shrink-0 ${
                activeTab === 'desc'
                  ? 'border-[#006838] text-[#006838]'
                  : 'border-transparent text-[#8A8C8F] hover:text-[#003D25]'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab('details')}
              className={`font-serif text-lg font-bold pb-2 border-b-2 transition-colors shrink-0 ${
                activeTab === 'details'
                  ? 'border-[#006838] text-[#006838]'
                  : 'border-transparent text-[#8A8C8F] hover:text-[#003D25]'
              }`}
            >
              Specifications
            </button>
            <button
              onClick={() => setActiveTab('shipping')}
              className={`font-serif text-lg font-bold pb-2 border-b-2 transition-colors shrink-0 ${
                activeTab === 'shipping'
                  ? 'border-[#006838] text-[#006838]'
                  : 'border-transparent text-[#8A8C8F] hover:text-[#003D25]'
              }`}
            >
              Shipping &amp; Delivery
            </button>
            <button
              onClick={() => setActiveTab('faq')}
              className={`font-serif text-lg font-bold pb-2 border-b-2 transition-colors shrink-0 ${
                activeTab === 'faq'
                  ? 'border-[#006838] text-[#006838]'
                  : 'border-transparent text-[#8A8C8F] hover:text-[#003D25]'
              }`}
            >
              FAQs
            </button>
          </div>

          <div className="pt-6 text-sm text-[#171717]/80 leading-relaxed">
            {activeTab === 'desc' && (
              <div className="space-y-4">
                <p>{product.description}</p>
                <p>
                  Miswak General Trading Est ensures that all miswak products are 100% natural and high-grade. Regular use helps strengthen gums, prevents plaque formation, and leaves a clean, fresh natural feel.
                </p>
              </div>
            )}

            {activeTab === 'details' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 bg-[#F8F4E9] rounded-xl space-y-1">
                  <span className="text-xs font-bold text-[#8A8C8F] uppercase">Product Code</span>
                  <p className="font-semibold text-[#003D25]">{product.sku}</p>
                </div>
                <div className="p-4 bg-[#F8F4E9] rounded-xl space-y-1">
                  <span className="text-xs font-bold text-[#8A8C8F] uppercase">Country of Origin</span>
                  <p className="font-semibold text-[#003D25]">{product.origin}</p>
                </div>
                <div className="p-4 bg-[#F8F4E9] rounded-xl space-y-1">
                  <span className="text-xs font-bold text-[#8A8C8F] uppercase">Specifications</span>
                  <p className="font-semibold text-[#003D25]">
                    {product.specifications?.join(', ') || '100% Natural'}
                  </p>
                </div>
                <div className="p-4 bg-[#F8F4E9] rounded-xl space-y-1">
                  <span className="text-xs font-bold text-[#8A8C8F] uppercase">Certification</span>
                  <p className="font-semibold text-[#003D25]">100% Halal &amp; Natural</p>
                </div>
              </div>
            )}

            {activeTab === 'shipping' && (
              <div className="space-y-3">
                <h4 className="font-bold text-[#003D25]">Pan-India Express Shipping</h4>
                <p>We dispatch all orders within 24 hours. Express shipments across all Indian states deliver within 2–5 business days.</p>
              </div>
            )}

            {activeTab === 'faq' && (
              <div className="space-y-4">
                <div className="space-y-1">
                  <h4 className="font-bold text-[#003D25] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#006838]" /> How do I store my miswak?
                  </h4>
                  <p className="text-xs text-[#8A8C8F] pl-6">Store in a cool dry place. If the bristles dry out, soak the tip in clean water for a few minutes.</p>
                </div>
                <div className="space-y-1">
                  <h4 className="font-bold text-[#003D25] flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-[#006838]" /> How often should I trim the tip?
                  </h4>
                  <p className="text-xs text-[#8A8C8F] pl-6">Trim off the used bristle tip every 3–5 days to keep the miswak fresh and hygienic.</p>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="space-y-8">
            <h2 className="font-serif text-2xl font-bold text-[#003D25]">
              Other Products You Might Like
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relProduct) => (
                <ProductCard key={relProduct.id} product={relProduct} />
              ))}
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
