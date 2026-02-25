import React from 'react';
import PageHeader from '../components/PageHeader';

const teamMembers = [
  {
    name: 'Alka Uttamchandani',
    role: 'General Manager',
    icon: '&#128105;&#8205;&#128188;',
    details: 'Leading Emirates Home Care with a vision for excellence in home healthcare services.',
    languages: ''
  },
  {
    name: 'Sheida Bavandi',
    role: 'Licensed Speech Pathologist',
    icon: '&#128105;&#8205;&#9877;&#65039;',
    details: 'Specializations: Speech & Language Therapy',
    languages: 'Languages: Persian, English'
  },
  {
    name: 'Kavita Bosmia',
    role: 'Licensed Physiotherapist',
    icon: '&#128105;&#8205;&#9877;&#65039;',
    details: 'Specializations: Adult & Pediatric Physiotherapy',
    languages: 'Languages: Hindi, English'
  },
  {
    name: 'Hannah Jane',
    role: 'Licensed Nurse',
    icon: '&#128105;&#8205;&#9877;&#65039;',
    details: 'Specializations: Child care, Senior care, Clinical care',
    languages: 'Languages: Tagalog, English'
  },
  {
    name: 'Ann Leary',
    role: 'Licensed Nurse',
    icon: '&#128105;&#8205;&#9877;&#65039;',
    details: 'Specializations: Newborn care, Child care, Senior care, Clinical care',
    languages: 'Languages: Tagalog, English'
  },
  {
    name: 'Archi Shah',
    role: 'Physiotherapist',
    icon: '&#128104;&#8205;&#9877;&#65039;',
    details: 'Specializations: Adult & Pediatric physiotherapy',
    languages: 'Languages: English, Hindi, Gujarati'
  },
  {
    name: 'Noel Wesonga',
    role: 'Newborn Care Specialist',
    icon: '&#128104;&#8205;&#9877;&#65039;',
    details: 'Specializations: Newborn & infant care',
    languages: 'Languages: Swahili, English'
  },
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
          <div className="section-title">
            <h2>Meet Our Healthcare Experts</h2>
            <p>All staff members hold Bachelor of Science degrees in Nursing with Dubai Health Authority licensure and maintain basic life support and first aid certifications.</p>
          </div>
          <div className="team-grid">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index}>
                <div className="team-card-image" dangerouslySetInnerHTML={{__html: member.icon}} />
                <div className="team-card-content">
                  <h3>{member.name}</h3>
                  <p className="role">{member.role}</p>
                  <p className="details">
                    {member.details}
                    {member.languages && <><br/>{member.languages}</>}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="section section-green" style={{textAlign: 'center'}}>
        <div className="container">
          <p style={{fontSize: '20px', fontStyle: 'italic', maxWidth: '700px', margin: '0 auto', lineHeight: '1.8'}}>
            "We believe that caregiving is more than just a job, it is rather a sacred
            relationship we create with the families we work with."
          </p>
          <p style={{marginTop: '20px', fontWeight: 'bold'}}>- Alka Uttamchandani, General Manager</p>
        </div>
      </section>
    </>
  );
};

export default OurTeam;
