import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <>
      <div className="top-bar">
        <div className="container">
          <div className="top-bar-contact">
            <a href="tel:+9718006877464">800-NURSING (687-7464)</a>
            <a href="mailto:info@emirateshomecare.ae">info@emirateshomecare.ae</a>
          </div>
          <div className="top-bar-social">
            <a href="#" aria-label="Facebook">FB</a>
            <a href="#" aria-label="Instagram">IG</a>
            <a href="#" aria-label="LinkedIn">IN</a>
            <a href="#" aria-label="YouTube">YT</a>
          </div>
        </div>
      </div>
      <nav className="navbar">
        <div className="container">
          <Link to="/" className="navbar-logo">
            <div className="logo-icon">EHC</div>
            <div className="logo-text">
              Emirates Home Care
              <span>Innovation To The Care Future</span>
            </div>
          </Link>

          <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
            <li><Link to="/" className={isActive('/')}>Home</Link></li>
            <li>
              <Link to="/about" className={isActive('/about')}>About Us</Link>
              <ul className="dropdown">
                <li><Link to="/our-team">Our Team</Link></li>
                <li><Link to="/careers">Careers</Link></li>
                <li><Link to="/blog">Blog</Link></li>
                <li><Link to="/cancellation-refund-policy">Cancellation & Refund Policy</Link></li>
                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/copyright-policy">Copyright Policy</Link></li>
                <li><Link to="/faqs">FAQs</Link></li>
              </ul>
            </li>
            <li>
              <Link to="/services" className={isActive('/services')}>Services</Link>
              <ul className="dropdown">
                <li><Link to="/services/newborn-mother-care">Newborn & Mother Care</Link></li>
                <li><Link to="/services/child-care">Child Care</Link></li>
                <li><Link to="/services/senior-care">Senior Care</Link></li>
                <li><Link to="/services/clinical-care">Clinical Care</Link></li>
                <li><Link to="/services/transitional-care">Transitional Care</Link></li>
                <li><Link to="/services/palliative-care">Palliative Care</Link></li>
                <li><Link to="/services/physiotherapy">Physiotherapy</Link></li>
                <li><Link to="/services/lymphatic-drainage">Lymphatic Drainage Treatment</Link></li>
                <li><Link to="/services/speech-therapy">Speech Therapy</Link></li>
                <li><Link to="/services/iv-drip">IV Drip at Home</Link></li>
                <li><Link to="/services/lab-collection">Lab Collection at Home</Link></li>
                <li><Link to="/services/doctor-on-call">Doctor on Call</Link></li>
              </ul>
            </li>
            <li><Link to="/book-appointment" className={isActive('/book-appointment')}>Book an Appointment</Link></li>
            <li><Link to="/become-partner" className={isActive('/become-partner')}>Become a Partner</Link></li>
            <li><Link to="/contact" className={`nav-cta ${isActive('/contact')}`}>Contact Us</Link></li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Header;
