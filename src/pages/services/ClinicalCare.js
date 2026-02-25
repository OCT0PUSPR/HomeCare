import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ServiceSidebar from '../../components/ServiceSidebar';

const ClinicalCare = () => {
  return (
    <>
      <PageHeader
        title="Clinical Care"
        subtitle="Specialized clinical services delivered in your home"
        breadcrumbItems={[{ label: 'Services', link: '/services' }, { label: 'Clinical Care' }]}
      />
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <h2>Professional Clinical Home Care</h2>
              <p>
                Our clinical care services combine professional excellence with compassionate
                support for those managing chronic diseases, recovering from surgery, or
                dealing with serious health conditions.
              </p>

              <h2>Core Clinical Services</h2>
              <ul className="service-features-list">
                <li>Post-operative care and wound management through healing phases</li>
                <li>Palliative care with symptom management and quality of life focus</li>
                <li>Diabetes management and lifestyle adaptation support</li>
                <li>Diabetic foot care with preventative guidance</li>
                <li>Stroke therapy and physiotherapy for skill relearning</li>
                <li>Continence and bowel management</li>
              </ul>

              <h2>Specialized Device Care</h2>
              <ul className="service-features-list">
                <li>Catheter, nephrostomy, urostomy, stoma, colostomy, and ileostomy care</li>
                <li>Tracheostomy care including airway management</li>
                <li>Spinal injury rehabilitation</li>
              </ul>

              <h2>Additional Services</h2>
              <ul className="service-features-list">
                <li>Cancer support with day-to-day assistance</li>
                <li>Chest therapy/suctioning including postural drainage, percussion, vibrations</li>
                <li>Breathing exercises and respiratory support</li>
              </ul>

              <div style={{marginTop: '30px'}}>
                <Link to="/book-appointment" className="btn btn-green">Book an Appointment</Link>
              </div>
            </div>
            <ServiceSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default ClinicalCare;
