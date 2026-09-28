'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { useCartStore } from '@/store/cartStore';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const showToast = useCartStore(state => state.showToast);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setError('Please enter a valid email address.');
      return;
    }
    setError('');
    setIsSubmitted(true);
    showToast('Thank you for subscribing to MGTE updates!');
    setEmail('');
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section className="py-16 lg:py-20 bg-[#F8F4E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="relative rounded-3xl bg-white border border-[#EFE5D1] shadow-lg overflow-hidden p-8 sm:p-12 lg:p-16">
          {/* Subtle Background Natural Illustration */}
          <div className="absolute right-0 top-0 w-1/3 h-full opacity-10 pointer-events-none hidden lg:block">
            <Image
              src="/categories/miswak-sticks.png"
              alt="Decorative miswak"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative z-10 max-w-xl space-y-6">
            <div className="space-y-2">
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#003D25]">
                Stay Updated
              </h2>
              <p className="text-sm sm:text-base text-[#171717]/75">
                Get the latest products, offers and updates directly to your inbox.
              </p>
            </div>

            {isSubmitted ? (
              <div className="bg-[#003D25] text-[#F8F4E9] p-4 rounded-2xl flex items-center gap-3 animate-fade-in">
                <CheckCircle2 className="w-5 h-5 text-[#E5A024] shrink-0" />
                <span className="text-sm font-medium">
                  You are subscribed! Thank you for joining Miswak General Trading Est.
                </span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="flex flex-col sm:flex-row gap-3">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => { setEmail(e.target.value); setError(''); }}
                    placeholder="Enter your email address"
                    className="flex-1 px-5 py-3.5 bg-[#F8F4E9] border border-[#8A8C8F]/30 rounded-xl text-sm text-[#171717] focus:outline-none focus:border-[#006838] focus:bg-white transition-all placeholder-[#8A8C8F]"
                  />
                  <button
                    type="submit"
                    className="px-7 py-3.5 bg-[#006838] hover:bg-[#004D2C] text-white font-semibold text-sm rounded-xl transition-all shadow-md flex items-center justify-center gap-2 shrink-0"
                  >
                    <span>Subscribe</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {error && (
                  <p className="text-xs text-red-600 font-medium pl-1">{error}</p>
                )}
              </form>
            )}

          </div>
        </div>

      </div>
    </section>
  );
}
