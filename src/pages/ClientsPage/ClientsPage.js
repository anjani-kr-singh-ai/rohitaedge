import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaHospital, FaUniversity, FaLaptop, FaBuilding, FaGraduationCap, FaIndustry } from 'react-icons/fa';
import PageHero from '../../components/PageHero/PageHero';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import './ClientsPage.css';

const clientList = [
  { name: 'Apollo Hospitals', sector: 'Healthcare', initial: 'AH', color: '#e74c3c' },
  { name: 'Yashoda Hospitals', sector: 'Healthcare', initial: 'YH', color: '#e74c3c' },
  { name: 'HDFC Bank', sector: 'Banking', initial: 'HB', color: '#2980b9' },
  { name: 'State Bank of India', sector: 'Banking', initial: 'SB', color: '#1a3a6b' },
  { name: 'ICICI Bank', sector: 'Banking', initial: 'IB', color: '#f5841f' },
  { name: 'Wipro Limited', sector: 'IT', initial: 'WL', color: '#008fd7' },
  { name: 'HCL Technologies', sector: 'IT', initial: 'HC', color: '#0060a9' },
  { name: 'TCS Hyderabad', sector: 'IT', initial: 'TC', color: '#0052cc' },
  { name: 'Telangana State IT', sector: 'Government', initial: 'TS', color: '#27ae60' },
  { name: 'Andhra Pradesh Govt', sector: 'Government', initial: 'AP', color: '#16a085' },
  { name: 'DRDO Hyderabad', sector: 'Defence', initial: 'DR', color: '#8e44ad' },
  { name: 'Bharat Biotech', sector: 'Pharma', initial: 'BB', color: '#2ecc71' },
  { name: 'L&T Constructions', sector: 'Construction', initial: 'LT', color: '#e67e22' },
  { name: 'Axis Bank', sector: 'Banking', initial: 'AB', color: '#8b1a2e' },
  { name: 'BSNL Telangana', sector: 'Telecom', initial: 'BS', color: '#c0392b' },
  { name: 'Infosys Ltd', sector: 'IT', initial: 'IN', color: '#007cc3' },
];

const industries = [
  { icon: <FaHospital />, name: 'Healthcare', count: '25+ Clients' },
  { icon: <FaUniversity />, name: 'Banking & Finance', count: '20+ Clients' },
  { icon: <FaLaptop />, name: 'IT & Software', count: '30+ Clients' },
  { icon: <FaBuilding />, name: 'Government', count: '15+ Clients' },
  { icon: <FaGraduationCap />, name: 'Education', count: '18+ Clients' },
  { icon: <FaIndustry />, name: 'Manufacturing', count: '12+ Clients' },
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
        title="Our Clients"
        subtitle="Trusted by 100+ enterprises, government organizations and institutions across Telangana and Andhra Pradesh."
        breadcrumbs={[{ name: 'Clients' }]}
      />

      <section className="clients-page-section" ref={sectionRef}>
        <div className="container">

          <div className="section-header reveal">
            <span className="section-tag">Who Trusts Us</span>
            <h2 className="section-title">OUR VALUED <span>CLIENTS</span></h2>
            <p className="section-subtitle">From startups to enterprise, we are proud to serve organisations across multiple industries.</p>
          </div>

          <div className="clients-logo-grid">
            {clientList.map((c, i) => (
              <div key={c.name} className="client-card reveal" style={{ transitionDelay: `${i * 0.04}s` }}>
                <div className="client-card-icon" style={{ background: c.color }}>{c.initial}</div>
                <div className="client-card-name">{c.name}</div>
                <div className="client-card-sector">{c.sector}</div>
              </div>
            ))}
          </div>

          <div className="industries-section">
            <div className="section-header reveal">
              <span className="section-tag">Across Sectors</span>
              <h2 className="section-title">INDUSTRIES <span>SERVED</span></h2>
            </div>
            <div className="industries-grid">
              {industries.map((ind, i) => (
                <div key={ind.name} className="industry-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                  <div className="industry-icon">{ind.icon}</div>
                  <h3 className="industry-name">{ind.name}</h3>
                  <div className="industry-count">{ind.count}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="success-section reveal">
            <div className="success-card">
              <h3 className="success-title">Partner With Us</h3>
              <p className="success-desc">Join 100+ organizations that trust RH Network Solutions for their IT infrastructure. Get personalized solutions, enterprise-grade support and competitive pricing.</p>
              <Link to="/contact" className="btn-primary">Become a Client</Link>
            </div>
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
};

export default ClientsPage;
