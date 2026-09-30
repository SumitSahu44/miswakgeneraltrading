import Hero from '@/components/home/Hero';
import CertificationsSection from '@/components/home/CertificationsSection';
import ProductCollection from '@/components/home/ProductCollection';
import AboutSection from '@/components/home/AboutSection';
import HowToUse from '@/components/home/HowToUse';
import BenefitsSection from '@/components/home/BenefitsSection';
import DistributorsSection from '@/components/home/DistributorsSection';
import Testimonials from '@/components/home/Testimonials';

export default function HomePage() {
  return (
    <>
      <Hero />
      <CertificationsSection />
      <AboutSection />
      <BenefitsSection />
      <DistributorsSection />
      <ProductCollection />
      <HowToUse />
      <Testimonials />
    </>
  );
}
