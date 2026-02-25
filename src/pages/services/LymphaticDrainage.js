import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ServiceSidebar from '../../components/ServiceSidebar';

const LymphaticDrainage = () => {
  return (
    <>
      <PageHeader
        title="Lymphatic Drainage Treatment"
        subtitle="Professional lymphatic drainage therapy at home"
        breadcrumbItems={[{ label: 'Services', link: '/services' }, { label: 'Lymphatic Drainage Treatment' }]}
      />
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <h2>What is Lymphatic Drainage Therapy?</h2>
              <p>
                Lymphatic drainage therapy involves gentle, rhythmic massage techniques designed
                to encourage lymph flow. Unlike blood circulation powered by the heart, lymphatic
                movement depends on muscle activity, making this therapy valuable for supporting
                the body's natural detoxification processes.
              </p>

              <h2>Key Benefits</h2>
              <ul className="service-features-list">
                <li>Reduce swelling in the face, arms, legs, or after surgery</li>
                <li>Improve skin tone and reduce puffiness</li>
                <li>Accelerate healing and recovery</li>
                <li>Detoxify the body and eliminate waste</li>
                <li>Enhance blood circulation</li>
                <li>Alleviate stress and muscle tension</li>
              </ul>

              <h2>Ideal Candidates</h2>
              <p>This service particularly benefits individuals experiencing:</p>
              <ul className="service-features-list">
                <li>Post-operative recovery</li>
                <li>Hormonal fluctuation discomfort</li>
                <li>Skin care concerns and facial rejuvenation</li>
                <li>General stress and detoxification needs</li>
              </ul>

              <h2>The Session Experience</h2>
              <p>
                Treatments involve lying in a relaxed position while therapists apply slow,
                gentle movements. The process begins in unaffected areas to create drainage
                pathways. Sessions require no anesthesia or special equipment and are painless
                and soothing.
              </p>

              <p>
                Our DHA-licensed professionals bring over 15 years of home healthcare
                experience in the UAE, offering customized treatments tailored to your needs.
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

export default LymphaticDrainage;
