import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ServiceSidebar from '../../components/ServiceSidebar';

const SpeechTherapy = () => {
  return (
    <>
      <PageHeader
        title="Speech Therapy"
        subtitle="Personalized support to improve communication skills"
        breadcrumbItems={[{ label: 'Services', link: '/services' }, { label: 'Speech Therapy' }]}
      />
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <h2>Professional Speech Therapy at Home</h2>
              <p>
                Our speech therapy services target children, adults, and the elderly to enhance
                their communication and language skills. We emphasize evidence-based practice
                and personalized care with individualized treatment plans.
              </p>

              <h2>Core Service Areas</h2>
              <ul className="service-features-list">
                <li>Language Therapy - Targeted interventions for language development</li>
                <li>Fluency Therapy - Strategies addressing stuttering issues</li>
                <li>Voice Therapy - Rehabilitation for voice disorders</li>
                <li>Apraxia Therapy - Treatment for motor speech disorders</li>
                <li>Swallowing and Feeding Therapy - Specialized care for dysphagia</li>
                <li>Speech Therapy for Elderly - Support for age-related communication challenges</li>
                <li>Oral Placement Therapy (OPT) - Refining speech articulation by enhancing oral muscle coordination</li>
                <li>Aural Rehabilitation - Services for hearing-impaired individuals</li>
                <li>Dyslexia Therapy - Reading and writing support</li>
              </ul>

              <h2>Our Approach</h2>
              <ul className="service-features-list">
                <li>Individualized treatment plans</li>
                <li>Home training programs</li>
                <li>Parent and teacher training</li>
                <li>Voice awareness programming for professional voice users</li>
                <li>Evidence-based practice methods</li>
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

export default SpeechTherapy;
