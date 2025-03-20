
import { useEffect } from 'react';
import PageTransition from '../components/PageTransition';
import StripeBackground from '../components/StripeBackground';

// Import our new components
import AboutHeader from '../components/about/AboutHeader';
import MissionVisionSection from '../components/about/MissionVisionSection';
import CoreValuesSection from '../components/about/CoreValuesSection';
import SecretariatSection from '../components/about/SecretariatSection';
import DepartmentHeadsSection from '../components/about/DepartmentHeadsSection';

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

  const departmentHeads = [
    {
      name: "Riddhi Bavadiya & Yana Mehta",
      role: "Head of Social Media",
      image: "/lovable-uploads/dishita.png",
      bio: "Managing the social media presence of JBCN MUN, we work to engage with delegates and spread awareness about our conference across various platforms.",
    },
    {
      name: "Samay Shah & Naaham Shah",
      role: "Head of Website Design",
      image: "/lovable-uploads/bharatvir.jpg",
      bio: "As the Heads of Website Design, we've created and maintain the digital platform that showcases JBCN MUN to the world. Our goal is to provide an intuitive and engaging experience for all visitors.",
    },
    {
      name: "Aarna Amberkar",
      role: "Head of Press",
      image: "/lovable-uploads/shaurya.png",
      bio: "Leading the press team, I manage the documentation of conference proceedings and ensure that all key moments of debate and diplomacy are captured in our reporting.",
    },
    {
      name: "Keerthana Reddy & Rayhan Parikh",
      role: "Head of Photography",
      image: "/lovable-uploads/geiv.jpeg",
      bio: "As the Photography team leads, we capture the visual narrative of JBCN MUN, preserving the moments of collaboration, debate, and achievement that define our conference.",
    },
    {
      name: "Radhika Dutt",
      role: "Head of Illustration",
      image: "/lovable-uploads/adhiraj.jpeg",
      bio: "Leading the illustration team, I create visual content that complements the MUN experience, from committee logos to promotional materials that capture the spirit of diplomacy.",
    }
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
      
      {/* Department Heads Section */}
      <DepartmentHeadsSection 
        departmentHeads={departmentHeads}
      />
    </PageTransition>
  );
};

export default AboutUs;
