import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin, Youtube, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-col footer-about">
            <h3>Emirates Home Care</h3>
            <p>
              Established in 2010, Emirates Home Care is one of the leading home healthcare
              providers in the UAE, offering personalized care from childhood to old age.
            </p>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><MapPin size={16} /></span>
              <span>Office UB-04, Daytona House, Motor City Dubai, UAE<br/>P.O. Box 117182</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><Phone size={16} /></span>
              <a href="tel:+9718006877464">800-NURSING (687-7464)</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon"><Mail size={16} /></span>
              <a href="mailto:info@emirateshomecare.ae">info@emirateshomecare.ae</a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />About Us</Link></li>
              <li><Link to="/careers"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />Careers</Link></li>
              <li><Link to="/blog"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />News & Articles</Link></li>
              <li><Link to="/privacy-policy"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />Privacy Policy</Link></li>
              <li><Link to="/terms-conditions"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />Terms & Conditions</Link></li>
              <li><Link to="/cancellation-refund-policy"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />Cancellation & Refund</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services/newborn-mother-care"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />Newborn & Mother Care</Link></li>
              <li><Link to="/services/child-care"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />Child Care</Link></li>
              <li><Link to="/services/senior-care"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />Senior Care</Link></li>
              <li><Link to="/services/clinical-care"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />Clinical Care</Link></li>
              <li><Link to="/services/physiotherapy"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />Physiotherapy</Link></li>
              <li><Link to="/services/speech-therapy"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />Speech Therapy</Link></li>
              <li><Link to="/services/iv-drip"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />IV Drip at Home</Link></li>
              <li><Link to="/services/lab-collection"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />Lab Collection at Home</Link></li>
              <li><Link to="/services/doctor-on-call"><ArrowRight size={12} style={{ marginRight: 6, opacity: 0.5 }} />Doctor on Call</Link></li>
            </ul>
          </div>

          <div className="footer-col footer-newsletter">
            <h3>Newsletter</h3>
            <p>Subscribe to our newsletter and stay updated with the latest news and offers.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Your email address" />
              <button type="submit">Sign Up</button>
            </form>
            <div className="footer-social">
              <a href="#" aria-label="Facebook"><Facebook size={16} /></a>
              <a href="#" aria-label="Instagram"><Instagram size={16} /></a>
              <a href="#" aria-label="LinkedIn"><Linkedin size={16} /></a>
              <a href="#" aria-label="YouTube"><Youtube size={16} /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>Copyright &copy; {new Date().getFullYear()} Emirates Home Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
