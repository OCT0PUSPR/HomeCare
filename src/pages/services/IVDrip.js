import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, Sun, Scissors, Shield, Leaf, Scale, Pill, Brain } from 'lucide-react';
import PageHeader from '../../components/PageHeader';
import ServiceSidebar from '../../components/ServiceSidebar';

const ivDrips = [
  { name: 'Anti-Aging Vitamins IV Drip', Icon: Sparkles, color: '#0056b3', desc: 'Antioxidants and minerals to reduce fine lines, boost collagen and skin elasticity.' },
  { name: 'Skin Glowing IV Drip', Icon: Sun, color: '#0056b3', desc: 'Brighten complexion, even out skin tone, and reduce pigmentation.' },
  { name: 'Anti Hair Loss IV Drip', Icon: Scissors, color: '#0056b3', desc: 'Essential vitamins and amino acids to strengthen hair follicles.' },
  { name: 'Immune Booster IV Drip', Icon: Shield, color: '#0056b3', desc: 'Vitamin C, Zinc, Magnesium, and Vitamin B1 to strengthen immune defenses.' },
  { name: 'Detox IV Drip', Icon: Leaf, color: '#0056b3', desc: 'Supports liver function and eliminates toxins using vitamins and antioxidants.' },
  { name: 'Weight Loss IV Drip', Icon: Scale, color: '#0056b3', desc: 'Aids fat metabolism and energy enhancement for weight management.' },
  { name: 'Multivitamins IV Drip', Icon: Pill, color: '#0056b3', desc: 'Comprehensive nutritional support for overall wellness and hormonal balance.' },
  { name: 'Anti-Stress IV Drip', Icon: Brain, color: '#0056b3', desc: 'Reduces oxidative stress while enhancing strength, stamina, and performance.' },
];

const IVDrip = () => {
  return (
    <>
      <PageHeader
        title="IV Drip at Home"
        subtitle="Enhanced wellness, hydration, and targeted health benefits at your doorstep"
        breadcrumbItems={[{ label: 'Services', link: '/services' }, { label: 'IV Drip at Home' }]}
      />
      <section className="section">
        <div className="container">
          <div className="service-detail">
            <div className="service-detail-main">
              <h2>Professional IV Drip Therapy at Home</h2>
              <p>
                Emirates Home Care provides at-home IV drip therapy delivered by certified
                nurses. Our service brings enhanced wellness, hydration, and targeted health
                benefits directly to your home or office.
              </p>

              <h2>Available IV Drip Types</h2>
              <div className="iv-drip-grid">
                {ivDrips.map((drip, i) => (
                  <div className="iv-drip-card" key={i}>
                    <div className="iv-drip-icon">
                      <drip.Icon size={32} color={drip.color} strokeWidth={1.5} />
                    </div>
                    <h4>{drip.name}</h4>
                    <p>{drip.desc}</p>
                  </div>
                ))}
              </div>

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

export default IVDrip;
