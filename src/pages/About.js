import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Eye, Target, Gem, Syringe, ClipboardList, Home,
  UserCheck, DollarSign, Clock, ArrowRight
} from 'lucide-react';
import PageHeader from '../components/PageHeader';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const features = [
  { icon: Syringe, color: '#0056b3', title: 'Complete Nursing Care', desc: 'Comprehensive nursing services delivered at home.' },
  { icon: ClipboardList, color: '#0056b3', title: 'Variety of Care Methods', desc: 'Multiple approaches tailored to each condition.' },
  { icon: Home, color: '#0056b3', title: 'Personalized Homecare', desc: 'Care plans designed around your lifestyle.' },
  { icon: UserCheck, color: '#0056b3', title: 'Professional Experts', desc: 'DHA-licensed healthcare professionals.' },
  { icon: DollarSign, color: '#0056b3', title: 'Affordable Pricing', desc: 'Quality care at competitive rates.' },
  { icon: Clock, color: '#0056b3', title: '24/7 Availability', desc: 'Round-the-clock support whenever you need it.' },
];

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
            <motion.div
              className="about-story-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/images/about/our-story.jpg" alt="Our Story" />
            </motion.div>
            <motion.div
              className="about-story-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
              <Link to="/contact" className="btn btn-green">Get in Touch <ArrowRight size={16} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="section section-light">
        <div className="container">
          <motion.div
            className="vision-mission-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="vm-card" variants={fadeInUp}>
              <div className="vm-icon"><Eye size={44} color="#0056b3" strokeWidth={1.5} /></div>
              <h3>Our Vision</h3>
              <p>To be recognized as the leading home healthcare provider in the UAE.</p>
            </motion.div>
            <motion.div className="vm-card" variants={fadeInUp}>
              <div className="vm-icon"><Target size={44} color="#0056b3" strokeWidth={1.5} /></div>
              <h3>Our Mission</h3>
              <p>To enrich people's lives through the provision of tailored and personalized healthcare services.</p>
            </motion.div>
            <motion.div className="vm-card" variants={fadeInUp}>
              <div className="vm-icon"><Gem size={44} color="#0056b3" strokeWidth={1.5} /></div>
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
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="section section-dark">
        <div className="container">
          <motion.div
            className="stats-row"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { num: '50+', label: 'Areas Covered in Dubai' },
              { num: '1,000+', label: 'Happy Patients' },
              { num: '100+', label: 'Active Members' },
              { num: '15+', label: 'Years of Experience' },
            ].map((stat) => (
              <motion.div className="stat-item" key={stat.label} variants={fadeInUp}>
                <h3>{stat.num}</h3>
                <p>{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>How It Works</h2>
            <p>Getting started with our services is simple</p>
          </motion.div>
          <motion.div
            className="process-steps"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {['Consultation', 'Choose a Service', 'Pick a Date', 'Special Query'].map((step, i) => (
              <motion.div className="process-step" key={step} variants={fadeInUp}>
                <div className="step-number">{i + 1}</div>
                <h4>{step}</h4>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Key Features */}
      <section className="section section-light">
        <div className="container">
          <motion.div
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div className="feature-item" key={feature.title} variants={fadeInUp} custom={i}>
                  <div className="feature-icon">
                    <Icon size={26} color={feature.color} strokeWidth={1.5} />
                  </div>
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Team Preview */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Team</h2>
            <p>Dedicated professionals committed to your well-being</p>
          </motion.div>
          <motion.div
            className="team-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { name: 'Hannah Jane', role: 'Licensed Nurse', image: '/images/team/team-4.jpg', details: 'Child care, Senior care, Clinical care\nLanguages: Tagalog, English' },
              { name: 'Ann Leary', role: 'Licensed Nurse', image: '/images/team/team-5.jpg', details: 'Newborn care, Child care, Senior care, Clinical care\nLanguages: Tagalog, English' },
              { name: 'Archi Shah', role: 'Physiotherapist', image: '/images/team/team-6.jpg', details: 'Adult & Pediatric physiotherapy\nLanguages: English, Hindi, Gujarati' },
            ].map((member) => (
              <motion.div className="team-card" key={member.name} variants={fadeInUp}>
                <div className="team-card-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="details">{member.details}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/our-team" className="btn btn-green">View Full Team <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
