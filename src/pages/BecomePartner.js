import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

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
          <div className="section-title">
            <h2>Partnership Opportunities</h2>
            <p>Through our journey of 15 years of practice, we have achieved new milestones through our collaborations with our local and international partners.</p>
          </div>

          <div className="partner-benefits">
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon">&#129309;</div>
              <h3>Collaborative Growth</h3>
              <p>We believe in partnerships that enhance service quality and expand our service portfolio for mutual benefit.</p>
            </div>
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon">&#127758;</div>
              <h3>Local & International</h3>
              <p>We welcome partners from all backgrounds with unique support services that complement our healthcare offerings.</p>
            </div>
            <div className="partner-benefit-card">
              <div className="partner-benefit-icon">&#128200;</div>
              <h3>Proven Track Record</h3>
              <p>With over 15 years of experience and 1,000+ happy patients, we bring credibility to every partnership.</p>
            </div>
          </div>

          <div className="form-container">
            <h2 style={{textAlign: 'center', color: '#2c3e50', marginBottom: '30px'}}>Partnership Inquiry</h2>
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
              <button type="submit" className="btn btn-green" style={{width: '100%'}}>Submit Inquiry</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BecomePartner;
