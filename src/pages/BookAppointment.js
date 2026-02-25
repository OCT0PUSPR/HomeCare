import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  HeartHandshake, Lightbulb, Users, DollarSign, UserCheck, Clock
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
  { icon: HeartHandshake, color: '#0056b3', title: 'Patient Centric Care', desc: 'Your well-being is at the center of everything we do.' },
  { icon: Lightbulb, color: '#0056b3', title: 'Innovative Approach', desc: 'Modern methods for the best care outcomes.' },
  { icon: Users, color: '#0056b3', title: 'Personalised Care', desc: 'Tailored healthcare plans for every individual.' },
  { icon: DollarSign, color: '#0056b3', title: 'Cost-Effective', desc: 'Quality healthcare that respects your budget.' },
  { icon: UserCheck, color: '#0056b3', title: 'Professional Experts', desc: 'Certified, experienced healthcare professionals.' },
  { icon: Clock, color: '#0056b3', title: 'By Your Side 24/7', desc: 'Round-the-clock availability for all care needs.' },
];

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    name: '', phone: '', email: '', service: '',
    date: '', time: '', location: '', message: '', terms: false
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.terms) {
      alert('Please accept the Terms & Conditions.');
      return;
    }
    alert('Thank you! Your appointment request has been submitted. We will confirm shortly.');
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ ...formData, [name]: type === 'checkbox' ? checked : value });
  };

  return (
    <>
      <PageHeader
        title="Book an Appointment"
        subtitle="Access home nursing services at your convenience"
        breadcrumbItems={[{ label: 'Book an Appointment' }]}
      />

      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Emirates Home Care</h2>
            <p>Caregiving is a sacred relationship we create with the families we work with.</p>
          </div>
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

      <section className="section">
        <div className="container">
          <motion.div
            className="form-container"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 style={{ textAlign: 'center', color: 'var(--text-primary)', marginBottom: '28px', fontSize: '24px', fontWeight: 700 }}>Request an Appointment</h2>
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
                <label>Service *</label>
                <select name="service" value={formData.service} onChange={handleChange} required>
                  <option value="">Select a Service</option>
                  <option value="newborn">Newborn & Mother Care</option>
                  <option value="child">Child Care</option>
                  <option value="senior">Senior Care</option>
                  <option value="clinical">Clinical Care</option>
                  <option value="transitional">Transitional Care</option>
                  <option value="palliative">Palliative Care</option>
                  <option value="physiotherapy">Physiotherapy</option>
                  <option value="lymphatic">Lymphatic Drainage</option>
                  <option value="speech">Speech Therapy</option>
                  <option value="iv">IV Drip at Home</option>
                  <option value="lab">Lab Collection</option>
                  <option value="doctor">Doctor on Call</option>
                </select>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label>Date *</label>
                  <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Time *</label>
                  <input type="time" name="time" value={formData.time} onChange={handleChange} required />
                </div>
              </div>
              <div className="form-group">
                <label>Location *</label>
                <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Your area in Dubai" required />
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Any special requirements or notes..."></textarea>
              </div>
              <div className="form-checkbox">
                <input type="checkbox" name="terms" checked={formData.terms} onChange={handleChange} id="terms" />
                <label htmlFor="terms">
                  I agree to the <Link to="/terms-conditions" style={{ color: 'var(--primary)' }}>Terms & Conditions</Link>.
                  An urgent fee will be applied to bookings within a five-hour window.
                  A transportation fee of AED 105 applies for services between 10 pm to 7 am.
                </label>
              </div>
              <button type="submit" className="btn btn-green" style={{ width: '100%' }}>Book Appointment</button>
              <p className="form-note">
                * Any applications or job-related messages sent here will not be reviewed.
                Please use our <Link to="/careers" style={{ color: 'var(--primary)' }}>careers page</Link>.
              </p>
            </form>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default BookAppointment;
