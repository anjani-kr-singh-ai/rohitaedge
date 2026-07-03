import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHospital, FaUniversity, FaLaptop, FaBuilding, FaGraduationCap, FaIndustry } from 'react-icons/fa';
import PageHero from '../../components/PageHero/PageHero';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import './ClientsPage.css';

const brandList = [
  { name: 'Canon', category: 'Photocopiers', initial: 'CN', color: '#BF0000' },
  { name: 'HP', category: 'Laptops & Printers', initial: 'HP', color: '#0096D6' },
  { name: 'Dell', category: 'Laptops & Desktops', initial: 'DL', color: '#007DB8' },
  { name: 'Lenovo', category: 'Laptops & Desktops', initial: 'LN', color: '#E2231A' },
  { name: 'Kyocera', category: 'Photocopiers', initial: 'KY', color: '#DA0C81' },
  { name: 'Konica Minolta', category: 'Photocopiers', initial: 'KM', color: '#111111' },
  { name: 'Epson', category: 'Printers & Projectors', initial: 'EP', color: '#003399' },
  { name: 'Hikvision', category: 'CCTV & Surveillance', initial: 'HK', color: '#D0021B' },
  { name: 'Dahua', category: 'CCTV & Surveillance', initial: 'DH', color: '#004C97' },
  { name: 'CP Plus', category: 'CCTV & Surveillance', initial: 'CP', color: '#F7941E' },
  { name: 'Axis', category: 'CCTV & Surveillance', initial: 'AX', color: '#1a1a1a' },
  { name: 'ZKTeco', category: 'Biometric Devices', initial: 'ZK', color: '#00539B' },
  { name: 'BenQ', category: 'Projectors', initial: 'BQ', color: '#8C1D82' },
  { name: 'Optoma', category: 'Projectors', initial: 'OP', color: '#E4002B' },
  { name: 'Samsung', category: 'LED Display Panels', initial: 'SM', color: '#1428A0' },
  { name: 'LG', category: 'LED Display Panels', initial: 'LG', color: '#A50034' },
  { name: 'Akuvox', category: 'IP Intercom', initial: 'AK', color: '#00A0E3' },
  { name: 'Ricoh', category: 'Photocopiers', initial: 'RC', color: '#E60012' },
];

const industries = [
  { icon: <FaHospital />, name: 'Healthcare', desc: 'Reliable uptime for critical care environments' },
  { icon: <FaUniversity />, name: 'Banking & Finance', desc: 'Secure, compliance-ready infrastructure' },
  { icon: <FaLaptop />, name: 'IT & Software', desc: 'Scalable enterprise-grade setups' },
  { icon: <FaBuilding />, name: 'Government', desc: 'Dependable project execution' },
  { icon: <FaGraduationCap />, name: 'Education', desc: 'Smart classroom technology' },
  { icon: <FaIndustry />, name: 'Manufacturing', desc: 'Rugged, industrial-grade systems' },
];

const ClientsPage = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <PageHero
        title="Brands We Deal In"
        subtitle="Genuine, warranty-backed technology products from the world's most trusted brands — installed and supported by our certified engineers."
        breadcrumbs={[{ name: 'Brands' }]}
      />

      <section className="clients-page-section" ref={sectionRef}>
        <div className="container">

          <div className="section-header reveal">
            <span className="section-tag">Genuine & Certified</span>
            <h2 className="section-title">BRANDS WE <span>DEAL IN</span></h2>
            <p className="section-subtitle">We deal exclusively in original, warranty-backed products — no grey market, no compromises.</p>
          </div>

          <div className="clients-logo-grid">
            {brandList.map((c, i) => (
              <div key={c.name} className="client-card reveal" style={{ transitionDelay: `${i * 0.04}s` }}>
                <div className="client-card-icon" style={{ background: c.color }}>{c.initial}</div>
                <div className="client-card-name">{c.name}</div>
                <div className="client-card-sector">{c.category}</div>
              </div>
            ))}
          </div>

          <div className="industries-section">
            <div className="section-header reveal">
              <span className="section-tag">Across Sectors</span>
              <h2 className="section-title">INDUSTRIES <span>WE SERVE</span></h2>
            </div>
            <div className="industries-grid">
              {industries.map((ind, i) => (
                <div key={ind.name} className="industry-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="industry-icon">{ind.icon}</div>
                  <h3 className="industry-name">{ind.name}</h3>
                  <div className="industry-count">{ind.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="success-section reveal">
            <div className="success-card">
              <h3 className="success-title">Partner With Us</h3>
              <p className="success-desc">Get genuine products, transparent pricing and dedicated after-sales support — tailored to your business needs, from a partner invested in getting it right.</p>
              <Link to="/contact" className="btn-primary">Request a Quote</Link>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
};

export default ClientsPage;
