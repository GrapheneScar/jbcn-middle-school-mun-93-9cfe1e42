
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Index from './pages/Index';
import AboutUs from './pages/AboutUs';
import Committees from './pages/Committees';
import CommitteeDetailPage from './pages/CommitteeDetailPage';
import CommitteeHeads from './pages/CommitteeHeads';
import Schedule from './pages/Schedule';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import Gallery from './pages/Gallery';
import DelegatePreparation from './pages/DelegatePreparation';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Toaster } from './components/ui/toaster';
import Newsletter from './pages/Newsletter';
import Resources from './pages/Resources';
import './App.css';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  
  return null;
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/committees/:abbr" element={<CommitteeDetailPage />} />
            <Route path="/committee-heads" element={<CommitteeHeads />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/newsletter" element={<Newsletter />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/delegate-preparation" element={<DelegatePreparation />} />
            <Route path="/resources" element={<Resources />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Toaster />
    </Router>
  );
}

export default App;
