import ServicesHero from '@/components/services/services-hero';
import ServicesList from '@/components/services/services-list';
import ServicesProcess from '@/components/services/services-process';
import ServicesPricing from '@/components/services/services-pricing';

export default function ServicesPage() {
  return (
    <div className="pt-20">
      <ServicesHero />
      <ServicesList />
      <ServicesProcess />
      <ServicesPricing />
    </div>
  );
}