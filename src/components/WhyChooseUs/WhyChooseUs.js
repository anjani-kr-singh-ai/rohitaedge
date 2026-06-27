import React, { useEffect, useRef, useState } from 'react';
import { FiAward, FiClock, FiBriefcase, FiDollarSign, FiZap, FiTruck, FiUsers, FiLock } from 'react-icons/fi';
import './WhyChooseUs.css';

const reasons = [
  { icon: <FiAward />, title: 'Certified Engineers', desc: 'Our team holds industry certifications from Cisco, HP, Dell and more.' },
  { icon: <FiClock />, title: '24/7 Support', desc: 'Round-the-clock technical support and emergency response services.' },
  { icon: <FiBriefcase />, title: 'Enterprise Solutions', desc: 'Scalable infrastructure designed for businesses of all sizes.' },
  { icon: <FiDollarSign />, title: 'Affordable Pricing', desc: 'Competitive pricing with flexible payment plans and AMC contracts.' },
  { icon: <FiZap />, title: 'Latest Technology', desc: 'We partner with leading global technology brands and manufacturers.' },
  { icon: <FiTruck />, title: 'Fast Installation', desc: 'Swift deployment with minimal downtime and professional execution.' },
  { icon: <FiUsers />, title: 'Trusted Clients', desc: '100+ satisfied enterprises across Telangana trust us for IT needs.' },
  { icon: <FiLock />, title: 'Secure Infrastructure', desc: 'End-to-end security architecture protecting your business data.' },
];

const counters = [
  { value: 500, suffix: '+', label: 'Projects' },
  { value: 100, suffix: '+', label: 'Clients' },
  { value: 20, suffix: '+', label: 'Solutions' },
  { value: 99, suffix: '%', label: 'Customer Satisfaction' },
];

const Counter = ({ value, suffix, label, active }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const duration = 1800;
    const step = Math.ceil(value / (duration / 16));
    let current = 0;
    const t = setInterval(() => {
      current = Math.min(current + step, value);
      setCount(current);
      if (current >= value) clearInterval(t);
    }, 16);
    return () => clearInterval(t);
  }, [active, value]);
  return (
    <div className="counter-item">
      <div className="counter-num">{count}<span>{suffix}</span></div>
      <div className="counter-label">{label}</div>
    </div>
  );
};

const WhyChooseUs = () => {
  const sectionRef = useRef(null);
  const [counterActive, setCounterActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('visible');
            if (e.target.classList.contains('counters-wrap')) setCounterActive(true);
          }
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
          <h2 className="section-title">WHY CHOOSE <span>RH NETWORK SOLUTIONS</span></h2>
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
            {counters.map((c) => (
              <Counter key={c.label} {...c} active={counterActive} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
