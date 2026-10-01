import { redirect } from 'next/navigation';

export async function generateStaticParams() {
  return [
    { slug: 'miswak-sticks' },
    { slug: 'miswak-packs' },
    { slug: 'miswak-extracts-powder' },
    { slug: 'other-products' },
  ];
}

export default function CategoryPage() {
  redirect('/shop');
}
