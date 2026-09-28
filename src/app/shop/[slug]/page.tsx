import { products } from '@/data/products';
import ProductDetailsClient from '@/components/product/ProductDetailsClient';

export async function generateStaticParams() {
  return products.map((product) => ({
    slug: product.slug,
  }));
}

interface ProductDetailPageProps {
  params: Promise<{ slug: string }>;
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { slug } = await params;
  return <ProductDetailsClient slug={slug} />;
}
