import React, { useEffect, useRef } from 'react';
import {
  FaDatabase, FaServer, FaCopy, FaLaptop,
  FaPrint, FaTv, FaVideo, FaDesktop
} from 'react-icons/fa';
import './SalesServices.css';

const services = [
  {
    icon: <FaDatabase />,
    title: 'Data Storage',
    desc: 'Enterprise data storage solutions that reduce backup complexity and improve business continuity with NAS, SAN and hybrid cloud options.',
  },
  {
    icon: <FaServer />,
    title: 'Server Solutions',
    desc: 'Enterprise-grade server deployment, configuration and maintenance with latest technology and competitive pricing for all business sizes.',
  },
  {
    icon: <FaCopy />,
    title: 'Photocopier Solutions',
    desc: 'Multifunctional photocopier devices recommended according to business requirements with complete sales and after-sales support.',
  },
  {
    icon: <FaLaptop />,
    title: 'Laptop & Desktops',
    desc: 'Wide range of laptops and desktop computers from leading brands at the best prices with long-term service relationships.',
  },
  {
    icon: <FaPrint />,
    title: 'Printers & Plotters',
    desc: 'Industry-leading printers and plotters from HP, Canon, Epson with installation, maintenance and complete support services.',
  },
  {
    icon: <FaTv />,
    title: 'Large LED Display Panel',
    desc: 'Premium commercial display panels with crystal-clear visuals available in multiple customizable models for advertising and presentation.',
  },
  {
    icon: <FaVideo />,
    title: 'Video Conference',
    desc: 'Professional video conferencing systems for offices, educational institutions and enterprises with HD cameras and advanced audio.',
  },
  {
    icon: <FaDesktop />,
    title: 'Workstation',
    desc: 'High-performance engineering workstations for CAD, 3D rendering and data analytics with installation, optimization and technical support.',
  },
];

const SalesServices = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    const cards = sectionRef.current?.querySelectorAll('.reveal');
    cards?.forEach((c) => observer.observe(c));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="sales-section" ref={sectionRef}>
      <div className="container">
        <div className="section-header reveal">
          <span className="section-tag">What We Offer</span>
          <h2 className="section-title">SALES & <span>SERVICES</span></h2>
          <p className="section-subtitle">
            Comprehensive IT solutions tailored to your business requirements — from hardware procurement to complete infrastructure management.
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, i) => (
            <div
              key={service.title}
              className="service-card reveal"
              style={{ transitionDelay: `${i * 0.07}s` }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
              <div className="service-arrow">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SalesServices;
