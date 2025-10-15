import Hero from '../components/Hero';
import ProblemSection from '../components/ProblemSection';
import SolutionSection from '../components/SolutionSection';
import PortfolioPreview from '../components/PortfolioPreview';
import PricingPreview from '../components/PricingPreview';
import Testimonials from '../components/Testimonials';
import ContactForm from '../components/ContactForm';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <SolutionSection />
      <PortfolioPreview />
      <PricingPreview />
      <Testimonials />
      <ContactForm />
    </>
  );
}
