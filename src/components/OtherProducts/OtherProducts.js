import React, { useEffect, useRef } from 'react';
import { FiFileText, FiTablet, FiEdit, FiCloud, FiCode, FiGlobe, FiVolume2, FiMonitor, FiLayout } from 'react-icons/fi';
import './OtherProducts.css';

const products = [
  { icon: <FiFileText />, title: 'Scanners', desc: 'High-speed document scanners for digitizing records and archiving.' },
  { icon: <FiTablet />, title: 'Tablet Computers', desc: 'Business tablets for field teams, presentations and mobile workflows.' },
  { icon: <FiEdit />, title: 'Digital Pen Tablets', desc: 'Graphics tablets for creative professionals and digital signatures.' },
  { icon: <FiCloud />, title: 'Cloud Computing', desc: 'Scalable cloud services with managed deployment and monitoring.' },
  { icon: <FiCode />, title: 'Software Solutions', desc: 'Licensed enterprise software including OS, ERP and productivity suites.' },
  { icon: <FiGlobe />, title: 'Internet Leased Lines', desc: 'Dedicated high-speed internet connectivity with SLA guarantees.' },
  { icon: <FiVolume2 />, title: 'Public Address System', desc: 'Professional PA systems for offices, malls and public spaces.' },
  { icon: <FiMonitor />, title: 'Interactive Panels', desc: 'Touch-enabled interactive flat panels for meetings and classrooms.' },
  { icon: <FiLayout />, title: 'Smart Boards', desc: 'Digital whiteboards with wireless collaboration and annotation.' },
];

const OtherProducts = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="other-products-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">More Solutions</span>
          <h2 className="section-title">OTHER <span>PRODUCTS</span></h2>
          <p className="section-subtitle">Expand your IT ecosystem with our extensive range of technology products.</p>
        </div>
        <div className="op-grid">
          {products.map((p, i) => (
            <div key={p.title} className="op-card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
              <div className="op-icon">{p.icon}</div>
              <h3 className="op-title">{p.title}</h3>
              <p className="op-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OtherProducts;
