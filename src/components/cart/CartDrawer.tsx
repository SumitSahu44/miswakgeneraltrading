'use client';

import Image from 'next/image';
import Link from 'next/link';
import { X, Plus, Minus, Trash2, ShoppingBag, ArrowRight, ShieldCheck, MessageCircle } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';
import { getWhatsAppOrderLink } from '@/data/contactInfo';

export default function CartDrawer() {
  const {
    items,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeItem,
    getSubtotal,
    getTotalItems,
  } = useCartStore();

  if (!isCartOpen) return null;

  const subtotal = getSubtotal();
  const totalItems = getTotalItems();
  const freeShippingThreshold = 2000;
  const shippingProgress = Math.min((subtotal / freeShippingThreshold) * 100, 100);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
        onClick={closeCart}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F4E9] shadow-2xl flex flex-col">
          
          {/* Header */}
          <div className="p-6 bg-[#003D25] text-white flex items-center justify-between border-b border-[#006838]/40">
            <div className="flex items-center gap-3">
              <ShoppingBag className="w-5 h-5 text-[#E5A024]" />
              <h2 className="text-lg font-semibold tracking-wide">
                Your Shopping Cart ({totalItems})
              </h2>
            </div>
            <button
              onClick={closeCart}
              className="p-1.5 text-[#EFE5D1] hover:text-white rounded-lg hover:bg-white/10 transition-colors"
              aria-label="Close Cart"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          <div className="bg-[#EFE5D1] px-6 py-3 border-b border-[#8A8C8F]/20 text-xs text-[#003D25]">
            {subtotal >= freeShippingThreshold ? (
              <p className="font-semibold text-[#006838] flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4" /> You unlocked FREE Worldwide Shipping!
              </p>
            ) : (
              <div>
                <p>
                  Add <span className="font-bold text-[#006838]">₹{freeShippingThreshold - subtotal}</span> more for Free Shipping!
                </p>
                <div className="w-full bg-white rounded-full h-1.5 mt-1.5 overflow-hidden">
                  <div
                    className="bg-[#006838] h-full transition-all duration-300 rounded-full"
                    style={{ width: `${shippingProgress}%` }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4 divide-y divide-[#EFE5D1]">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#EFE5D1] flex items-center justify-center text-[#006838]">
                  <ShoppingBag className="w-8 h-8 stroke-[1.5]" />
                </div>
                <h3 className="font-serif text-xl text-[#003D25] font-bold">Your cart is empty</h3>
                <p className="text-sm text-[#8A8C8F] max-w-xs">
                  Explore our authentic miswak sticks and natural oils to start shopping.
                </p>
                <Link
                  href="/shop"
                  onClick={closeCart}
                  className="mt-4 px-6 py-3 bg-[#006838] text-white rounded-xl text-sm font-semibold hover:bg-[#004D2C] transition-all shadow-md inline-flex items-center gap-2"
                >
                  Start Shopping <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ) : (
              items.map(({ product, quantity }) => (
                <div key={product.id} className="pt-4 first:pt-0 flex gap-4">
                  {/* Image */}
                  <div className="w-20 h-20 bg-white rounded-xl border border-[#EFE5D1] overflow-hidden relative shrink-0 p-2">
                    <Image
                      src={product.images[0]}
                      alt={product.name}
                      fill
                      className="object-contain p-1"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="flex justify-between items-start gap-2">
                      <div>
                        <h4 className="text-sm font-semibold text-[#171717] line-clamp-1">
                          {product.name}
                        </h4>
                        <p className="text-xs text-[#8A8C8F] mt-0.5">{product.category}</p>
                      </div>
                      <button
                        onClick={() => removeItem(product.id)}
                        className="text-[#8A8C8F] hover:text-red-600 transition-colors p-1"
                        title="Remove item"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity Selector */}
                      <div className="flex items-center border border-[#8A8C8F]/30 bg-white rounded-lg overflow-hidden">
                        <button
                          onClick={() => updateQuantity(product.id, quantity - 1)}
                          className="px-2 py-1 hover:bg-[#EFE5D1] text-[#003D25] transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-3.5 h-3.5" />
                        </button>
                        <span className="px-3 text-xs font-semibold text-[#171717]">
                          {quantity}
                        </span>
                        <button
                          onClick={() => updateQuantity(product.id, quantity + 1)}
                          className="px-2 py-1 hover:bg-[#EFE5D1] text-[#003D25] transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="font-semibold text-sm text-[#006838]">
                        ₹{(product.price * quantity).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>

          {/* Footer Subtotal & Checkout */}
          {items.length > 0 && (
            <div className="p-6 bg-white border-t border-[#EFE5D1] space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-[#8A8C8F]">
                  <span>Subtotal</span>
                  <span className="font-semibold text-[#171717]">₹{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-sm text-[#8A8C8F]">
                  <span>Shipping</span>
                  <span className="font-medium text-[#006838]">
                    {subtotal >= freeShippingThreshold ? 'FREE' : 'Calculated at checkout'}
                  </span>
                </div>
                <div className="flex justify-between text-base font-bold text-[#003D25] pt-2 border-t border-[#EFE5D1]">
                  <span>Total</span>
                  <span className="text-[#006838]">₹{subtotal.toLocaleString()}</span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2">
                <Link
                  href="/cart"
                  onClick={closeCart}
                  className="py-3 px-3 bg-[#EFE5D1] text-[#003D25] font-semibold text-center rounded-xl hover:bg-[#EFE5D1]/80 text-xs transition-all flex items-center justify-center"
                >
                  View Cart
                </Link>
                <a
                  href={getWhatsAppOrderLink(items, subtotal)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-center rounded-xl text-xs transition-all shadow-md flex items-center justify-center gap-1.5"
                >
                  <MessageCircle className="w-4 h-4 fill-current shrink-0" />
                  <span>Order on WhatsApp</span>
                </a>
              </div>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
