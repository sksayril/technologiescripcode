import TestimonialsHero from '@/components/testimonials/testimonials-hero';
import TestimonialsList from '@/components/testimonials/testimonials-list';
// import TestimonialsStats from '@/components/testimonials/';
// import TestimonialsForm from '@/components/testimonials/testimonials-form';

export default function TestimonialsPage() {
  return (
    <div className="pt-20">
      <TestimonialsHero />
      <TestimonialsList />
      {/* <TestimonialsStats />
      <TestimonialsForm /> */}
    </div>
  );
}