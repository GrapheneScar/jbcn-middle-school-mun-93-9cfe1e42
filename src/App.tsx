
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Committees from "./pages/Committees";
import DelegatePreparation from "./pages/DelegatePreparation";
import Contact from "./pages/Contact";
import Gallery from "./pages/Gallery";
import Newsletter from "./pages/Newsletter";
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
            <Route path="/delegate-preparation" element={<DelegatePreparation />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/newsletter" element={<Newsletter />} />
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
