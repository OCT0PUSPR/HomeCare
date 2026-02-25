import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ShieldCheck, Award, HeartHandshake, Lightbulb, Users, DollarSign,
  Clock, UserCheck, Star, ArrowRight, Sparkles
} from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } }
};

const services = [
  { path: '/services/newborn-mother-care', title: 'Newborn, Mother Care & Child Care', desc: 'Exceptional care from nurses who speak Russian, English, French, Spanish, and Arabic.', image: '/images/services/newborn-care.jpg', color: '#0056b3' },
  { path: '/services/senior-care', title: 'Senior Care', desc: 'Personalized 24/7 care for elders across the UAE with certified healthcare professionals.', image: '/images/services/senior-care.jpg', color: '#0056b3' },
  { path: '/services/lab-collection', title: 'Lab Collection at Home', desc: 'Skip the wait! Professional nurses collect samples at your doorstep with fast results.', image: '/images/services/lab-collection.jpg', color: '#0056b3' },
  { path: '/services/physiotherapy', title: 'Physiotherapy', desc: 'Regain strength and mobility with personalized treatment plans delivered at home.', image: '/images/services/physiotherapy.jpg', color: '#0056b3' },
  { path: '/services/speech-therapy', title: 'Speech Therapy', desc: 'Personalized support to improve communication skills for children and adults.', image: '/images/services/speech-therapy.jpg', color: '#0056b3' },
  { path: '/services/doctor-on-call', title: 'Doctor on Call', desc: 'Professional medical consultations with virtual and in-home visit options, available 24/7.', image: '/images/services/doctor-on-call.jpg', color: '#0056b3' },
];

const features = [
  { icon: HeartHandshake, color: '#0056b3', title: 'Patient Centric Care', desc: 'Your well-being is at the center of everything we do.' },
  { icon: Lightbulb, color: '#0056b3', title: 'Innovative Approach', desc: 'Using modern methods to deliver the best care outcomes.' },
  { icon: Users, color: '#0056b3', title: 'Personalised Care', desc: 'Tailored healthcare plans for every individual need.' },
  { icon: DollarSign, color: '#0056b3', title: 'Cost-Effective', desc: 'Quality healthcare that respects your budget.' },
  { icon: UserCheck, color: '#0056b3', title: 'Professional Experts', desc: 'Certified, experienced healthcare professionals on our team.' },
  { icon: Clock, color: '#0056b3', title: 'By Your Side 24/7', desc: 'Round-the-clock availability for all your care needs.' },
];

const Home = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <img
          src="/images/hero/hero-home.jpg"
          alt=""
          className="hero-bg-image"
          aria-hidden="true"
        />
        <div className="container">
          <motion.div
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={stagger}
          >
            <motion.div className="hero-badge" variants={fadeInUp}>
              <Sparkles size={14} />
              Trusted Home Healthcare Since 2010
            </motion.div>
            <motion.h1 variants={fadeInUp}>Emirates Home Care</motion.h1>
            <motion.p variants={fadeInUp}>
              Supporting our community with high-quality personalized home care
              from childhood to old age.
            </motion.p>
            <motion.div className="hero-buttons" variants={fadeInUp}>
              <Link to="/contact" className="btn btn-primary">
                Contact Us <ArrowRight size={16} />
              </Link>
              <a href="tel:+9718006877464" className="btn btn-outline">Call Now</a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2>Our Services</h2>
            <p>We provide premium, personalized healthcare services for your loved ones at the convenience of your home.</p>
          </motion.div>
          <motion.div
            className="services-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {services.map((service, index) => {
              return (
                <motion.div key={service.path} variants={fadeInUp} custom={index}>
                  <Link to={service.path} className="service-card">
                    <div className="service-card-image">
                      <img src={service.image} alt={service.title} />
                    </div>
                    <div className="service-card-content">
                      <h3>{service.title}</h3>
                      <p>{service.desc}</p>
                      <span className="btn btn-green btn-sm">Book Now <ArrowRight size={14} /></span>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section section-light">
        <div className="container">
          <div className="about-preview">
            <motion.div
              className="about-preview-image"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/images/about/our-story.jpg" alt="Experts in Caregiving" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: 'var(--radius-lg, 16px)' }} />
            </motion.div>
            <motion.div
              className="about-preview-content"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
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
              <Link to="/about" className="btn btn-green">Discover More <ArrowRight size={16} /></Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Client Logos */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Trusted By Leading Organizations</h2>
          </motion.div>
          <motion.div
            className="client-logos"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {['Armani Hotel Dubai', 'Atlantis The Palm', 'Sofitel', 'Dubai British School', 'GEMS Education', 'Emirates NBD', 'Mashreq Bank', 'Amazon', 'FedEx'].map((name) => (
              <div className="client-logo" key={name}>{name}</div>
            ))}
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
              { num: '100+', label: 'Professionals' },
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

      {/* Why Choose Us - Pillars */}
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
              <p>Licensed healthcare professionals dedicated to providing excellence in care with DHA certifications.</p>
            </motion.div>
            <motion.div className="pillar-card" variants={fadeInUp}>
              <div className="pillar-icon"><Award size={44} strokeWidth={1.5} /></div>
              <h3>Award Winning</h3>
              <p>Gold winner of Childcare Provider of the Year by Mother Baby & Child Magazine, 2021.</p>
            </motion.div>
            <motion.div className="pillar-card" variants={fadeInUp}>
              <div className="pillar-icon"><HeartHandshake size={44} strokeWidth={1.5} /></div>
              <h3>Custom Made Care</h3>
              <p>Personalized care plans tailored to your unique needs, available hourly, daily, or weekly.</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Emirates Home Care</h2>
          </motion.div>
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

      {/* News & Events */}
      <section className="section section-light">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>News & Events</h2>
          </motion.div>
          <motion.div
            className="news-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { image: '/images/events/event-christmas.jpg', date: 'November 2022', title: 'Christmas Festive Market', desc: 'Emirates Home Care participated in the annual Christmas Festive Market event in Dubai.' },
              { image: '/images/events/event-polo.jpg', date: 'October 2022', title: 'Dubai Polo & Equestrian Club', desc: 'Providing healthcare services at prestigious Dubai Polo & Equestrian Club events.' },
              { image: '/images/events/event-breakfast.jpg', date: 'October 2022', title: 'British Mums Breakfast Event', desc: 'Connecting with the community at the British Mums breakfast networking event.' },
            ].map((item) => {
              return (
                <motion.div className="news-card" key={item.title} variants={fadeInUp}>
                  <div className="news-card-image">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="news-card-content">
                    <div className="news-card-date">{item.date}</div>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>What Our Clients Say</h2>
          </motion.div>
          <motion.div
            className="testimonials-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {[
              { text: '"The postpartum care I received was exceptional. The nurse was knowledgeable, supportive, and helped me navigate the challenges of new motherhood with confidence."', name: 'Nicole', location: 'Palm Jumeirah', initial: 'N' },
              { text: '"From prenatal to newborn support, the team was incredible. Their professional and caring approach made all the difference during a very important time."', name: 'Laura', location: 'Emirates Hills', initial: 'L' },
              { text: '"We had a wonderful four-week experience with their childcare service. The nurse was attentive, professional, and became part of our family."', name: 'Gayle', location: 'Dubai Marina', initial: 'G' },
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
                  <div>
                    <h4>{t.name}</h4>
                    <span>{t.location}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
