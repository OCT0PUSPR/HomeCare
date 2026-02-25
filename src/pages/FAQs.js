import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus } from 'lucide-react';
import PageHeader from '../components/PageHeader';

const faqData = [
  { q: 'What services does Emirates Home Care provide?', a: 'We provide a comprehensive range of home healthcare services including Newborn & Mother Care, Child Care, Senior Care, Clinical Care, Transitional Care, Palliative Care, Physiotherapy, Lymphatic Drainage Treatment, Speech Therapy, IV Drip at Home, Lab Collection at Home, and Doctor on Call services.' },
  { q: 'What areas do you cover in the UAE?', a: 'We cover over 50 areas across Dubai and the wider UAE. Our team of professionals can reach you wherever you are to provide quality home healthcare services.' },
  { q: 'Are your healthcare professionals certified?', a: 'Yes, all our healthcare professionals are DHA-licensed (Dubai Health Authority) and hold relevant qualifications including Bachelor of Science degrees in Nursing. They also maintain basic life support and first aid certifications.' },
  { q: 'How do I book an appointment?', a: 'You can book an appointment through our website using the Book an Appointment page, call us at 800-NURSING (687-7464), or reach us via WhatsApp. Our team is available 24/7 to assist you.' },
  { q: 'What are your operating hours?', a: 'Our services are available 24 hours a day, 7 days a week. We understand that healthcare needs can arise at any time, and our team is always ready to assist you.' },
  { q: 'Do you offer short-term and long-term care options?', a: 'Yes, we offer flexible care arrangements including hourly, daily, weekly, and shift-based schedules. Whether you need short-term assistance during recovery or long-term ongoing care, we can accommodate your needs.' },
  { q: 'What is your cancellation policy?', a: 'Customers may cancel appointments with 48 hours notice by calling 800-6877464 or emailing info@emirateshomecare.ae. Failure to provide proper notice may result in no refund. Please visit our Cancellation & Refund Policy page for full details.' },
  { q: 'Do you provide services for corporate clients?', a: 'Yes, we partner with leading organizations including luxury hotels, schools, banks, and corporations across the UAE. Visit our Become a Partner page to learn more about collaboration opportunities.' },
  { q: 'What languages do your staff speak?', a: 'Our team is multilingual and can provide care in English, Arabic, Tagalog, Hindi, Gujarati, Persian, Swahili, and other languages. We match patients with caregivers who speak their preferred language whenever possible.' },
  { q: 'How much do your services cost?', a: 'Our pricing varies depending on the type of service, duration, and specific care needs. Please contact us for a personalized quote. We strive to offer cost-effective solutions without compromising on quality.' },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <PageHeader
        title="FAQs"
        subtitle="What can we help you with today?"
        breadcrumbItems={[{ label: 'About Us', link: '/about' }, { label: 'FAQs' }]}
      />

      <section className="section">
        <div className="container">
          <motion.div
            className="faq-list"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {faqData.map((faq, index) => (
              <div className="faq-item" key={index}>
                <button
                  className={`faq-question ${openIndex === index ? 'open' : ''}`}
                  onClick={() => toggle(index)}
                >
                  {faq.q}
                  <span className="faq-toggle">
                    <Plus size={18} />
                  </span>
                </button>
                <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
                  <p>{faq.a}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
