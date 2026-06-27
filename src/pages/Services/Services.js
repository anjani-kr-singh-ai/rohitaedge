import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiTool, FiClipboard, FiCpu, FiLifeBuoy, FiHeadphones, FiWifi, FiCamera, FiFileText, FiCloud } from 'react-icons/fi';
import PageHero from '../../components/PageHero/PageHero';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import './Services.css';

const services = [
  { icon: <FiTool />, title: 'Installation Services', desc: 'Professional on-site installation of all IT hardware and infrastructure with proper testing and handover documentation.', highlight: 'Same-day deployment available' },
  { icon: <FiClipboard />, title: 'Annual Maintenance Contracts', desc: 'Comprehensive AMC packages covering preventive maintenance, emergency support and priority response times.', highlight: 'SLA-backed guarantees' },
  { icon: <FiCpu />, title: 'Hardware Repair', desc: 'Expert diagnosis and repair of all hardware including servers, networking equipment, printers, and computers.', highlight: '48-hour turnaround' },
  { icon: <FiLifeBuoy />, title: 'IT Consulting', desc: 'Strategic IT consulting to help businesses plan, budget and execute technology transformation initiatives effectively.', highlight: 'Expert guidance' },
  { icon: <FiHeadphones />, title: 'Technical Support', desc: 'Remote and on-site technical support for all deployed systems with multi-tier escalation and resolution tracking.', highlight: '24/7 helpdesk' },
  { icon: <FiWifi />, title: 'Networking Services', desc: 'End-to-end network setup including cabling, configuration, testing and documentation for all types of networks.', highlight: 'Certified engineers' },
  { icon: <FiCamera />, title: 'Surveillance Setup', desc: 'CCTV system design, installation, commissioning and training for complete security monitoring solutions.', highlight: 'HD & 4K systems' },
  { icon: <FiFileText />, title: 'AMC Contracts', desc: 'Tailored annual maintenance plans for photocopiers, printers, CCTV, networking equipment and servers.', highlight: 'Flexible plans' },
  { icon: <FiCloud />, title: 'Cloud Migration', desc: 'Seamless migration of on-premise workloads to public, private or hybrid cloud environments with zero data loss.', highlight: 'Zero downtime' },
];

const process = [
  { step: '01', title: 'Consultation', desc: 'Free site assessment and requirement gathering' },
  { step: '02', title: 'Proposal', desc: 'Detailed solution proposal with transparent pricing' },
  { step: '03', title: 'Deployment', desc: 'Professional installation and configuration' },
  { step: '04', title: 'Testing', desc: 'Complete testing and quality validation' },
  { step: '05', title: 'Handover', desc: 'User training and documentation delivery' },
  { step: '06', title: 'Support', desc: 'Ongoing maintenance and 24/7 support' },
];

const Services = () => {
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
        title="Our Services"
        subtitle="End-to-end IT services from installation and maintenance to cloud migration and 24/7 support."
        breadcrumbs={[{ name: 'Services' }]}
      />
      <section className="services-page-section" ref={sectionRef}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">What We Do</span>
            <h2 className="section-title">COMPREHENSIVE <span>IT SERVICES</span></h2>
            <p className="section-subtitle">From procurement to deployment and beyond — we handle your entire IT lifecycle.</p>
          </div>
          <div className="svc-grid">
            {services.map((s, i) => (
              <div key={s.title} className="svc-card reveal" style={{ transitionDelay: `${i * 0.07}s` }}>
                <div className="svc-icon">{s.icon}</div>
                <h3 className="svc-title">{s.title}</h3>
                <p className="svc-desc">{s.desc}</p>
                <div className="svc-highlight">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                  {s.highlight}
                </div>
              </div>
            ))}
          </div>

          <div className="process-section reveal">
            <div className="section-header">
              <span className="section-tag">How We Work</span>
              <h2 className="section-title">OUR <span>PROCESS</span></h2>
            </div>
            <div className="process-grid">
              {process.map((p, i) => (
                <div key={p.step} className="process-step">
                  {i < process.length - 1 && <div className="process-connector"></div>}
                  <div className="process-step-num">{p.step}</div>
                  <div className="process-step-title">{p.title}</div>
                  <div className="process-step-desc">{p.desc}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="svc-cta reveal">
            <Link to="/contact" className="btn-primary">Get a Free Quote</Link>
            <Link to="/networking-solutions" className="btn-outline">View Solutions</Link>
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
};

export default Services;
