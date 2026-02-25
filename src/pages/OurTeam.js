import React from 'react';
import { motion } from 'framer-motion';
import PageHeader from '../components/PageHeader';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

const stagger = { visible: { transition: { staggerChildren: 0.06 } } };

const teamMembers = [
  { name: 'Alka Uttamchandani', role: 'General Manager', image: '/images/team/team-1.jpg', details: 'Leading Emirates Home Care with a vision for excellence in home healthcare services.', languages: '' },
  { name: 'Sheida Bavandi', role: 'Licensed Speech Pathologist', image: '/images/team/team-2.jpg', details: 'Specializations: Speech & Language Therapy', languages: 'Languages: Persian, English' },
  { name: 'Kavita Bosmia', role: 'Licensed Physiotherapist', image: '/images/team/team-3.jpg', details: 'Specializations: Adult & Pediatric Physiotherapy', languages: 'Languages: Hindi, English' },
  { name: 'Hannah Jane', role: 'Licensed Nurse', image: '/images/team/team-4.jpg', details: 'Specializations: Child care, Senior care, Clinical care', languages: 'Languages: Tagalog, English' },
  { name: 'Ann Leary', role: 'Licensed Nurse', image: '/images/team/team-5.jpg', details: 'Specializations: Newborn care, Child care, Senior care, Clinical care', languages: 'Languages: Tagalog, English' },
  { name: 'Archi Shah', role: 'Physiotherapist', image: '/images/team/team-6.jpg', details: 'Specializations: Adult & Pediatric physiotherapy', languages: 'Languages: English, Hindi, Gujarati' },
  { name: 'Noel Wesonga', role: 'Newborn Care Specialist', image: '/images/team/team-7.jpg', details: 'Specializations: Newborn & infant care', languages: 'Languages: Swahili, English' },
];

const OurTeam = () => {
  return (
    <>
      <PageHeader
        title="Our Team"
        subtitle="Dedicated professionals committed to your well-being"
        breadcrumbItems={[{ label: 'About Us', link: '/about' }, { label: 'Our Team' }]}
      />

      <section className="section">
        <div className="container">
          <motion.div
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Meet Our Healthcare Experts</h2>
            <p>All staff members hold Bachelor of Science degrees in Nursing with Dubai Health Authority licensure and maintain basic life support and first aid certifications.</p>
          </motion.div>
          <motion.div
            className="team-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {teamMembers.map((member) => (
              <motion.div className="team-card" key={member.name} variants={fadeInUp}>
                <div className="team-card-image">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="details">
                    {member.details}
                    {member.languages && <><br/>{member.languages}</>}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Quote */}
      <section className="section section-green" style={{ textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p style={{ fontSize: '20px', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8' }}>
              "We believe that caregiving is more than just a job, it is rather a sacred
              relationship we create with the families we work with."
            </p>
            <p style={{ marginTop: '20px', fontWeight: '600' }}>- Alka Uttamchandani, General Manager</p>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
