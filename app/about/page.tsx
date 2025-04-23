import AboutHero from '@/components/about/about-hero';
import AboutTeam from '@/components/about/about-team';
import AboutValues from '@/components/about/about-values';
import AboutHistory from '@/components/about/about-history';

export default function AboutPage() {
  return (
    <div className="pt-20">
      <AboutHero />
      <AboutValues />
      <AboutHistory />
      <AboutTeam />
    </div>
  );
}