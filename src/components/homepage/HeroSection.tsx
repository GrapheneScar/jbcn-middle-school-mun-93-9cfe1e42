
import { useEffect } from 'react';
import AnimatedStripes from './AnimatedStripes';
import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';
import AnnouncementBanner from '../AnnouncementBanner';

const HeroSection = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      {/* Announcement Banner */}
      <AnnouncementBanner />
      
      {/* Animated Stripes Background */}
      <AnimatedStripes />
      
      {/* Main Hero Content */}
      <HeroContent />
    </section>
  );
};

export default HeroSection;
