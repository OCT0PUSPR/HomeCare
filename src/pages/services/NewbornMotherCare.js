import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ServiceSidebar from '../../components/ServiceSidebar';

const NewbornMotherCare = () => {
  return (
    <>
      <PageHeader
        title="Newborn & Mother Care"
        subtitle="Professional prenatal and postpartum support in your home"
        breadcrumbItems={[{ label: 'Services', link: '/services' }, { label: 'Newborn & Mother Care' }]}
      />
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <h2>Comprehensive Newborn & Mother Care</h2>
              <p>
                With the help of our specialized newborn and mother care professionals, your
                transition to parenthood does not have to be stressful. Our certified midwives
                and nurses provide compassionate, expert care throughout your pregnancy journey
                and beyond.
              </p>

              <h2>Our Services Include</h2>

              <h3 style={{color: 'var(--primary)', marginTop: '20px'}}>Pregnancy & Prenatal Support</h3>
              <ul className="service-features-list">
                <li>Guidance through every stage of pregnancy with qualified midwives</li>
                <li>Regular baby development tracking and monitoring</li>
                <li>Advice and emotional/physical support at each pregnancy stage</li>
              </ul>

              <h3 style={{color: 'var(--primary)'}}>Postpartum & Newborn Care</h3>
              <ul className="service-features-list">
                <li>Professional midwifery services for new mothers</li>
                <li>Newborn care and support from certified specialists</li>
                <li>Special care for twins, triplets, or premature infants</li>
              </ul>

              <h3 style={{color: 'var(--primary)'}}>Feeding & Nutrition Support</h3>
              <ul className="service-features-list">
                <li>Breastfeeding consultations in your home setting</li>
                <li>Guidance on comfortable feeding positions and techniques</li>
              </ul>

              <h3 style={{color: 'var(--primary)'}}>Sleep & Development</h3>
              <ul className="service-features-list">
                <li>Sleep training and consultation services</li>
                <li>Personalized sleeping and feeding schedules</li>
              </ul>

              <h3 style={{color: 'var(--primary)'}}>Parent Education</h3>
              <ul className="service-features-list">
                <li>Five-week internationally accredited infant massage course</li>
                <li>First aid training for parents and nannies</li>
                <li>Travel safety guidance for families</li>
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

export default NewbornMotherCare;
