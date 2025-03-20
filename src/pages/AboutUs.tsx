
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';

// Import our new components
import AboutHeader from '../components/about/AboutHeader';
import MissionVisionSection from '../components/about/MissionVisionSection';
import CoreValuesSection from '../components/about/CoreValuesSection';
import SecretariatSection from '../components/about/SecretariatSection';

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const secretariat = [
    { 
      name: "Ruhika Bhende", 
      role: "Secretary General",
      image: "/lovable-uploads/ruhika.jpg",
      bio: "Greetings, Dear Delegates. I, Ruhika Bhende, am honoured to serve as your Secretary-General for JBCN Middle School MUN 2025. I am truly privileged to lead this platform that fosters diplomacy, critical thinking, and global awareness. My journey with MUN began in the 5th grade, and over the years, it has transformed the way I engage with international affairs, debate pressing global issues, and develop leadership skills.",
    },
    { 
      name: "Areehah Mitra", 
      role: "Deputy-Secretary General",
      image: "/lovable-uploads/areehah.jpg",
      bio: "Greetings delegates, my name is Areehah Mitra and I am honored to be the Deputy Secretary General of JBCN Middle School MUN 2025. Middle School MUN for me serves as a tremendously bright learning opportunity for delegates in grades 6 through 8 as it allows for exhilarating debate as well as a pertinent stepping stone to diplomacy.",
    },
    { 
      name: "Reeyan Mavani", 
      role: "Director of Operations",
      image: "/lovable-uploads/riaan.jpg",
      bio: "As the Director of Operations, I oversee the logistics and planning for our conference. I work to ensure all aspects of the event run smoothly, from registration to committee sessions. My goal is to create an organized environment where delegates can focus entirely on their diplomatic experience.",
    },
  ];

  return (
    <PageTransition>
      <StripeBackground />
      
      {/* Header Banner */}
      <AboutHeader />
      
      {/* Mission and Vision Section */}
      <MissionVisionSection />
      
      {/* Core Values Section */}
      <CoreValuesSection />
      
      {/* Secretariat Section */}
      <SecretariatSection secretariat={secretariat} />
    </PageTransition>
  );
};

export default AboutUs;
