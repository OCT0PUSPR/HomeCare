import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const services = [
  { path: '/services/newborn-mother-care', label: 'Newborn & Mother Care' },
  { path: '/services/child-care', label: 'Child Care' },
  { path: '/services/senior-care', label: 'Senior Care' },
  { path: '/services/clinical-care', label: 'Clinical Care' },
  { path: '/services/transitional-care', label: 'Transitional Care' },
  { path: '/services/palliative-care', label: 'Palliative Care' },
  { path: '/services/physiotherapy', label: 'Physiotherapy' },
  { path: '/services/lymphatic-drainage', label: 'Lymphatic Drainage Treatment' },
  { path: '/services/speech-therapy', label: 'Speech Therapy' },
  { path: '/services/iv-drip', label: 'IV Drip at Home' },
  { path: '/services/lab-collection', label: 'Lab Collection at Home' },
  { path: '/services/doctor-on-call', label: 'Doctor on Call' },
];

const ServiceSidebar = () => {
  const location = useLocation();

  return (
    <div className="service-detail-sidebar">
      <div className="sidebar-card">
        <h3>Our Services</h3>
        <ul>
          {services.map((service) => (
            <li key={service.path}>
              <Link
                to={service.path}
                className={location.pathname === service.path ? 'active-service' : ''}
              >
                <ChevronRight size={14} /> {service.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="sidebar-card sidebar-cta">
        <h3>Need Help?</h3>
        <p>Contact us for a free consultation about your care needs.</p>
        <Link to="/book-appointment" className="btn btn-primary btn-sm">Book Appointment</Link>
        <p style={{ marginTop: '15px', fontSize: '13px' }}>
          Or call us at<br />
          <a href="tel:+9718006877464" style={{ color: '#fff', fontWeight: 'bold', fontSize: '16px' }}>
            800-NURSING
          </a>
        </p>
      </div>
    </div>
  );
};

export default ServiceSidebar;
