'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, ShieldCheck, ChevronRight, Tag, MessageCircle } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { getWhatsAppOrderLink } from '@/data/contactInfo';

export default function CartPage() {
  const { items, updateQuantity, removeItem, clearCart, getSubtotal, showToast } = useCartStore();
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);

  const subtotal = getSubtotal();
  const freeShippingThreshold = 2000;
  const shippingFee = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 150;
  const grandTotal = Math.max(subtotal - discount + shippingFee, 0);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'MGTE10') {
      const disc = Math.round(subtotal * 0.1);
      setDiscount(disc);
      showToast('Promo code MGTE10 applied! You saved 10%.');
    } else {
      showToast('Invalid promo code. Try "MGTE10" for 10% off.');
    }
  };

  const handleCheckout = () => {
    showToast('Proceeding to Checkout! Backend integration ready.');
  };

  return (
    <div className="py-12 lg:py-20 bg-[#F8F4E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-[#8A8C8F] mb-8">
          <Link href="/" className="hover:text-[#006838]">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-[#003D25] font-semibold">Shopping Cart</span>
        </nav>

        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#003D25] mb-8">
          Your Shopping Cart
        </h1>

        {items.length === 0 ? (
          <div className="bg-white rounded-3xl p-12 text-center max-w-xl mx-auto border border-[#EFE5D1] shadow-sm space-y-4">
            <div className="w-20 h-20 rounded-full bg-[#EFE5D1] text-[#006838] flex items-center justify-center mx-auto">
              <ShoppingBag className="w-10 h-10 stroke-[1.5]" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-[#003D25]">Your Cart is Currently Empty</h2>
            <p className="text-sm text-[#8A8C8F]">
              Explore our selection of natural miswak sticks, box packs, extracts and powders.
            </p>
            <div className="pt-4">
              <Link
                href="/shop"
                className="px-8 py-3.5 bg-[#006838] hover:bg-[#004D2C] text-white font-semibold text-sm rounded-full shadow-md transition-all inline-flex items-center gap-2"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* ITEMS LIST (8 Cols) */}
            <div className="lg:col-span-8 bg-white rounded-3xl p-6 sm:p-8 border border-[#EFE5D1] shadow-sm space-y-6">
              
              <div className="flex items-center justify-between pb-4 border-b border-[#EFE5D1]">
                <h2 className="font-serif text-xl font-bold text-[#003D25]">
                  Cart Items ({items.length})
                </h2>
                <button
                  onClick={clearCart}
                  className="text-xs text-red-600 hover:underline font-semibold"
                >
                  Clear Cart
                </button>
              </div>

              <div className="divide-y divide-[#EFE5D1] space-y-4">
                {items.map(({ product, quantity }) => (
                  <div key={product.id} className="pt-4 first:pt-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-[#F8F4E9] rounded-xl border border-[#EFE5D1] relative overflow-hidden shrink-0 p-2">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                      <div>
                        <Link href={`/shop/${product.slug}`}>
                          <h3 className="font-serif text-base font-bold text-[#003D25] hover:text-[#006838] transition-colors">
                            {product.name}
                          </h3>
                        </Link>
                        <p className="text-xs text-[#8A8C8F] mt-0.5">{product.category}</p>
                        <p className="text-xs font-semibold text-[#006838] mt-1">₹{product.price} each</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-6 pt-2 sm:pt-0">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-[#8A8C8F]/30 bg-white rounded-xl overflow-hidden">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="px-3 py-1.5 hover:bg-[#EFE5D1] text-[#003D25]"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-bold text-[#171717]">{quantity}</span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="px-3 py-1.5 hover:bg-[#EFE5D1] text-[#003D25]"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Subtotal & Delete */}
                      <div className="flex items-center gap-4">
                        <span className="font-bold text-base text-[#003D25]">
                          ₹{(product.price * quantity).toLocaleString()}
                        </span>
                        <button
                          onClick={() => removeItem(product.id)}
                          className="text-[#8A8C8F] hover:text-red-600 transition-colors p-1"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                  </div>
                ))}
              </div>

            </div>

            {/* ORDER SUMMARY (4 Cols) */}
            <div className="lg:col-span-4 bg-white rounded-3xl p-6 sm:p-8 border border-[#EFE5D1] shadow-sm space-y-6">
              <h2 className="font-serif text-xl font-bold text-[#003D25] pb-4 border-b border-[#EFE5D1]">
                Order Summary
              </h2>

              {/* Promo Code Input */}
              <form onSubmit={handleApplyPromo} className="space-y-2">
                <label className="block text-xs font-bold text-[#003D25] uppercase tracking-wider">
                  Promo / Coupon Code
                </label>
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <Tag className="w-4 h-4 text-[#8A8C8F] absolute left-3 top-3" />
                    <input
                      type="text"
                      value={promoCode}
                      onChange={(e) => setPromoCode(e.target.value)}
                      placeholder="Try 'MGTE10'"
                      className="w-full pl-9 pr-3 py-2.5 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-xs uppercase font-bold focus:outline-none focus:border-[#006838]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-[#003D25] hover:bg-[#004D2C] text-white font-bold text-xs rounded-xl"
                  >
                    Apply
                  </button>
                </div>
              </form>

              {/* Summary Breakdown */}
              <div className="space-y-3 pt-4 border-t border-[#EFE5D1] text-xs">
                <div className="flex justify-between text-[#171717]/80">
                  <span>Subtotal</span>
                  <span className="font-bold text-[#171717]">₹{subtotal.toLocaleString()}</span>
                </div>

                {discount > 0 && (
                  <div className="flex justify-between text-green-700">
                    <span>Discount (10%)</span>
                    <span className="font-bold">-₹{discount.toLocaleString()}</span>
                  </div>
                )}

                <div className="flex justify-between text-[#171717]/80">
                  <span>Estimated Shipping</span>
                  <span className="font-bold text-[#006838]">
                    {shippingFee === 0 ? 'FREE' : `₹${shippingFee}`}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-[#003D25] pt-3 border-t border-[#EFE5D1]">
                  <span>Grand Total</span>
                  <span className="text-[#006838]">₹{grandTotal.toLocaleString()}</span>
                </div>
              </div>

              <a
                href={getWhatsAppOrderLink(items, grandTotal)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm rounded-2xl shadow-md transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                <span>Order via WhatsApp</span>
              </a>

              <div className="pt-2 text-center text-[11px] text-[#8A8C8F] flex items-center justify-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#006838]" />
                <span>Instant Direct WhatsApp Ordering (97291 37786)</span>
              </div>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}
