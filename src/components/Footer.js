import React from 'react';
import { Link } from 'react-router-dom';

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
              <span className="footer-contact-icon">&gt;</span>
              <span>Office UB-04, Daytona House, Motor City Dubai, UAE<br/>P.O. Box 117182</span>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">&gt;</span>
              <a href="tel:+9718006877464">800-NURSING (687-7464)</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-icon">&gt;</span>
              <a href="mailto:info@emirateshomecare.ae">info@emirateshomecare.ae</a>
            </div>
          </div>

          <div className="footer-col">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/careers">Careers</Link></li>
              <li><Link to="/blog">News & Articles</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
              <li><Link to="/cancellation-refund-policy">Cancellation & Refund Policy</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h3>Services</h3>
            <ul>
              <li><Link to="/services/newborn-mother-care">Newborn & Mother Care</Link></li>
              <li><Link to="/services/child-care">Child Care</Link></li>
              <li><Link to="/services/senior-care">Senior Care</Link></li>
              <li><Link to="/services/clinical-care">Clinical Care</Link></li>
              <li><Link to="/services/physiotherapy">Physiotherapy</Link></li>
              <li><Link to="/services/speech-therapy">Speech Therapy</Link></li>
              <li><Link to="/services/iv-drip">IV Drip at Home</Link></li>
              <li><Link to="/services/lab-collection">Lab Collection at Home</Link></li>
              <li><Link to="/services/doctor-on-call">Doctor on Call</Link></li>
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
              <a href="#" aria-label="Facebook">FB</a>
              <a href="#" aria-label="Instagram">IG</a>
              <a href="#" aria-label="LinkedIn">IN</a>
              <a href="#" aria-label="YouTube">YT</a>
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
