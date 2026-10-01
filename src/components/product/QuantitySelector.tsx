'use client';

import { Plus, Minus } from 'lucide-react';

interface QuantitySelectorProps {
  quantity: number;
  onChange: (newQuantity: number) => void;
  min?: number;
  max?: number;
  step?: number;
}

export default function QuantitySelector({
  quantity,
  onChange,
  min = 1000,
  max = 1000000,
  step = 100,
}: QuantitySelectorProps) {
  const handleDecrement = () => {
    if (quantity - step >= min) {
      onChange(quantity - step);
    } else if (quantity > min) {
      onChange(min);
    }
  };

  const handleIncrement = () => {
    if (quantity + step <= max) {
      onChange(quantity + step);
    }
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

      <span className="w-24 text-center text-xs sm:text-sm font-bold text-[#171717] select-none px-1">
        {quantity.toLocaleString()} Pcs
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
