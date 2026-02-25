import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ServiceSidebar from '../../components/ServiceSidebar';

const DoctorOnCall = () => {
  return (
    <>
      <PageHeader
        title="Doctor on Call"
        subtitle="Professional medical consultations at your doorstep, 24/7"
        breadcrumbItems={[{ label: 'Services', link: '/services' }, { label: 'Doctor on Call' }]}
      />
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <h2>24/7 Doctor on Call Services</h2>
              <p>
                Emirates Home Care offers round-the-clock Doctor on Call services in Dubai,
                bringing medical care right to your doorstep without requiring visits to
                traditional clinics. Our service bridges the gap between traditional hospital
                visits and home-based healthcare.
              </p>

              <h2>Core Services</h2>
              <ul className="service-features-list">
                <li>Chronic condition management</li>
                <li>Routine check-ups and health assessments</li>
                <li>Immediate medical advice</li>
                <li>Medication management and prescriptions</li>
                <li>Preventive care consultations</li>
              </ul>

              <h2>Consultation Methods</h2>
              <ul className="service-features-list">
                <li>Virtual consultations via technology</li>
                <li>In-home visits from experienced physicians</li>
                <li>Same-day availability for urgent concerns</li>
              </ul>

              <h2>Wellness Testing Packages</h2>
              <ul className="service-features-list">
                <li>Basic Wellness Panel (19 tests)</li>
                <li>Standard Wellness Panel (46 tests)</li>
                <li>Executive Wellness for Men (57 tests)</li>
                <li>Wellness Panel for Women (57 tests)</li>
              </ul>

              <p>
                Our physicians prioritize physical, emotional, and mental well-being through
                personalized, holistic care tailored to your individual needs.
              </p>

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

export default DoctorOnCall;
