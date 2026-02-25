import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Award, HeartHandshake, Star, ArrowRight
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

const servicesList = [
  { path: '/services/newborn-mother-care', title: 'Newborn & Mother Care', image: '/images/services/newborn-care.jpg', color: '#0056b3', desc: 'Dedicated postpartum and infant support services with certified midwives and nurses.' },
  { path: '/services/child-care', title: 'Child Care', image: '/images/services/child-care.jpg', color: '#0056b3', desc: 'Specialized pediatric home healthcare services for children of all ages.' },
  { path: '/services/senior-care', title: 'Senior Care', image: '/images/services/senior-care.jpg', color: '#0056b3', desc: 'Comprehensive elderly care programs with 24/7 personalized attention.' },
  { path: '/services/clinical-care', title: 'Clinical Care', image: '/images/services/clinical-care.jpg', color: '#0056b3', desc: 'Medical-level clinical services administered in the comfort of your home.' },
  { path: '/services/transitional-care', title: 'Transitional Care', image: '/images/services/transitional-care.jpg', color: '#0056b3', desc: 'Smooth hospital-to-home transition with skilled nursing support.' },
  { path: '/services/palliative-care', title: 'Palliative Care', image: '/images/services/palliative-care.jpg', color: '#0056b3', desc: 'Comfort-focused care for patients with serious or life-limiting conditions.' },
  { path: '/services/physiotherapy', title: 'Physiotherapy', image: '/images/services/physiotherapy.jpg', color: '#0056b3', desc: 'In-home rehabilitation and physical therapy with personalized treatment plans.' },
  { path: '/services/lymphatic-drainage', title: 'Lymphatic Drainage Treatment', image: '/images/services/lymphatic-drainage.jpg', color: '#0056b3', desc: 'Specialized therapeutic drainage procedures for wellness and recovery.' },
  { path: '/services/speech-therapy', title: 'Speech Therapy', image: '/images/services/speech-therapy.jpg', color: '#0056b3', desc: 'Communication and swallowing rehabilitation for all ages.' },
  { path: '/services/iv-drip', title: 'IV Drip at Home', image: '/images/services/iv-drip.jpg', color: '#0056b3', desc: 'Professional IV therapy administration for wellness and recovery at home.' },
  { path: '/services/lab-collection', title: 'Lab Collection at Home', image: '/images/services/lab-collection.jpg', color: '#0056b3', desc: 'Professional blood work and specimen collection at your doorstep.' },
  { path: '/services/doctor-on-call', title: 'Doctor on Call', image: '/images/services/doctor-on-call.jpg', color: '#0056b3', desc: 'Telemedicine and house call physician services available 24/7.' },
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
          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {servicesList.map((service, index) => {
              return (
                <motion.div key={service.path} variants={fadeInUp} custom={index}>
                  <Link to={service.path} className="service-card">
                    <div className="service-card-image">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="service-card-content">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                      <span className="btn btn-green btn-sm">Learn More <ArrowRight size={14} /></span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section section-green">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
          </div>
          <motion.div
            className="pillars-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="pillar-card" variants={fadeInUp}>
              <div className="pillar-icon"><ShieldCheck size={44} strokeWidth={1.5} /></div>
              <h3>Certified Team</h3>
              <p>Licensed healthcare professionals dedicated to providing excellence in care.</p>
            </motion.div>
            <motion.div className="pillar-card" variants={fadeInUp}>
              <div className="pillar-icon"><Award size={44} strokeWidth={1.5} /></div>
              <h3>Award Winning</h3>
              <p>Gold winner, Childcare Provider of the Year (Mother Baby & Child Magazine, 2021).</p>
            </motion.div>
            <motion.div className="pillar-card" variants={fadeInUp}>
              <div className="pillar-icon"><HeartHandshake size={44} strokeWidth={1.5} /></div>
              <h3>Flexible Scheduling</h3>
              <p>Services available as short-term, long-term, hourly, daily, or weekly arrangements.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>What Our Clients Say</h2>
          </div>
          <motion.div
            className="testimonials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { text: '"The postpartum care I received was exceptional. The nurse was knowledgeable, supportive, and helped me navigate new motherhood with confidence."', name: 'Nicole', location: 'Palm Jumeirah', initial: 'N' },
              { text: '"From prenatal to newborn support, the team was incredible. Their professional and caring approach made all the difference."', name: 'Laura', location: 'Emirates Hills', initial: 'L' },
              { text: '"We had a wonderful four-week experience with their childcare service. The nurse was attentive and became part of our family."', name: 'Gayle', location: 'Dubai Marina', initial: 'G' },
            ].map((t) => (
              <motion.div className="testimonial-card" key={t.name} variants={fadeInUp}>
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="#f59e0b" color="#f59e0b" style={{ marginRight: 2 }} />
                  ))}
                </div>
                <p>{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div><h4>{t.name}</h4><span>{t.location}</span></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Services;
