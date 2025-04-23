import ContactHero from '@/components/contact/contact-hero';
import ContactForm from '@/components/contact/contact-form';
// import ContactInfo from '@/components/contact/contact-info';
import ContactMap from '@/components/contact/contact-map';

export default function ContactPage() {
  return (
    <div className="pt-20">
      <ContactHero />
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* <ContactInfo /> */}
          <ContactForm />
        </div>
      </div>
      <ContactMap />
    </div>
  );
}