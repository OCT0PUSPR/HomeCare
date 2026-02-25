import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ServiceSidebar from '../../components/ServiceSidebar';

const ChildCare = () => {
  return (
    <>
      <PageHeader
        title="Child Care"
        subtitle="Professional pediatric home healthcare for children of all ages"
        breadcrumbItems={[{ label: 'Services', link: '/services' }, { label: 'Child Care' }]}
      />
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <h2>Specialized Child Care Services</h2>
              <p>
                Our child care services are delivered by qualified staff who are all trained and
                certified in basic life support and first aid. We provide professional care that
                respects your boundaries and personal space.
              </p>

              <h3 style={{color: 'var(--primary)', marginTop: '25px'}}>Newborn Care Services</h3>
              <p>Professional support during the first weeks of a baby's life, helping parents adjust and providing reliable resources.</p>

              <h3 style={{color: 'var(--primary)'}}>Home Babysitting Services</h3>
              <p>Flexible arrangements ranging from single nights to extended, permanent childcare solutions within your home.</p>

              <h3 style={{color: 'var(--primary)'}}>Home Childcare Services</h3>
              <p>Professional care for children of all ages delivered by qualified, certified staff.</p>

              <h3 style={{color: 'var(--primary)'}}>Office & Hotel Babysitting</h3>
              <p>Supervised childcare allowing parents to pursue activities while children remain engaged and safe in professional settings.</p>

              <h3 style={{color: 'var(--primary)'}}>Travel Companion Services</h3>
              <p>A responsible, fully qualified nurse accompanies your family during travel, ensuring continuous care throughout journeys.</p>

              <h2 style={{marginTop: '30px'}}>Key Features</h2>
              <ul className="service-features-list">
                <li>Licensed healthcare professionals with comprehensive training</li>
                <li>Gold winner, Childcare Provider of the Year (Mother Baby & Child Magazine, 2021)</li>
                <li>Customizable options: hourly, daily, weekly, or shift-based</li>
                <li>Round-the-clock 24/7 service delivery</li>
                <li>Basic life support and first aid certified staff</li>
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

export default ChildCare;
