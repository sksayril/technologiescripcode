import HeroSection from '@/components/home/hero-section';
import ServicesSection from '@/components/home/services-section';
import AboutSection from '@/components/home/about-section';
import TechnologiesSection from '@/components/home/technologies-section';
import ClientsSection from '@/components/home/clients-section';
import ProjectsSection from '@/components/home/projects-section';
import TestimonialsSection from '@/components/home/testimonials-section';
import ContactSection from '@/components/home/contact-section';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <TechnologiesSection />
      <ProjectsSection />
      <ClientsSection />
      <TestimonialsSection />
      <ContactSection />
    </div>
  );
}