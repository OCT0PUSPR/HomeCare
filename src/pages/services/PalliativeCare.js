import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ServiceSidebar from '../../components/ServiceSidebar';

const PalliativeCare = () => {
  return (
    <>
      <PageHeader
        title="Palliative Care"
        subtitle="Compassionate care focused on comfort and quality of life"
        breadcrumbItems={[{ label: 'Services', link: '/services' }, { label: 'Palliative Care' }]}
      />
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <h2>Palliative Care at Home</h2>
              <p>
                Palliative care is used to manage a disease or medical condition that is serious
                or life-limiting. The goal is to ease pain and other physical, emotional, or
                psychosocial symptoms. Our care addresses physical discomfort alongside emotional
                and psychological needs.
              </p>

              <h2>Key Service Components</h2>

              <h3 style={{color: 'var(--primary)', marginTop: '20px'}}>Pain Management</h3>
              <p>Comprehensive pain relief emphasizing whole-person care encompassing body, mind, and spirit.</p>

              <h3 style={{color: 'var(--primary)'}}>Bedside Assistance</h3>
              <p>Direct hands-on support from licensed healthcare professionals meeting physical, emotional, and psychological needs.</p>

              <h3 style={{color: 'var(--primary)'}}>Skilled Nursing Services</h3>
              <ul className="service-features-list">
                <li>PEG tube management</li>
                <li>Tracheostomy care</li>
                <li>Ventilator management</li>
              </ul>

              <h3 style={{color: 'var(--primary)'}}>Medication Management</h3>
              <p>Pharmaceutical oversight enhancing quality of life and condition management.</p>

              <h3 style={{color: 'var(--primary)'}}>Activities of Daily Living Support</h3>
              <ul className="service-features-list">
                <li>Toileting assistance</li>
                <li>Bathing support</li>
                <li>Dressing assistance</li>
                <li>Management of depression, anxiety, fatigue, insomnia</li>
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

export default PalliativeCare;
