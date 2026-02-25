import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ServiceSidebar from '../../components/ServiceSidebar';

const TransitionalCare = () => {
  return (
    <>
      <PageHeader
        title="Transitional Care"
        subtitle="Smooth hospital-to-home recovery support"
        breadcrumbItems={[{ label: 'Services', link: '/services' }, { label: 'Transitional Care' }]}
      />
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <h2>Transitional Care Services</h2>
              <p>
                Our transitional care services facilitate smooth recovery as patients move
                from hospital settings to home-based care. The service begins upon hospital
                discharge with physician referral and employs a multidisciplinary approach to
                establish personalized care plans.
              </p>

              <h2>Core Services</h2>
              <ul className="service-features-list">
                <li>Skilled nursing support during hospital-to-home transition</li>
                <li>Medication management and administration oversight</li>
                <li>Pain management protocols</li>
                <li>Wound dressing and care</li>
                <li>Assistance with daily living activities (toileting, bathing, dressing)</li>
                <li>Care coordination and accompaniment to follow-up appointments</li>
              </ul>

              <h2>Key Benefits</h2>
              <ul className="service-features-list">
                <li>Continuity of medical care without service gaps</li>
                <li>Reduced hospital readmission risk</li>
                <li>Physician-supervised home care planning</li>
                <li>Specialist follow-up coordination</li>
                <li>Family education regarding medical conditions and treatment</li>
              </ul>

              <p>
                We accept cases ranging from simple to complex medical situations. Care can be
                tailored as short-term, long-term, shift-based, hourly, daily, or weekly
                arrangements.
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

export default TransitionalCare;
