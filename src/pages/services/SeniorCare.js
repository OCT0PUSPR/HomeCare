import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ServiceSidebar from '../../components/ServiceSidebar';

const SeniorCare = () => {
  return (
    <>
      <PageHeader
        title="Senior Care"
        subtitle="Family-like care that you can depend on at any time of the day"
        breadcrumbItems={[{ label: 'Services', link: '/services' }, { label: 'Senior Care' }]}
      />
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <h2>Comprehensive Senior Care at Home</h2>
              <p>
                Emirates Home Care provides professional senior care services that extend
                family support for elderly individuals who need assistance with medical and
                daily living needs. Our service adapts to individual requirements with flexible
                short-term or long-term arrangements.
              </p>

              <h2>Medical & Health Management</h2>
              <ul className="service-features-list">
                <li>Medication administration on schedule</li>
                <li>Wound management for various injuries</li>
                <li>Pressure sore management with specialized mattresses and position changes</li>
                <li>Pain management for chronic conditions</li>
              </ul>

              <h2>Specialized Care</h2>
              <ul className="service-features-list">
                <li>Fall risk assessment and hazard reduction</li>
                <li>Dementia and Alzheimer's support with specialized training</li>
                <li>Arthritis management for independence maintenance</li>
                <li>Travel companion services for adventurous seniors</li>
              </ul>

              <h2>Flexibility</h2>
              <p>
                Services adapt to individual needs with short-term or long-term arrangements
                available on hourly, daily, or weekly schedules. Our team is available 24/7.
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

export default SeniorCare;
