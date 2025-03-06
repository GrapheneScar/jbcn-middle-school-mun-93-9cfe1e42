
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Committees from "./pages/Committees";
import CommitteeDetailPage from "./pages/CommitteeDetailPage";
import CommitteeHeads from "./pages/CommitteeHeads";
import DelegatePreparation from "./pages/DelegatePreparation";
import AnnouncementsHub from "./pages/AnnouncementsHub";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Schedule from "./pages/Schedule";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/committees" element={<Committees />} />
            <Route path="/committees/:abbr" element={<CommitteeDetailPage />} />
            <Route path="/committee-heads" element={<CommitteeHeads />} />
            <Route path="/delegate-preparation" element={<DelegatePreparation />} />
            <Route path="/announcements" element={<AnnouncementsHub />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AnimatePresence>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
