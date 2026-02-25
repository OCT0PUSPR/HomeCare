import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';

import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import BookAppointment from './pages/BookAppointment';
import BecomePartner from './pages/BecomePartner';
import OurTeam from './pages/OurTeam';
import Careers from './pages/Careers';
import Blog from './pages/Blog';
import FAQs from './pages/FAQs';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CancellationPolicy from './pages/CancellationPolicy';
import CopyrightPolicy from './pages/CopyrightPolicy';

import NewbornMotherCare from './pages/services/NewbornMotherCare';
import ChildCare from './pages/services/ChildCare';
import SeniorCare from './pages/services/SeniorCare';
import ClinicalCare from './pages/services/ClinicalCare';
import TransitionalCare from './pages/services/TransitionalCare';
import PalliativeCare from './pages/services/PalliativeCare';
import Physiotherapy from './pages/services/Physiotherapy';
import LymphaticDrainage from './pages/services/LymphaticDrainage';
import SpeechTherapy from './pages/services/SpeechTherapy';
import IVDrip from './pages/services/IVDrip';
import LabCollection from './pages/services/LabCollection';
import DoctorOnCall from './pages/services/DoctorOnCall';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book-appointment" element={<BookAppointment />} />
          <Route path="/become-partner" element={<BecomePartner />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-conditions" element={<TermsConditions />} />
          <Route path="/cancellation-refund-policy" element={<CancellationPolicy />} />
          <Route path="/copyright-policy" element={<CopyrightPolicy />} />

          {/* Service Detail Pages */}
          <Route path="/services/newborn-mother-care" element={<NewbornMotherCare />} />
          <Route path="/services/child-care" element={<ChildCare />} />
          <Route path="/services/senior-care" element={<SeniorCare />} />
          <Route path="/services/clinical-care" element={<ClinicalCare />} />
          <Route path="/services/transitional-care" element={<TransitionalCare />} />
          <Route path="/services/palliative-care" element={<PalliativeCare />} />
          <Route path="/services/physiotherapy" element={<Physiotherapy />} />
          <Route path="/services/lymphatic-drainage" element={<LymphaticDrainage />} />
          <Route path="/services/speech-therapy" element={<SpeechTherapy />} />
          <Route path="/services/iv-drip" element={<IVDrip />} />
          <Route path="/services/lab-collection" element={<LabCollection />} />
          <Route path="/services/doctor-on-call" element={<DoctorOnCall />} />
        </Routes>
      </main>
      <Footer />
      <WhatsAppFloat />
    </Router>
  );
}

export default App;
