import { categories } from '@/data/categories';
import CategoryCard from './CategoryCard';

export default function CategorySection() {
  return (
    <section className="py-16 lg:py-24 bg-[#F8F4E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E5A024]">
            OUR RANGE
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#003D25]">
            Shop by Category
          </h2>
          <p className="text-sm sm:text-base text-[#171717]/75">
            Explore our range of authentic miswak, natural oils and traditional products.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard key={category.id} category={category} />
          ))}
        </div>

      </div>
    </section>
  );
}
