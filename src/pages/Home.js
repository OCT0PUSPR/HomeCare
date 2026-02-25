import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">Trusted Home Healthcare Since 2010</div>
            <h1>Emirates Home Care</h1>
            <p>
              Supporting our community with high-quality personalized home care
              from childhood to old age.
            </p>
            <div className="hero-buttons">
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <a href="tel:+9718006877464" className="btn btn-outline">Call Now</a>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-image-placeholder">&#9764;</div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Our Services</h2>
            <p>We provide premium, personalized healthcare services for your loved ones at the convenience of your home.</p>
          </div>
          <div className="services-grid">
            <Link to="/services/newborn-mother-care" className="service-card">
              <div className="service-card-image" style={{background: 'linear-gradient(135deg, #e8a0bf, #d4789c)'}}>&#128118;</div>
              <div className="service-card-content">
                <h3>Newborn, Mother Care & Child Care</h3>
                <p>Exceptional care from nurses who speak Russian, English, French, Spanish, and Arabic.</p>
                <span className="btn btn-green btn-sm">Book Now</span>
              </div>
            </Link>

            <Link to="/services/senior-care" className="service-card">
              <div className="service-card-image" style={{background: 'linear-gradient(135deg, #7eb8c9, #5a9baf)'}}>&#128116;</div>
              <div className="service-card-content">
                <h3>Senior Care</h3>
                <p>Personalized 24/7 care for elders across the UAE with certified healthcare professionals.</p>
                <span className="btn btn-green btn-sm">Learn More</span>
              </div>
            </Link>

            <Link to="/services/lab-collection" className="service-card">
              <div className="service-card-image" style={{background: 'linear-gradient(135deg, #82c4a0, #5eaa7d)'}}>&#129656;</div>
              <div className="service-card-content">
                <h3>Lab Collection at Home</h3>
                <p>Skip the wait! Professional nurses collect samples at your doorstep with fast results.</p>
                <span className="btn btn-green btn-sm">Learn More</span>
              </div>
            </Link>

            <Link to="/services/physiotherapy" className="service-card">
              <div className="service-card-image" style={{background: 'linear-gradient(135deg, #a8c5e2, #7da8cf)'}}>&#128170;</div>
              <div className="service-card-content">
                <h3>Physiotherapy</h3>
                <p>Regain strength and mobility with personalized treatment plans delivered at home.</p>
                <span className="btn btn-green btn-sm">Learn More</span>
              </div>
            </Link>

            <Link to="/services/speech-therapy" className="service-card">
              <div className="service-card-image" style={{background: 'linear-gradient(135deg, #c5a8e2, #a87dcf)'}}>&#128483;</div>
              <div className="service-card-content">
                <h3>Speech Therapy</h3>
                <p>Personalized support to improve communication skills for children and adults.</p>
                <span className="btn btn-green btn-sm">Learn More</span>
              </div>
            </Link>

            <Link to="/services/doctor-on-call" className="service-card">
              <div className="service-card-image" style={{background: 'linear-gradient(135deg, #f0c47b, #d4a85a)'}}>&#128105;&#8205;&#9877;&#65039;</div>
              <div className="service-card-content">
                <h3>Doctor on Call</h3>
                <p>Professional medical consultations with virtual and in-home visit options, available 24/7.</p>
                <span className="btn btn-green btn-sm">Learn More</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section section-light">
        <div className="container">
          <div className="about-preview">
            <div className="about-preview-image">&#129657;</div>
            <div className="about-preview-content">
              <h2>Experts in Caregiving</h2>
              <p>
                Our home care services are tailored to your schedule, allowing you to receive
                professional healthcare in the comfort of your own home. Our staff is available
                around the clock to provide assistance whenever you need it.
              </p>
              <p>
                We believe that caregiving is more than just a job, it is rather a sacred
                relationship we create with the families we work with. Since 2010, we have
                been committed to enriching lives through personalized healthcare services.
              </p>
              <Link to="/about" className="btn btn-green">Discover More</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Trusted By Leading Organizations</h2>
          </div>
          <div className="client-logos">
            <div className="client-logo">Armani Hotel Dubai</div>
            <div className="client-logo">Atlantis The Palm</div>
            <div className="client-logo">Sofitel</div>
            <div className="client-logo">Dubai British School</div>
            <div className="client-logo">GEMS Education</div>
            <div className="client-logo">Emirates NBD</div>
            <div className="client-logo">Mashreq Bank</div>
            <div className="client-logo">Amazon</div>
            <div className="client-logo">FedEx</div>
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
              <p>Professionals</p>
            </div>
            <div className="stat-item">
              <h3>15+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us - Pillars */}
      <section className="section section-green">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Us</h2>
          </div>
          <div className="pillars-row">
            <div className="pillar-card">
              <div className="pillar-icon">&#127942;</div>
              <h3>Certified Team</h3>
              <p>Licensed healthcare professionals dedicated to providing excellence in care with DHA certifications.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">&#127941;</div>
              <h3>Award Winning</h3>
              <p>Gold winner of Childcare Provider of the Year by Mother Baby & Child Magazine, 2021.</p>
            </div>
            <div className="pillar-card">
              <div className="pillar-icon">&#10084;&#65039;</div>
              <h3>Custom Made Care</h3>
              <p>Personalized care plans tailored to your unique needs, available hourly, daily, or weekly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <div className="section-title">
            <h2>Why Choose Emirates Home Care</h2>
          </div>
          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon">&#128149;</div>
              <div>
                <h4>Patient Centric Care</h4>
                <p>Your well-being is at the center of everything we do.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#128161;</div>
              <div>
                <h4>Innovative Approach</h4>
                <p>Using modern methods to deliver the best care outcomes.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#129309;</div>
              <div>
                <h4>Personalised Care</h4>
                <p>Tailored healthcare plans for every individual need.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#128176;</div>
              <div>
                <h4>Cost-Effective</h4>
                <p>Quality healthcare that respects your budget.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#128100;</div>
              <div>
                <h4>Professional Experts</h4>
                <p>Certified, experienced healthcare professionals on our team.</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">&#128338;</div>
              <div>
                <h4>By Your Side 24/7</h4>
                <p>Round-the-clock availability for all your care needs.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News & Events */}
      <section className="section section-light">
        <div className="container">
          <div className="section-title">
            <h2>News & Events</h2>
          </div>
          <div className="news-grid">
            <div className="news-card">
              <div className="news-card-image">&#127876;</div>
              <div className="news-card-content">
                <div className="news-card-date">November 2022</div>
                <h3>Christmas Festive Market</h3>
                <p>Emirates Home Care participated in the annual Christmas Festive Market event in Dubai.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-card-image">&#127943;</div>
              <div className="news-card-content">
                <div className="news-card-date">October 2022</div>
                <h3>Dubai Polo & Equestrian Club</h3>
                <p>Providing healthcare services at prestigious Dubai Polo & Equestrian Club events.</p>
              </div>
            </div>
            <div className="news-card">
              <div className="news-card-image">&#9749;</div>
              <div className="news-card-content">
                <div className="news-card-date">October 2022</div>
                <h3>British Mums Breakfast Event</h3>
                <p>Connecting with the community at the British Mums breakfast networking event.</p>
              </div>
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
              <p>
                "The postpartum care I received was exceptional. The nurse was knowledgeable,
                supportive, and helped me navigate the challenges of new motherhood with confidence."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">N</div>
                <div>
                  <h4>Nicole</h4>
                  <span>Palm Jumeirah</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>
                "From prenatal to newborn support, the team was incredible. Their professional
                and caring approach made all the difference during a very important time."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">L</div>
                <div>
                  <h4>Laura</h4>
                  <span>Emirates Hills</span>
                </div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">&#9733;&#9733;&#9733;&#9733;&#9733;</div>
              <p>
                "We had a wonderful four-week experience with their childcare service.
                The nurse was attentive, professional, and became part of our family."
              </p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">G</div>
                <div>
                  <h4>Gayle</h4>
                  <span>Dubai Marina</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
