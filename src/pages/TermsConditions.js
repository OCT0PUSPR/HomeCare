import React from 'react';
import PageHeader from '../components/PageHeader';

const TermsConditions = () => {
  return (
    <>
      <PageHeader
        title="Terms & Conditions"
        breadcrumbItems={[{ label: 'Terms & Conditions' }]}
      />
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing this website, you accept these terms and conditions in full. The
              company reserves the right to modify these terms at any time with immediate effect.
              Continued use of the website constitutes acceptance of any modified terms.
            </p>

            <h2>Limited License</h2>
            <p>
              Users receive a limited, non-exclusive, revocable, and non-transferable license
              to access the site for personal, non-commercial purposes. Users may not copy,
              modify, distribute, or create derivative works from any content on this site
              without express written permission.
            </p>

            <h2>Emergency Disclaimer</h2>
            <p style={{background: '#fff3cd', padding: '15px', borderRadius: '8px', fontWeight: '600'}}>
              This service is NOT to be used in an emergency. For urgent medical situations,
              please call 998 immediately.
            </p>

            <h2>Jurisdiction</h2>
            <p>
              This website operates under UAE jurisdiction. UAE law governs all disputes
              arising from the use of this website and our services.
            </p>

            <h2>Payment Methods</h2>
            <p>
              We accept credit card payments, bank transfers, and cash options for our services.
              Multi-currency transactions are handled with pricing consistency across currencies.
            </p>

            <h2>Age Requirements</h2>
            <p>
              Users must be 18 years or older to register for an account and use our services.
            </p>

            <h2>User Responsibilities</h2>
            <p>
              Users must maintain account confidentiality, restrict commercial use of the website,
              and comply with all intellectual property protections. Users are responsible for
              all activity that occurs under their accounts.
            </p>

            <h2>Third-Party Content</h2>
            <p>
              The company disclaims responsibility for external links and third-party content.
              Links to external websites are provided for convenience only and do not constitute
              endorsement.
            </p>

            <h2>Contact</h2>
            <p>
              For questions regarding these terms, please contact us at{' '}
              <a href="mailto:info@emirateshomecare.ae" style={{color: 'var(--primary)'}}>info@emirateshomecare.ae</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditions;
