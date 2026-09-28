import { categories } from '@/data/categories';
import { Category } from '@/types/product';

export async function getCategories(): Promise<Category[]> {
  return [...categories];
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  const category = categories.find(c => c.slug.toLowerCase() === slug.toLowerCase());
  return category || null;
}
