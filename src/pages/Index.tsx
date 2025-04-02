import { useEffect } from 'react';
import StripeBackground from '../components/StripeBackground';
import HeroSection from '../components/homepage/HeroSection';
import NavigationPanels from '../components/homepage/NavigationPanels';
import BaxterMascot from '../components/homepage/BaxterMascot';
import CallToAction from '../components/homepage/CallToAction';
import HomeGallery from '../components/homepage/HomeGallery';
import HomeFAQ from '../components/homepage/HomeFAQ';
import EventCalendar from '../components/homepage/EventCalendar';
import PageTransition from '../components/PageTransition';
import SecretaryGeneralSection from '../components/homepage/SecretaryGeneralSection';
import DeputySecretaryGeneralSection from '../components/homepage/DeputySecretaryGeneralSection';
import RegisterButton from '../components/RegisterButton';
const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return <PageTransition>
      <div className="relative w-full min-h-screen overflow-hidden">
        <StripeBackground />
        <HeroSection />

        {/* Registration Note */}
        
        
        {/* Secretary General Section */}
        <SecretaryGeneralSection />
        
        {/* Deputy Secretary General Section */}
        <DeputySecretaryGeneralSection />
        
        {/* Event Calendar */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-white">
                <span className="inline-block px-3 py-1 text-sm bg-mun-purple rounded-full mb-3">Important</span>
                <br />
                Save The Date
              </h2>
            </div>
            <EventCalendar />
          </div>
        </section>
        
        {/* Navigation panels */}
        <NavigationPanels />
        
        {/* Gallery Section */}
        <HomeGallery />
        
        {/* FAQ Section */}
        <HomeFAQ />
        
        <BaxterMascot />
        <CallToAction />
      </div>
    </PageTransition>;
};
export default Index;