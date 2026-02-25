import React from 'react';
import PageHeader from '../components/PageHeader';

const CopyrightPolicy = () => {
  return (
    <>
      <PageHeader
        title="Copyright Policy"
        breadcrumbItems={[{ label: 'Copyright Policy' }]}
      />
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Intellectual Property</h2>
            <p>
              All online materials on this website are the intellectual property of Emirates
              Home Care and are protected by the UAE's international intellectual property laws.
              Users may not copy, redistribute, or create derivative works without written consent,
              except as permitted by the terms of use.
            </p>

            <h2>User-Submitted Content</h2>
            <p>
              When users submit materials to the platform, they grant the company an irrevocable,
              worldwide right to use and utilize that content for business purposes.
            </p>

            <h2>Liability Limitations</h2>
            <p>
              The company provides content on an "as is" basis and disclaims warranties regarding
              accuracy or reliability. Liability for damages arising from site use is limited to
              the extent permitted by UAE law.
            </p>

            <h2>Indemnification</h2>
            <p>
              Users agree to protect and hold harmless the company from third-party claims related
              to their use of the site or content submissions.
            </p>

            <h2>Advertisements</h2>
            <p>
              The company is not liable for advertisements or sponsorships appearing on the site.
              These are the responsibility of the respective advertisers.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of this policy is found invalid by a court of competent jurisdiction,
              the remaining terms continue in full force and effect.
            </p>

            <h2>Contact</h2>
            <p>
              For copyright-related inquiries, contact{' '}
              <a href="mailto:info@emirateshomecare.ae" style={{color: '#1a6e5c'}}>info@emirateshomecare.ae</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CopyrightPolicy;
