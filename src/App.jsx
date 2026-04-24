import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, ArrowRight } from 'lucide-react';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Membership from './pages/Membership';
import Platform from './pages/Platform';
import Services from './pages/Services';
import Insights from './pages/Insights';
import Properties from './pages/Properties';
import FAQ from './pages/FAQ';
import EmailTemplates from './pages/EmailTemplates';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => window.scrollTo(0, 0), [pathname]);
  return null;
};

const App = () => {
  return (
    <div className="min-h-screen bg-white selection:bg-brand-teal selection:text-white">
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/membership" element={<Membership />} />
        <Route path="/platform" element={<Platform />} />
        <Route path="/services" element={<Services />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/properties" element={<Properties />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/email-templates" element={<EmailTemplates />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
