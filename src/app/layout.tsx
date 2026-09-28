import type { Metadata } from 'next';
import { DM_Serif_Display, Inter } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import SearchModal from '@/components/search/SearchModal';
import ToastNotification from '@/components/ui/ToastNotification';
import FloatingActions from '@/components/ui/FloatingActions';

const dmSerif = DM_Serif_Display({
  weight: ['400'],
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Miswak General Trading Est | Authentic Miswak & Natural Products',
  description: 'Shop authentic miswak, natural oils and traditional wellness products from Miswak General Trading Est. Worldwide shipping, halal certified, 100% natural.',
  keywords: ['Miswak', 'Miswak sticks', 'Sewak', 'Natural oils', 'Black seed oil', 'Salvadora Persica', 'MGTE', 'Halal wellness'],
  authors: [{ name: 'Miswak General Trading Est' }],
  metadataBase: new URL('https://miswakgeneraltrading.com'),
  icons: {
    icon: '/miswakgeneraltrading-small.jpeg',
    apple: '/miswakgeneraltrading-small.jpeg',
  },
  openGraph: {
    title: 'Miswak General Trading Est | Authentic Miswak & Natural Products',
    description: 'Supplying authentic miswak, natural oils and traditional products with a commitment to quality and customer satisfaction.',
    url: 'https://miswakgeneraltrading.com',
    siteName: 'Miswak General Trading Est (MGTE)',
    images: [
      {
        url: '/hero/hero-products.png',
        width: 1200,
        height: 630,
        alt: 'Miswak General Trading Est Products',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Miswak General Trading Est',
    description: 'Shop authentic miswak, natural oils and traditional wellness products from MGTE.',
    images: ['/hero/hero-products.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSerif.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-[#F8F4E9] text-[#171717] selection:bg-[#006838] selection:text-white">
        <AnnouncementBar />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <CartDrawer />
        <SearchModal />
        <ToastNotification />
        <FloatingActions />
      </body>
    </html>
  );
}
