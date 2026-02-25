import React, { useState } from 'react';
import PageHeader from '../components/PageHeader';

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', phone: '', email: '',
    nationality: '', location: '', service: '', message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="We are here to assist you and answer any questions you might have"
        breadcrumbItems={[{ label: 'Contact Us' }]}
      />

      <section className="section">
        <div className="container">
          <div className="contact-info-grid">
            <div className="contact-info-card">
              <div className="contact-info-icon">&#128205;</div>
              <h3>Our Office</h3>
              <p>Office UB-04, Daytona House,<br/>Motor City Dubai, UAE<br/>P.O. Box 117182</p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">&#128222;</div>
              <h3>Phone</h3>
              <p>
                <a href="tel:+9718006877464">800-NURSING (687-7464)</a><br/>
                <a href="tel:+97144542330">+971 4 454 2330</a><br/>
                <a href="tel:+97144531012">+971 4 453 1012</a>
              </p>
            </div>
            <div className="contact-info-card">
              <div className="contact-info-icon">&#128231;</div>
              <h3>Email</h3>
              <p>
                <a href="mailto:info@emirateshomecare.ae">info@emirateshomecare.ae</a>
              </p>
              <p style={{marginTop: '10px', fontSize: '13px', color: '#888'}}>
                Available 24/7 for your inquiries
              </p>
            </div>
          </div>

          <div className="form-container">
            <h2 style={{textAlign: 'center', color: '#2c3e50', marginBottom: '30px'}}>Send Us a Message</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name *</label>
                  <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Last Name *</label>
                  <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required />
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
              <div className="form-row">
                <div className="form-group">
                  <label>Nationality</label>
                  <select name="nationality" value={formData.nationality} onChange={handleChange}>
                    <option value="">Select Nationality</option>
                    <option value="UAE">UAE</option>
                    <option value="UK">United Kingdom</option>
                    <option value="US">United States</option>
                    <option value="India">India</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Location</label>
                  <input type="text" name="location" value={formData.location} onChange={handleChange} placeholder="Your area in Dubai" />
                </div>
              </div>
              <div className="form-group">
                <label>Service</label>
                <select name="service" value={formData.service} onChange={handleChange}>
                  <option value="">Select a Service</option>
                  <option value="newborn">Newborn & Mother Care</option>
                  <option value="child">Child Care</option>
                  <option value="senior">Senior Care</option>
                  <option value="clinical">Clinical Care</option>
                  <option value="physiotherapy">Physiotherapy</option>
                  <option value="speech">Speech Therapy</option>
                  <option value="doctor">Doctor on Call</option>
                  <option value="lab">Lab Collection</option>
                  <option value="iv">IV Drip at Home</option>
                  <option value="lymphatic">Lymphatic Drainage</option>
                  <option value="palliative">Palliative Care</option>
                  <option value="transitional">Transitional Care</option>
                </select>
              </div>
              <div className="form-group">
                <label>Message</label>
                <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your care needs..."></textarea>
              </div>
              <button type="submit" className="btn btn-green" style={{width: '100%'}}>Send Message</button>
              <p className="form-note">
                * Any applications or job-related messages sent here will not be reviewed.
                Please use our <a href="/careers" style={{color: '#1a6e5c'}}>careers page</a> or email hr@emirateshomecare.ae.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
