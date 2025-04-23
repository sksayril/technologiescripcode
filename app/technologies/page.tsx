import TechnologiesHero from '@/components/technologies/technologies-hero';
import TechnologiesList from '@/components/technologies/technologies-list';
import TechnologiesStack from '@/components/technologies/technologies-stack';
import TechnologiesShowcase from '@/components/technologies/technologies-showcase';

export default function TechnologiesPage() {
  return (
    <div className="pt-20">
      <TechnologiesHero />
      <TechnologiesList />
      <TechnologiesStack />
      <TechnologiesShowcase />
    </div>
  );
}