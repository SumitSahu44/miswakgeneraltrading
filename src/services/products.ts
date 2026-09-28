import { products } from '@/data/products';
import { Product, ProductFilterOptions } from '@/types/product';

export async function getProducts(options?: ProductFilterOptions): Promise<Product[]> {
  let result = [...products];

  if (!options) return result;

  if (options.category && options.category !== 'all') {
    result = result.filter(
      p => p.categorySlug?.toLowerCase() === options.category?.toLowerCase() ||
           p.category?.toLowerCase() === options.category?.toLowerCase()
    );
  }

  if (options.inStockOnly) {
    result = result.filter(p => p.inStock);
  }

  if (options.minPrice !== undefined) {
    result = result.filter(p => p.price >= (options.minPrice || 0));
  }

  if (options.maxPrice !== undefined) {
    result = result.filter(p => p.price <= (options.maxPrice || Infinity));
  }

  if (options.searchQuery && options.searchQuery.trim() !== '') {
    const q = options.searchQuery.toLowerCase().trim();
    result = result.filter(
      p => p.name.toLowerCase().includes(q) ||
           p.description.toLowerCase().includes(q) ||
           (p.category && p.category.toLowerCase().includes(q)) ||
           p.tags.some(t => t.toLowerCase().includes(q))
    );
  }

  if (options.sortBy) {
    switch (options.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result.reverse();
        break;
      case 'featured':
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));
        break;
    }
  }

  return result;
}

export async function getFeaturedProducts(): Promise<Product[]> {
  return products.filter(p => p.featured);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  const product = products.find(p => p.slug.toLowerCase() === slug.toLowerCase());
  return product || null;
}

export async function getProductsByCategory(categorySlug: string): Promise<Product[]> {
  return products;
}

export async function searchProducts(query: string): Promise<Product[]> {
  return getProducts({ searchQuery: query });
}

export async function getRelatedProducts(currentSlug: string, categorySlug?: string, limit: number = 4): Promise<Product[]> {
  const fallback = products.filter(p => p.slug !== currentSlug);
  return fallback.slice(0, limit);
}
