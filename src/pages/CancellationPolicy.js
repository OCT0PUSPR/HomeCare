import React from 'react';
import PageHeader from '../components/PageHeader';

const CancellationPolicy = () => {
  return (
    <>
      <PageHeader
        title="Cancellation & Refund Policy"
        breadcrumbItems={[{ label: 'Cancellation & Refund Policy' }]}
      />
      <section className="section">
        <div className="container">
          <div className="legal-content">
            <h2>Cancellation Requirements</h2>
            <p>
              Customers may cancel appointments at any time with 48 hours notice by calling
              800-6877464 or emailing info@emirateshomecare.ae. Failure to provide proper
              notice may result in forfeiture of refund eligibility.
            </p>

            <h2>Late Arrivals & Missed Appointments</h2>
            <p>
              If cancellation or missed appointment is due to customer fault, you will not be
              entitled to any refund or credit of the cost, and full payment remains due.
            </p>

            <h2>Disrupted Appointments</h2>
            <p>
              Should appointments be interrupted, the company may offer a credit or refund at
              its discretion, depending on fault determination. Customer-caused disruptions
              forfeit refund eligibility.
            </p>

            <h2>Credit or Refund Options</h2>
            <p>
              Emirates Home Care issues either a refund or a non-transferable account credit
              for missed or disrupted appointments when the disruption is not caused by the
              customer.
            </p>

            <h2>Contract Termination</h2>
            <p>
              The company may end service agreements for non-payment or other breaches of
              terms, and may charge reasonable compensation for any resulting costs or damages.
            </p>

            <h2>Complaints</h2>
            <p>
              For complaints or dispute resolution, customers should consult the FAQs section
              or contact{' '}
              <a href="mailto:info@emirateshomecare.ae" style={{color: '#1a6e5c'}}>info@emirateshomecare.ae</a>.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default CancellationPolicy;
