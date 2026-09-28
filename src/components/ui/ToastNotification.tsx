'use client';

import { useCartStore } from '@/store/cartStore';
import { ShoppingBag, X } from 'lucide-react';

export default function ToastNotification() {
  const { toastMessage, clearToast } = useCartStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-fade-in max-w-sm">
      <div className="bg-[#003D25] text-white px-5 py-3.5 rounded-xl shadow-2xl border border-[#006838]/40 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-[#006838] flex items-center justify-center shrink-0">
          <ShoppingBag className="w-4 h-4 text-[#EFE5D1]" />
        </div>
        <p className="text-sm font-medium text-[#F8F4E9] pr-2">{toastMessage}</p>
        <button
          onClick={clearToast}
          className="text-[#8A8C8F] hover:text-white transition-colors p-1"
          aria-label="Close notification"
        >
          <X className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
