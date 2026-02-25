import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ServiceSidebar from '../../components/ServiceSidebar';

const Physiotherapy = () => {
  return (
    <>
      <PageHeader
        title="Physiotherapy"
        subtitle="Regain strength and mobility with personalized treatment plans"
        breadcrumbItems={[{ label: 'Services', link: '/services' }, { label: 'Physiotherapy' }]}
      />
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <h2>Professional Home Physiotherapy</h2>
              <p>
                We offer comprehensive physiotherapy with a holistic approach to treating
                muscle, bone, joint, and soft tissue conditions tailored to individual needs.
                Treatment begins with thorough assessment to identify specific areas requiring
                assistance.
              </p>

              <h2>Pain & Musculoskeletal Issues</h2>
              <ul className="service-features-list">
                <li>Pain management</li>
                <li>Disc injuries and nerve injuries</li>
                <li>Scoliosis treatment</li>
                <li>Neck, back, knee, jaw, shoulder, elbow, and ankle pain</li>
                <li>Age-related joint pain</li>
                <li>Sports and gym injuries</li>
              </ul>

              <h2>Post-Operative & Rehabilitation</h2>
              <ul className="service-features-list">
                <li>Post-operative rehabilitation</li>
                <li>Postoperative joint replacement care</li>
                <li>Breast cancer post-surgical rehabilitation</li>
                <li>Post-trauma therapy for neurological diseases</li>
              </ul>

              <h2>Neurological Conditions</h2>
              <ul className="service-features-list">
                <li>Stroke, paralysis, and spinal cord injury</li>
                <li>Parkinson's Disease management</li>
                <li>Neurological disease recovery</li>
              </ul>

              <h2>Specialized Programs</h2>
              <ul className="service-features-list">
                <li>Pediatric physiotherapy</li>
                <li>Urine incontinence treatment</li>
                <li>Ergonomics and posture correction</li>
                <li>Fall prevention and balance disorders</li>
                <li>Maternal exercise programs (pre/post-natal)</li>
                <li>Corporate work-related exercise programs</li>
              </ul>

              <h2>Advanced Therapies</h2>
              <ul className="service-features-list">
                <li>Dry needling</li>
                <li>Electrotherapy</li>
                <li>Cupping therapy</li>
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

export default Physiotherapy;
