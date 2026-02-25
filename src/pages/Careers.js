import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const Careers = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', position: '', description: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your application! Our HR team will review your submission.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHeader
        title="Careers"
        subtitle="Join our team of healthcare professionals"
        breadcrumbItems={[{ label: 'About Us', link: '/about' }, { label: 'Careers' }]}
      />

      <section className="section">
        <div className="container">
          <div className="about-story">
            <motion.div
              className="about-story-content"
              style={{ flex: '1' }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2>Join Our Team</h2>
              <p>
                If you are a committed professional healthcare provider yearning for growth
                in the industry, you're meant to be a part of our team. We offer a supportive
                work environment with diverse employees dedicated to providing the best care.
              </p>
              <p>
                Emirates Home Care provides opportunities across nursing, physiotherapy,
                speech therapy, and other specialized healthcare services. Join us in making
                a difference in people's lives every day.
              </p>
              <p>
                You can also reach out to us directly at{' '}
                <a href="mailto:career@emirateshomecare.ae" style={{ color: 'var(--primary)', fontWeight: '600' }}>
                  career@emirateshomecare.ae
                </a>{' '}
                or{' '}
                <a href="mailto:hr@emirateshomecare.ae" style={{ color: 'var(--primary)', fontWeight: '600' }}>
                  hr@emirateshomecare.ae
                </a>
              </p>
            </motion.div>
            <motion.div
              className="about-story-image"
              style={{ flex: '1' }}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Briefcase size={72} color="#94a3b8" strokeWidth={1} />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <motion.div
            className="form-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ textAlign: 'center', color: 'var(--text-primary)', marginBottom: '28px', fontSize: '24px', fontWeight: 700 }}>Join Our Talent Pool</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} required />
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
                <label>Position of Interest *</label>
                <input type="text" name="position" value={formData.position} onChange={handleChange} required placeholder="e.g., Licensed Nurse, Physiotherapist" />
              </div>
              <div className="form-group">
                <label>Tell Us About Yourself</label>
                <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Brief description of your experience and qualifications..."></textarea>
              </div>
              <div className="form-group">
                <label>Upload Resume (Max 10MB)</label>
                <input type="file" accept=".pdf,.doc,.docx" style={{ padding: '10px 0' }} />
              </div>
              <button type="submit" className="btn btn-green" style={{ width: '100%' }}>Submit Application</button>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Careers;
