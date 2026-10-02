import { Product } from '@/types/product';

export const products: Product[] = [
  // 1st Product (from product7.jpeg)
  {
    id: 'prod-7',
    slug: 'fresh-miswak-loose-pack',
    name: 'Fresh Miswak Without Packaging',
    description: '100% natural fresh miswak sticks delivered raw without any chemical treatment or plastic packaging. Ideal for bulk buyers, distributors, and daily organic oral care routines.',
    shortDescription: 'Fresh miswak without packaging, 100% natural, without any chemical.',
    price: 0,
    currency: '₹',
    images: [
      '/products/product7.jpeg',
    ],
    specifications: [
      'Minimum Quantity: 1000 pieces (MOQ)',
      'Thickness: 10 mm to 23 mm',
      '100% Natural & Chemical Free',
    ],
    tags: ['100% Natural', 'Chemical Free', 'Fresh Miswak', 'Loose Pack', 'MOQ 1000 Pcs'],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewCount: 210,
    badge: 'BULK BEST SELLER',
    sku: 'MGTE-RAW-07',
    origin: 'Mewat, Haryana, India',
    packaging: 'Loose Bulk (Minimum 1000 Pieces)',
  },

  // 2nd Product
  {
    id: 'prod-1',
    slug: 'miswak',
    name: 'Miswak',
    description: 'Authentic 100% natural Salvadora Persica miswak stick harvested directly from unpolluted organic roots. Rich in natural fluoride, silica, and active antibacterial minerals for complete oral health, teeth whitening, and fresh breath.',
    shortDescription: 'Authentic 100% natural Salvadora Persica miswak stick.',
    price: 0,
    currency: '₹',
    images: [
      '/products/product1.jpeg',
    ],
    specifications: [
      'Minimum Quantity: 1000 pieces (MOQ)',
      'Length 9 inches | Thickness 14 mm to 20 mm',
      'Length 9 inches | Thickness 7 mm to 14 mm',
      'Length 6 inches | Thickness 7 mm to 14 mm',
    ],
    tags: ['Authentic', 'Natural', 'Sunnah Care', 'Organic', 'MOQ 1000 Pcs'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 156,
    badge: 'POPULAR',
    sku: 'MGTE-MSW-01',
    origin: 'Mewat, Haryana, India',
    packaging: 'Hygienic Foil Pack (Minimum 1000 Pcs)',
  },

  // 3rd Product
  {
    id: 'prod-3',
    slug: 'fresh-miswak-without-packaging',
    name: 'Fresh Miswak Without Packaging',
    description: 'Freshly harvested raw Salvadora Persica miswak sticks delivered without plastic or foil packaging. Designed for eco-friendly zero-waste usage and direct traditional daily routines.',
    shortDescription: 'Freshly cut raw miswak sticks delivered without plastic packaging.',
    price: 0,
    currency: '₹',
    images: [
      '/products/product3.jpeg',
    ],
    specifications: [
      'Minimum Quantity: 1000 pieces (MOQ)',
      'Length 9 inches | Thickness 14 mm to 20 mm',
      'Length 9 inches | Thickness 7 mm to 14 mm',
      'Length 6 inches | Thickness 7 mm to 14 mm',
    ],
    tags: ['Eco-Friendly', 'Zero Waste', 'Fresh Cut', 'Unpackaged', 'MOQ 1000 Pcs'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 98,
    badge: 'ECO CHOICE',
    sku: 'MGTE-RAW-03',
    origin: 'Haryana, India',
    packaging: 'No Plastic Packaging (Minimum 1000 Pcs)',
  },

  // 4th Product
  {
    id: 'prod-4',
    slug: 'miswak-extracts',
    name: 'Miswak Extracts',
    description: '100% pure concentrated liquid extract of natural Salvadora Persica miswak root. Loaded with active organic minerals and essential oils to soothe gums and enrich oral hygiene.',
    shortDescription: '100% pure concentrated Salvadora Persica root extract liquid.',
    price: 0,
    currency: '₹',
    images: [
      '/products/product4.png',
    ],
    specifications: [
      'Minimum Quantity: 1000 units (MOQ)',
      '100ml Pure Concentrated Liquid Extract',
    ],
    tags: ['Extract', 'Pure Liquid', 'Concentrate', 'Gum Care', 'MOQ 1000 Pcs'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 88,
    badge: '100% PURE',
    sku: 'MGTE-EXT-04',
    origin: 'Haryana, India',
    packaging: '100ml Amber Bottle (Minimum 1000 Units)',
  },

  // 5th Product
  {
    id: 'prod-5',
    slug: 'miswak-powder',
    name: 'Miswak Powder',
    description: 'Ultra-fine 100% pure organic miswak root powder. Gently polishes teeth enamel, removes surface stains, and strengthens gums without harsh chemical abrasives.',
    shortDescription: 'Finely ground 100% organic miswak root powder for enamel & gums.',
    price: 0,
    currency: '₹',
    images: [
      '/products/product5.jpeg',
    ],
    specifications: [
      'Minimum Quantity: 1000 units (MOQ)',
      '100% Pure Organic Miswak Powder (100g Jar)',
    ],
    tags: ['Organic Powder', 'Teeth Whitening', 'Sunnah Wellness', 'MOQ 1000 Pcs'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 110,
    badge: 'ORGANIC',
    sku: 'MGTE-PWD-05',
    origin: 'Haryana, India',
    packaging: '100g Sealed Container (Minimum 1000 Units)',
  },

  // 6th Product
  {
    id: 'prod-6',
    slug: 'miswak-cut-pieces',
    name: 'Miswak Cut Pieces',
    description: 'Conveniently pre-cut Salvadora Persica miswak root pieces ready for immediate daily use. Sized for effortless portability and quick daily cleaning.',
    shortDescription: 'Convenient pre-cut fresh miswak pieces ready for daily use.',
    price: 0,
    currency: '₹',
    images: [
      '/products/product6.jpeg',
    ],
    specifications: [
      'Minimum Quantity: 1000 packs (MOQ)',
      'Pack of 10 Pre-Cut Pieces (3-4 inches each)',
    ],
    tags: ['Pre-Cut', 'Convenient', 'Travel Friendly', 'MOQ 1000 Pcs'],
    inStock: true,
    featured: true,
    rating: 4.7,
    reviewCount: 74,
    badge: 'READY USE',
    sku: 'MGTE-CUT-06',
    origin: 'Haryana, India',
    packaging: 'Hygienic Pack of 10 Cut Pieces (Minimum 1000 Packs)',
  },

  // 7th Product
  {
    id: 'prod-8',
    slug: 'zaitoon-miswak-9-inch-premium',
    name: 'Zaitoon Miswak',
    description: 'Authentic 9-inch Zaitoon (wild olive wood) miswak stick. Harvested from mature olive wood roots for superior bristle density and long-lasting natural freshness.',
    shortDescription: 'Zaitoon miswak length 9 inches, thickness 8 mm to 20 mm.',
    price: 0,
    currency: '₹',
    images: [
      '/products/product8.jpeg',
    ],
    specifications: [
      'Minimum Quantity: 1000 pieces (MOQ)',
      'Length: 9 inches',
      'Thickness: 8 mm to 20 mm',
      '100% Wild Olive Wood (Zaitoon)',
    ],
    tags: ['Zaitoon Miswak', '9 Inches', 'Olive Wood', 'Premium Grade', 'MOQ 1000 Pcs'],
    inStock: true,
    featured: true,
    rating: 5.0,
    reviewCount: 185,
    badge: 'ZAITOON SPECIAL',
    sku: 'MGTE-ZAT-08',
    origin: 'Rajasthan, India',
    packaging: 'Hygienic Protective Wrap (Minimum 1000 Pcs)',
  },
];



