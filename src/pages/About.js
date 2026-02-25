import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const About = () => {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Your ease of mind starts with our home care experts"
        breadcrumbItems={[{ label: 'About Us' }]}
      />

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div className="about-story-image">&#128153;</div>
            <div className="about-story-content">
              <h2>Our Story</h2>
              <p>
                We started our journey in 2010 with one goal: to serve and give back to the
                community we belong to. After over a decade of operation, Emirates Home Care
                has achieved recognition in nursing and caregiving services across the UAE.
              </p>
              <p>
                Our service model emphasizes at-home care according to patient schedules,
                with round-the-clock staff availability. We believe that quality healthcare
                should be accessible, personalized, and delivered with compassion.
              </p>
              <Link to="/contact" className="btn btn-green">Get in Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section section-light">
        <div className="container">
          <div className="vision-mission-grid">
            <div className="vm-card">
              <div className="vm-icon">&#128065;</div>
              <h3>Our Vision</h3>
              <p>To be recognized as the leading home healthcare provider in the UAE.</p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">&#127919;</div>
              <h3>Our Mission</h3>
              <p>To enrich people's lives through the provision of tailored and personalized healthcare services.</p>
            </div>
            <div className="vm-card">
              <div className="vm-icon">&#128156;</div>
              <h3>Our Values</h3>
              <p>Our core values guide everything we do in providing care.</p>
              <div className="values-list">
                <span className="value-tag">Caring</span>
                <span className="value-tag">Accountability</span>
                <span className="value-tag">Reliability</span>
                <span className="value-tag">Integrity</span>
                <span className="value-tag">Passion</span>
                <span className="value-tag">Growth</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-dark">
        <div className="container">
          <div className="stats-row">
            <div className="stat-item">
              <h3>50+</h3>
              <p>Areas Covered in Dubai</p>
            </div>
            <div className="stat-item">
              <h3>1,000+</h3>
              <p>Happy Patients</p>
            </div>
            <div className="stat-item">
              <h3>100+</h3>
              <p>Active Members</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>How It Works</h2>
            <p>Getting started with our services is simple</p>
          </div>
          <div className="process-steps">
            <div className="process-step">
              <div className="step-number">1</div>
              <h4>Consultation</h4>
            </div>
            <div className="process-step">
              <div className="step-number">2</div>
              <h4>Choose a Service</h4>
            </div>
            <div className="process-step">
              <div className="step-number">3</div>
              <h4>Pick a Date</h4>
            </div>
            <div className="process-step">
              <div className="step-number">4</div>
              <h4>Special Query</h4>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section section-light">
        <div className="container">
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">&#128137;</div>
              <div>
                <h4>Complete Nursing Care</h4>
                <p>Comprehensive nursing services delivered at home.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#128203;</div>
              <div>
                <h4>Variety of Care Methods</h4>
                <p>Multiple approaches tailored to each condition.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#127968;</div>
              <div>
                <h4>Personalized Homecare</h4>
                <p>Care plans designed around your lifestyle.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#128100;</div>
              <div>
                <h4>Professional Experts</h4>
                <p>DHA-licensed healthcare professionals.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#128176;</div>
              <div>
                <h4>Affordable Pricing</h4>
                <p>Quality care at competitive rates.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#128338;</div>
              <div>
                <h4>24/7 Availability</h4>
                <p>Round-the-clock support whenever you need it.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Meet Our Team</h2>
            <p>Dedicated professionals committed to your well-being</p>
          </div>
          <div className="team-grid">
            <div className="team-card">
              <div className="team-card-image">&#128105;&#8205;&#9877;&#65039;</div>
              <div className="team-card-content">
                <h3>Hannah Jane</h3>
                <p className="role">Licensed Nurse</p>
                <p className="details">Child care, Senior care, Clinical care<br/>Languages: Tagalog, English</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-card-image">&#128105;&#8205;&#9877;&#65039;</div>
              <div className="team-card-content">
                <h3>Ann Leary</h3>
                <p className="role">Licensed Nurse</p>
                <p className="details">Newborn care, Child care, Senior care, Clinical care<br/>Languages: Tagalog, English</p>
              </div>
            </div>
            <div className="team-card">
              <div className="team-card-image">&#128104;&#8205;&#9877;&#65039;</div>
              <div className="team-card-content">
                <h3>Archi Shah</h3>
                <p className="role">Physiotherapist</p>
                <p className="details">Adult & Pediatric physiotherapy<br/>Languages: English, Hindi, Gujarati</p>
              </div>
            </div>
          </div>
          <div style={{textAlign: 'center', marginTop: '30px'}}>
            <Link to="/our-team" className="btn btn-green">View Full Team</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
