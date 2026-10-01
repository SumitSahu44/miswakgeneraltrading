import type { Metadata } from 'next';
import { Cinzel, Cormorant_Garamond, Inter } from 'next/font/google';
import './globals.css';
import AnnouncementBar from '@/components/layout/AnnouncementBar';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import CartDrawer from '@/components/cart/CartDrawer';
import SearchModal from '@/components/search/SearchModal';
import ToastNotification from '@/components/ui/ToastNotification';
import FloatingActions from '@/components/ui/FloatingActions';

const cinzel = Cinzel({
  subsets: ['latin'],
  weight: ['400', '600', '700', '800', '900'],
  variable: '--font-cinzel',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Miswak General Trading Est | Authentic Miswak & Natural Products',
  description: 'Shop authentic miswak and traditional wellness products from Miswak General Trading Est. Fast pan-India shipping, halal certified, 100% natural.',
  keywords: ['Miswak', 'Miswak sticks', 'Sewak', 'Zaitoon stick', 'Miswak powder', 'Salvadora Persica', 'MGTE', 'Halal wellness'],
  authors: [{ name: 'Miswak General Trading Est' }],
  metadataBase: new URL('https://miswakgeneraltrading.com'),
  icons: {
    icon: '/miswakgeneraltrading-small.jpeg',
    apple: '/miswakgeneraltrading-small.jpeg',
  },
  openGraph: {
    title: 'Miswak General Trading Est | Authentic Miswak & Natural Products',
    description: 'Supplying authentic miswak, miswak extracts, powders and traditional products with a commitment to quality and customer satisfaction.',
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
    description: 'Shop authentic miswak and traditional wellness products from MGTE.',
    images: ['/hero/hero-products.png'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${cinzel.variable} ${cormorant.variable} ${inter.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-wood-grain text-[#1C1814] selection:bg-[#006838] selection:text-white">
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
