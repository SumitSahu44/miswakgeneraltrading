import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { Category } from '@/types/product';

interface CategoryCardProps {
  category: Category;
}

export default function CategoryCard({ category }: CategoryCardProps) {
  return (
    <Link
      href={`/category/${category.slug}`}
      className="group bg-white rounded-2xl border border-[#EFE5D1] overflow-hidden shadow-xs hover:shadow-xl hover:border-[#006838]/40 transition-all duration-300 flex flex-col h-full"
    >
      {/* Category Image */}
      <div className="relative aspect-[4/3] bg-[#F8F4E9]/60 overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>

      {/* Category Content & Circular Arrow */}
      <div className="p-5 flex items-center justify-between gap-3 bg-white flex-1">
        <div>
          <h3 className="font-serif text-lg font-bold text-[#003D25] group-hover:text-[#006838] transition-colors">
            {category.name}
          </h3>
          <p className="text-xs text-[#8A8C8F] mt-1 line-clamp-1">
            {category.shortDescription}
          </p>
        </div>

        {/* Circular Arrow Button */}
        <div className="w-10 h-10 rounded-full bg-[#003D25] group-hover:bg-[#006838] text-white flex items-center justify-center shrink-0 transition-colors shadow-xs">
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </div>
      </div>
    </Link>
  );
}
