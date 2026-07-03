import React, { useEffect, useRef } from 'react';
import { FiLayout } from 'react-icons/fi';
import './OtherProducts.css';

const products = [
  { image: '/scanner-small.jpg', title: 'Scanners', desc: 'High-speed document scanners for digitizing records and archiving.' },
  { image: '/tab-small.jpg', title: 'Tablet Computers', desc: 'Business tablets for field teams, presentations and mobile workflows.' },
  { image: '/pem-tablet-small.jpg', title: 'Digital Pen Tablets', desc: 'Graphics tablets for creative professionals and digital signatures.' },
  { image: '/cloud-computing-small.jpg', title: 'Cloud Computing', desc: 'Scalable cloud services with managed deployment and monitoring.' },
  { image: '/software-small.jpg', title: 'Software Solutions', desc: 'Licensed enterprise software including OS, ERP and productivity suites.' },
  { image: '/leaseline-small.jpg', title: 'Internet Leased Lines', desc: 'Dedicated high-speed internet connectivity with SLA guarantees.' },
  { image: '/public-address-small.jpg', title: 'Public Address System', desc: 'Professional PA systems for offices, malls and public spaces.' },
  { image: '/interactive-small.jpg', title: 'Interactive Panels', desc: 'Touch-enabled interactive flat panels for meetings and classrooms.' },
  { image: '/ups-Inverters-small.jpg', title: 'UPS & Inverters', desc: 'Reliable power backup systems to keep critical IT equipment running during outages.' },
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
              {p.image ? (
                <div className="op-image"><img src={p.image} alt={p.title} loading="lazy" /></div>
              ) : (
                <div className="op-icon">{p.icon}</div>
              )}
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
