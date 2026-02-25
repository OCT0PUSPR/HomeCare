import React from 'react';
import { Link } from 'react-router-dom';
import PageHeader from '../../components/PageHeader';
import ServiceSidebar from '../../components/ServiceSidebar';

const packages = [
  { name: 'Basic Wellness Panel', tests: '19 tests', desc: 'Kidney/liver function, cholesterol, blood sugar screening.' },
  { name: 'Standard Wellness Panel', tests: '46 tests', desc: 'CBC, kidney/liver function, lipid profile, and 43 additional tests.' },
  { name: 'Executive Wellness for Men', tests: '57 tests', desc: 'Comprehensive men\'s health screening panel.' },
  { name: 'Wellness Panel for Women', tests: '57 tests', desc: 'Comprehensive women\'s health screening panel.' },
  { name: 'Diabetes Screening', tests: '28 tests', desc: 'HbA1c, fasting glucose, microalbumin, and more.' },
  { name: 'Weight Loss Panel', tests: '30 tests', desc: 'Thyroid, reproductive/stress hormones, vitamin D, liver function.' },
  { name: 'Food Intolerance Test', tests: '200+ parameters', desc: 'Comprehensive food sensitivity and intolerance analysis.' },
  { name: 'Vitamin Profile', tests: '9 tests', desc: 'Vitamins A, B1, B2, D, and other essential vitamins.' },
  { name: 'STD Panel', tests: '17+ tests', desc: 'Comprehensive sexually transmitted disease screening.' },
  { name: 'Female Hormones', tests: '6 tests', desc: 'Complete female hormone profile assessment.' },
  { name: 'Heavy Metal Testing', tests: '13 tests', desc: 'Screening for heavy metal exposure and toxicity.' },
  { name: 'Cancer Markers', tests: 'Varies', desc: 'Separate panels available for men and women.' },
];

const LabCollection = () => {
  return (
    <>
      <PageHeader
        title="Lab Collection at Home"
        subtitle="Skip the wait! Professional sample collection at your doorstep"
        breadcrumbItems={[{ label: 'Services', link: '/services' }, { label: 'Lab Collection at Home' }]}
      />
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <h2>At-Home Lab Collection Services</h2>
              <p>
                Emirates Home Care provides convenient at-home lab collection services in Dubai.
                Our professional nurses collect blood samples and other specimens safely at your
                doorstep, eliminating the need for clinic visits.
              </p>

              <h2>Available Test Packages</h2>
              <div className="lab-packages-grid">
                {packages.map((pkg, i) => (
                  <div className="lab-package-card" key={i}>
                    <h4>{pkg.name}</h4>
                    <div className="test-count">{pkg.tests}</div>
                    <p>{pkg.desc}</p>
                  </div>
                ))}
              </div>

              <h2>Specialized Testing</h2>
              <ul className="service-features-list">
                <li>NIPT Basic & Advanced Tests - Non-invasive prenatal testing with 99% accuracy</li>
                <li>Cardiac Health Panel - Lipid profile and creatine kinase markers</li>
                <li>Cancer markers panels for men and women</li>
              </ul>

              <div style={{marginTop: '30px'}}>
                <Link to="/book-appointment" className="btn btn-green">Book an Appointment</Link>
              </div>
            </div>
            <ServiceSidebar />
          </div>
        </div>
      </section>
    </>
  );
};

export default LabCollection;
