export interface Product {
  id: string;
  slug: string;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  compareAtPrice?: number;
  currency: string;
  images: string[];
  category?: string;
  categorySlug?: string;
  specifications?: string[];
  tags: string[];
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviewCount: number;
  badge?: string;
  sku?: string;
  origin?: string;
  packaging?: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  quote: string;
}

export interface ProductFilterOptions {
  category?: string;
  minPrice?: number;
  maxPrice?: number;
  inStockOnly?: boolean;
  searchQuery?: string;
  sortBy?: 'featured' | 'newest' | 'price-low' | 'price-high';
}
