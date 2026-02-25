import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

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

      {/* Why Choose Us */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Emirates Home Care</h2>
            <p>Caregiving is a sacred relationship we create with the families we work with.</p>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">&#128149;</div>
              <div><h4>Patient Centric Care</h4><p>Your well-being is at the center of everything we do.</p></div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#128161;</div>
              <div><h4>Innovative Approach</h4><p>Modern methods for the best care outcomes.</p></div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#129309;</div>
              <div><h4>Personalised Care</h4><p>Tailored healthcare plans for every individual.</p></div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#128176;</div>
              <div><h4>Cost-Effective</h4><p>Quality healthcare that respects your budget.</p></div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#128100;</div>
              <div><h4>Professional Experts</h4><p>Certified, experienced healthcare professionals.</p></div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#128338;</div>
              <div><h4>By Your Side 24/7</h4><p>Round-the-clock availability for all care needs.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="form-container">
            <h2 style={{textAlign: 'center', color: '#2c3e50', marginBottom: '30px'}}>Request an Appointment</h2>
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
                  I agree to the <Link to="/terms-conditions" style={{color: '#1a6e5c'}}>Terms & Conditions</Link>.
                  An urgent fee will be applied to bookings within a five-hour window.
                  A transportation fee of AED 105 applies for services between 10 pm to 7 am.
                </label>
              </div>
              <button type="submit" className="btn btn-green" style={{width: '100%'}}>Book Appointment</button>
              <p className="form-note">
                * Any applications or job-related messages sent here will not be reviewed.
                Please use our <Link to="/careers" style={{color: '#1a6e5c'}}>careers page</Link>.
              </p>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default BookAppointment;
