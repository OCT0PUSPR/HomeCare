import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

const servicesList = [
  { path: '/services/newborn-mother-care', title: 'Newborn & Mother Care', icon: '&#128118;', color: '#e8a0bf', desc: 'Dedicated postpartum and infant support services with certified midwives and nurses.' },
  { path: '/services/child-care', title: 'Child Care', icon: '&#128103;', color: '#f0c47b', desc: 'Specialized pediatric home healthcare services for children of all ages.' },
  { path: '/services/senior-care', title: 'Senior Care', icon: '&#128116;', color: '#7eb8c9', desc: 'Comprehensive elderly care programs with 24/7 personalized attention.' },
  { path: '/services/clinical-care', title: 'Clinical Care', icon: '&#127973;', color: '#82c4a0', desc: 'Medical-level clinical services administered in the comfort of your home.' },
  { path: '/services/transitional-care', title: 'Transitional Care', icon: '&#128656;', color: '#a8c5e2', desc: 'Smooth hospital-to-home transition with skilled nursing support.' },
  { path: '/services/palliative-care', title: 'Palliative Care', icon: '&#128153;', color: '#c5a8e2', desc: 'Comfort-focused care for patients with serious or life-limiting conditions.' },
  { path: '/services/physiotherapy', title: 'Physiotherapy', icon: '&#128170;', color: '#82c4a0', desc: 'In-home rehabilitation and physical therapy with personalized treatment plans.' },
  { path: '/services/lymphatic-drainage', title: 'Lymphatic Drainage Treatment', icon: '&#128167;', color: '#7eb8c9', desc: 'Specialized therapeutic drainage procedures for wellness and recovery.' },
  { path: '/services/speech-therapy', title: 'Speech Therapy', icon: '&#128483;', color: '#c5a8e2', desc: 'Communication and swallowing rehabilitation for all ages.' },
  { path: '/services/iv-drip', title: 'IV Drip at Home', icon: '&#128137;', color: '#f0c47b', desc: 'Professional IV therapy administration for wellness and recovery at home.' },
  { path: '/services/lab-collection', title: 'Lab Collection at Home', icon: '&#129656;', color: '#e8a0bf', desc: 'Professional blood work and specimen collection at your doorstep.' },
  { path: '/services/doctor-on-call', title: 'Doctor on Call', icon: '&#128105;&#8205;&#9877;&#65039;', color: '#a8c5e2', desc: 'Telemedicine and house call physician services available 24/7.' },
];

const Services = () => {
  return (
    <>
      <PageHeader
        title="Our Services"
        subtitle="We provide premium, personalized healthcare services for your loved ones at the convenience of your home"
        breadcrumbItems={[{ label: 'Services' }]}
      />

      <section className="section">
        <div className="container">
          <div className="services-grid">
            {servicesList.map((service) => (
              <Link to={service.path} className="service-card" key={service.path}>
                <div
                  className="service-card-image"
                  style={{background: `linear-gradient(135deg, ${service.color}, ${service.color}dd)`}}
                  dangerouslySetInnerHTML={{__html: service.icon}}
                />
                <div className="service-card-content">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                  <span className="btn btn-green btn-sm">Learn More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-green">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
          </div>
          <div className="pillars-row">
            <div className="pillar-card">
              <div className="pillar-icon">&#127942;</div>
              <h3>Certified Team</h3>
              <p>Licensed healthcare professionals dedicated to providing excellence in care.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">&#127941;</div>
              <h3>Award Winning</h3>
              <p>Gold winner, Childcare Provider of the Year (Mother Baby & Child Magazine, 2021).</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">&#10084;&#65039;</div>
              <h3>Flexible Scheduling</h3>
              <p>Services available as short-term, long-term, hourly, daily, or weekly arrangements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>"The postpartum care I received was exceptional. The nurse was knowledgeable, supportive, and helped me navigate new motherhood with confidence."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">N</div>
                <div><h4>Nicole</h4><span>Palm Jumeirah</span></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>"From prenatal to newborn support, the team was incredible. Their professional and caring approach made all the difference."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">L</div>
                <div><h4>Laura</h4><span>Emirates Hills</span></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>"We had a wonderful four-week experience with their childcare service. The nurse was attentive and became part of our family."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">G</div>
                <div><h4>Gayle</h4><span>Dubai Marina</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
