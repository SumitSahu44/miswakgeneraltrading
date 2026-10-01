import { Category } from '@/types/product';

export const categories: Category[] = [
  {
    id: 'cat-1',
    slug: 'miswak-sticks',
    name: 'Miswak Sticks',
    shortDescription: 'Pure, natural and refreshing',
    description: 'Freshly harvested, premium grade natural Salvadora Persica miswak sticks sourced directly from wild tree roots.',
    image: '/categories/miswak-sticks.png',
    itemCount: 12,
  },
  {
    id: 'cat-2',
    slug: 'miswak-packs',
    name: 'Miswak Packs',
    shortDescription: 'Individually packed for convenience',
    description: 'Hygienically vacuum-sealed miswak sticks in multi-packs and luxury gift boxes for long-lasting freshness.',
    image: '/categories/miswak-packs.png',
    itemCount: 8,
  },
  {
    id: 'cat-3',
    slug: 'miswak-extracts-powder',
    name: 'Extracts & Powders',
    shortDescription: '100% Pure miswak extracts & powder',
    description: 'Pure Salvadora Persica root extracts and ultra-fine oral care powders for enamel whitening and gum care.',
    image: '/products/product4.png',
    itemCount: 6,
  },
  {
    id: 'cat-4',
    slug: 'other-products',
    name: 'Other Products',
    shortDescription: 'Traditional and wellness care',
    description: 'Natural herbal oral toothpaste, organic miswak holders, neem soaps, and traditional grooming accessories.',
    image: '/categories/other-products.png',
    itemCount: 10,
  },
];
