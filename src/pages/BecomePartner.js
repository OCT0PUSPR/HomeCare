import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Handshake, Globe, TrendingUp } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const stagger = { visible: { transition: { staggerChildren: 0.08 } } };

const BecomePartner = () => {
  const [formData, setFormData] = useState({
    organisation: '', website: '', contactPerson: '',
    position: '', phone: '', email: '', collaboration: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! We will review your partnership inquiry shortly.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHeader
        title="Become a Partner"
        subtitle="Join us in providing exceptional home healthcare services"
        breadcrumbItems={[{ label: 'Become a Partner' }]}
      />

      <section className="section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Partnership Opportunities</h2>
            <p>Through our journey of 15 years of practice, we have achieved new milestones through our collaborations with our local and international partners.</p>
          </motion.div>

          <motion.div
            className="partner-benefits"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            <motion.div className="partner-benefit-card" variants={fadeInUp}>
              <div className="partner-benefit-icon">
                <Handshake size={40} color="#0056b3" strokeWidth={1.5} />
              </div>
              <h3>Collaborative Growth</h3>
              <p>We believe in partnerships that enhance service quality and expand our service portfolio for mutual benefit.</p>
            </motion.div>
            <motion.div className="partner-benefit-card" variants={fadeInUp}>
              <div className="partner-benefit-icon">
                <Globe size={40} color="#0056b3" strokeWidth={1.5} />
              </div>
              <h3>Local & International</h3>
              <p>We welcome partners from all backgrounds with unique support services that complement our healthcare offerings.</p>
            </motion.div>
            <motion.div className="partner-benefit-card" variants={fadeInUp}>
              <div className="partner-benefit-icon">
                <TrendingUp size={40} color="#0056b3" strokeWidth={1.5} />
              </div>
              <h3>Proven Track Record</h3>
              <p>With over 15 years of experience and 1,000+ happy patients, we bring credibility to every partnership.</p>
            </motion.div>
          </motion.div>

          <motion.div
            className="form-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ textAlign: 'center', color: 'var(--text-primary)', marginBottom: '28px', fontSize: '24px', fontWeight: 700 }}>Partnership Inquiry</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Organisation Name *</label>
                <input type="text" name="organisation" value={formData.organisation} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label>Website</label>
                <input type="url" name="website" value={formData.website} onChange={handleChange} placeholder="https://" />
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Contact Person *</label>
                  <input type="text" name="contactPerson" value={formData.contactPerson} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Position *</label>
                  <input type="text" name="position" value={formData.position} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Phone *</label>
                  <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Email *</label>
                  <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>How would you like to collaborate?</label>
                <textarea name="collaboration" value={formData.collaboration} onChange={handleChange} placeholder="Tell us about the partnership you envision..."></textarea>
              </div>
              <button type="submit" className="btn btn-green" style={{ width: '100%' }}>Submit Inquiry</button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BecomePartner;
