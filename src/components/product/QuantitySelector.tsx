'use client';

import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (newQuantity: number) => void;
  min?: number;
  max?: number;
}

export default function QuantitySelector({
  quantity,
  onChange,
  min = 1,
  max = 99,
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity > min) onChange(quantity - 1);
  };

  const handleIncrement = () => {
    if (quantity < max) onChange(quantity + 1);
  };

  return (
    <div className="inline-flex items-center border border-[#8A8C8F]/30 bg-white rounded-xl overflow-hidden shadow-xs">
      <button
        type="button"
        onClick={handleDecrement}
        disabled={quantity <= min}
        className="px-3.5 py-2.5 text-[#003D25] hover:bg-[#EFE5D1] disabled:opacity-40 transition-colors"
        aria-label="Decrease quantity"
      >
        <Minus className="w-4 h-4" />
      </button>

      <span className="w-12 text-center text-sm font-bold text-[#171717] select-none">
        {quantity}
      </span>

      <button
        type="button"
        onClick={handleIncrement}
        disabled={quantity >= max}
        className="px-3.5 py-2.5 text-[#003D25] hover:bg-[#EFE5D1] disabled:opacity-40 transition-colors"
        aria-label="Increase quantity"
      >
        <Plus className="w-4 h-4" />
      </button>
    </div>
  );
}
