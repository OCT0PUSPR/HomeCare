import React from 'react';
import PageHeader from '../components/PageHeader';

const PrivacyPolicy = () => {
  return (
    <>
      <PageHeader
        title="Privacy Policy"
        breadcrumbItems={[{ label: 'Privacy Policy' }]}
      />
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Introduction</h2>
            <p>
              This privacy policy applies to emirateshomecare.ae and governs the privacy of
              its users who choose to use it. The policy sets out the different areas where
              user privacy is concerned and outlines the obligations and requirements of the
              users, the website and website owners. We respect your privacy and are committed
              to protecting the personally identifiable information you may provide through the website.
            </p>

            <h2>Information We Collect</h2>
            <p>
              We collect anonymous usage data including browser type and visit duration. We may
              also collect personal information including names, addresses, phone numbers, and
              email addresses through feedback, registration, or service bookings.
            </p>

            <h2>How We Use Your Information</h2>
            <p>
              The company uses collected data to process service requests, notify customers
              about appointment status and offers, and conduct statistical analysis to improve
              our services. We share delivery information with third parties only for service
              fulfillment purposes.
            </p>

            <h2>Data Security</h2>
            <p>
              All credit/debit card details and personally identifiable information will not be
              stored, sold, shared, rented, or leased to any third parties. We implement security
              measures to protect your information, though we cannot guarantee complete protection
              against all potential threats.
            </p>

            <h2>Cookies</h2>
            <p>
              The site uses cookies to track repeat visits and enhance user experience. These
              cookies collect no additional personal user data beyond basic usage patterns.
            </p>

            <h2>Protection of Minors</h2>
            <p>
              This website is not intended for users under 18 years of age, and we do not
              knowingly collect personal information from minors.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We reserve the right to update this privacy policy at any time. Changes take
              effect upon posting. Users are encouraged to review this page periodically
              for updates.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy, please contact us at{' '}
              <a href="mailto:info@emirateshomecare.ae" style={{color: '#1a6e5c'}}>info@emirateshomecare.ae</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicy;
