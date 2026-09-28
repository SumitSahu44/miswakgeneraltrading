import Hero from '@/components/home/Hero';
import ProductCollection from '@/components/home/ProductCollection';
import AboutSection from '@/components/home/AboutSection';
import HowToUse from '@/components/home/HowToUse';
import BenefitsSection from '@/components/home/BenefitsSection';
import Testimonials from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProductCollection />
      <AboutSection />
      <HowToUse />
      <BenefitsSection />
      <Testimonials />
    </>
  );
}
