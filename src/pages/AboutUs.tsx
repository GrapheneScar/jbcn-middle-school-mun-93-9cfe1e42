
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
      image: "/lovable-uploads/Ruhika.png",
      bio: "Greetings, Dear Delegates. I, Ruhika Bhende, am honoured to serve as your Secretary-General for JBCN Middle School MUN 2025. I am truly privileged to lead this platform that fosters diplomacy, critical thinking, and global awareness. My journey with MUN began in the 5th grade, and over the years, it has transformed the way I engage with international affairs, debate pressing global issues, and develop leadership skills. MUN has taught me that effective diplomacy isn't just about speaking well but also about listening, adapting, and working towards solutions that benefit all.\n\nBeyond MUN, I am deeply passionate about international relations, politics, and youth advocacy. I believe that young voices have the power to drive meaningful change, and platforms like MUN equip us with the confidence and knowledge to do so. Being a martial arts athlete has also been a significant part of my personal growth, teaching me perseverance and resilience, which I believe are just as essential in debate and leadership. A little outside of academics, I'm big on music (I love rock bands) and literature. I enjoy watching musicals and travelling(I love exploring new places) in my free time.\n\nTo all delegates, whether this is your first conference or one of many, remember that MUN is more than just awards and competition; it's a space to learn, to challenge your perspectives, and to step into the shoes of global leaders. As Nelson Mandela wisely said, \"It always seems impossible until it's done.\" The most impactful delegates are not just those who speak the loudest but those who engage thoughtfully, collaborate effectively, and remain open to new ideas. Step out of your comfort zone, embrace every debate as an opportunity to grow, and most importantly, enjoy the process. I look forward to meeting each one of you, hearing the voices of our future, and having a truly fruitful and unforgettable conference!",
    },
    { 
      name: "Areehah Mitra", 
      role: "Deputy-Secretary General",
      image: "/lovable-uploads/Areehah.png",
      bio: "Greetings delegates, my name is Areehah Mitra and I am honored to be the Deputy Secretary General of JBCN Middle School MUN 2025. Middle School MUN for me serves as a tremendously bright learning opportunity for delegates in grades 6 through 8 as it allows for exhilarating debate as well as a pertinent stepping stone to diplomacy, The Secretariat this year aims to facilitate keen synchronization of conference proceedings and put in its best efforts to help satisfy all the delegates attending.\n\nIf you've ever been skeptical about attending your first MUN or getting started on such a seemingly daunting journey, I'd highly encourage you to take the leap of faith; the skills you learn are endless. At Middle School MUN, the diverse committees and mix of topics discuss some of the most interesting yet interesting disputes and serve as a brilliant base for introductory discourse. Don't let the fear of failure outweigh the possibilities of learning.\n\nWith thorough planning and your unwavering enthusiasm, I look forward to making JBCN Middle School MUN '25 a memorable adventure!",
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
    </PageTransition>
  );
};

export default AboutUs;
