import React, { useEffect, useRef } from 'react';
import { FiAward, FiClock, FiBriefcase, FiDollarSign, FiZap, FiTruck, FiHeart, FiLock, FiCheckCircle, FiShield, FiTag, FiHeadphones } from 'react-icons/fi';
import './WhyChooseUs.css';

const reasons = [
  { icon: <FiAward />, title: 'Certified Engineers', desc: 'Our team holds industry certifications from Cisco, HP, Dell and more.' },
  { icon: <FiClock />, title: '24/7 Support', desc: 'Round-the-clock technical support and emergency response services.' },
  { icon: <FiBriefcase />, title: 'Enterprise Solutions', desc: 'Scalable infrastructure designed for businesses of all sizes.' },
  { icon: <FiDollarSign />, title: 'Affordable Pricing', desc: 'Competitive pricing with flexible payment plans and AMC contracts.' },
  { icon: <FiZap />, title: 'Latest Technology', desc: 'We partner with leading global technology brands and manufacturers.' },
  { icon: <FiTruck />, title: 'Fast Installation', desc: 'Swift deployment with minimal downtime and professional execution.' },
  { icon: <FiHeart />, title: 'Client-First Approach', desc: 'Every engagement is built on transparency, honesty and genuine care for your business.' },
  { icon: <FiLock />, title: 'Secure Infrastructure', desc: 'End-to-end security architecture protecting your business data.' },
];

const badges = [
  { icon: <FiCheckCircle />, label: 'Genuine Products' },
  { icon: <FiShield />, label: 'Certified Engineers' },
  { icon: <FiTag />, label: 'Transparent Pricing' },
  { icon: <FiHeadphones />, label: 'Dedicated Support' },
];

const WhyChooseUs = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.2 }
    );
    const els = sectionRef.current?.querySelectorAll('.reveal, .counters-wrap');
    els?.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="why-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">Our Advantage</span>
          <h2 className="section-title">WHY CHOOSE <span>ROHITHA EDGE</span></h2>
          <p className="section-subtitle">Delivering excellence through expertise, commitment and cutting-edge technology.</p>
        </div>

        <div className="why-grid">
          {reasons.map((r, i) => (
            <div key={r.title} className="why-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="why-icon">{r.icon}</div>
              <div className="why-content">
                <h3 className="why-title">{r.title}</h3>
                <p className="why-desc">{r.desc}</p>
              </div>
              <div className="why-number">0{i + 1}</div>
            </div>
          ))}
        </div>

        <div className="counters-wrap">
          <div className="counters-inner">
            {badges.map((b) => (
              <div key={b.label} className="counter-item">
                <div className="counter-icon">{b.icon}</div>
                <div className="counter-label">{b.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
