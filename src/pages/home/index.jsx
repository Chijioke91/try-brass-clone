import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import BottomNav from '../../components/BottomNav';
import CompanyDetails from '../../components/CompanyDetails';
import Faq from '../../components/Faq';
import Footer from '../../components/Footer';
import GetStarted from '../../components/GetStarted';
import Header from '../../components/Header';
import HighLight from '../../components/HighLight';
import IntegrationSection from '../../components/IntegrationSection';
import Resources from '../../components/Resources';
import Slider from '../../components/Slider';
import SupportSection from '../../components/SupportSection';
import Testimonial from '../../components/Testimonial';
import VideoModal from '../../components/VideoModal';

export default function HomePage() {
  const [isOpen, setOpen] = useState(false);
  const onCloseModal = () => setOpen(false);
  const onOpenModal = () => setOpen(true);

  useEffect(() => {
    alert(
      "Kindly note that all images and videos used in this clone website are not mine. it's all brass' Also the link to the original website is https://www.trybrass.com/"
    );
  }, []);

  return (
    <>
      <div className="overflow-hidden">
        <Header onOpenModal={onOpenModal} />
        <HighLight />
        <CompanyDetails />
        <VideoModal
          isOpen={isOpen}
          onOpenModal={onOpenModal}
          onCloseModal={onCloseModal}
        />
        <Slider />
        <Testimonial />
        <IntegrationSection />
        <SupportSection />
        <Resources />
        <Faq />
        <GetStarted />
        <BottomNav />
        <Footer />
      </div>
      <Link
        to="/"
        className="z-50 block md:hidden w-screen h-[13vh] text-center fixed bottom-0 right-0 px-7 py-4 bg-[#0bce5a] text-white font-semibold"
      >
        Open an account in 10 minutes
      </Link>
    </>
  );
}
