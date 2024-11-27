import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import ValuesSection from '../components/ValuesSection';
import { imageOptimizer } from 'next/dist/server/image-optimizer';
import PastRecruitersAlumni from '@/components/PastRecruitersAlumni';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <div>
      <Navbar/>
      <HeroSection />
      <AboutSection/>
      <ValuesSection/>
      <PastRecruitersAlumni/>
      <Footer/>
    </div>
  );
}
