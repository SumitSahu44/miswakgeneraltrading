'use client';

import { useState } from 'react';
import Image from 'next/image';

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export default function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(images[0] || '/products/tybakh.png');

  return (
    <div className="space-y-4">
      {/* Main Image Box */}
      <div className="bg-[#F6F0E5]/50 border border-[#DBC6AD] rounded-2xl p-8 relative aspect-square shadow-xs overflow-hidden flex items-center justify-center">
        <Image
          src={selectedImage}
          alt={productName}
          fill
          priority
          className="object-contain p-6 hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Thumbnail Gallery */}
      {images.length > 1 && (
        <div className="flex items-center gap-3 overflow-x-auto pb-2">
          {images.map((img, idx) => (
            <button
              key={idx}
              onClick={() => setSelectedImage(img)}
              className={`w-20 h-20 rounded-xl bg-[#FFFDF8] border-2 overflow-hidden relative shrink-0 p-1.5 transition-all ${
                selectedImage === img
                  ? 'border-[#006838] ring-2 ring-[#006838]/20'
                  : 'border-[#DBC6AD] opacity-70 hover:opacity-100'
              }`}
            >
              <Image
                src={img}
                alt={`${productName} thumbnail ${idx + 1}`}
                fill
                className="object-contain p-1"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
