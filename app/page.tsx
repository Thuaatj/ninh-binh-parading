import BookingSteps from '@/components/BookingSteps';
import Footer from '@/components/Footer';
import HeroHeader from '@/components/HeroHeader';
import LocationSection from '@/components/LocationSection';
import NinhBinhHighlights from '@/components/NinhBinhHighlights';
import Testimonials from '@/components/Testimonials';
import TourPackages from '@/components/TourPackages';

export default function Home() {
  return (
    <>
      <HeroHeader />
      <TourPackages />
      <BookingSteps />
      <LocationSection />
      <NinhBinhHighlights />
      <Testimonials />
      <Footer />
    </>
  );
}