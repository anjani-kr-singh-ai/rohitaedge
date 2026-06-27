import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import {
  FaNetworkWired, FaPlug, FaWifi, FaLock, FaServer, FaCloud,
  FaGlobe, FaTools, FaChartBar, FaSitemap, FaProjectDiagram, FaSearch
} from 'react-icons/fa';
import { MdSecurity } from 'react-icons/md';
import PageHero from '../../components/PageHero/PageHero';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import './NetworkingSolutions.css';

const solutions = [
  { icon: <FaNetworkWired />, title: 'Enterprise Networking', desc: 'Complete network design, architecture and implementation for enterprise-scale operations with redundancy and high availability.', tags: ['L2/L3 Switching', 'OSPF/BGP Routing', 'QoS Configuration'] },
  { icon: <FaPlug />, title: 'Structured Cabling', desc: 'CAT6A, CAT7 and fiber optic cabling with proper cable management, labeling and documentation for future-proof networks.', tags: ['CAT6/CAT6A', 'Fiber Optic', 'Patch Panels'] },
  { icon: <FaWifi />, title: 'Wireless Solutions', desc: 'Enterprise Wi-Fi 6 deployment with centralized management, coverage planning and seamless roaming across large premises.', tags: ['Wi-Fi 6/6E', 'Controller-based', 'Guest SSID'] },
  { icon: <MdSecurity />, title: 'Firewall & Security', desc: 'Next-generation firewall implementation with IPS, URL filtering, application control and advanced threat protection.', tags: ['NGFW', 'IPS/IDS', 'URL Filtering'] },
  { icon: <FaLock />, title: 'VPN Solutions', desc: 'Site-to-site and remote access VPN for secure connectivity between offices and remote workers with SSL/IPSec protocols.', tags: ['IPSec VPN', 'SSL VPN', 'SD-WAN'] },
  { icon: <FaServer />, title: 'Server Rack Solutions', desc: 'Professional server rack design, cable management, PDU installation and hot/cold aisle containment for data centers.', tags: ['42U/48U Racks', 'Cable Mgmt', 'PDU Solutions'] },
  { icon: <FaCloud />, title: 'Cloud Networking', desc: 'Hybrid cloud connectivity with AWS Direct Connect, Azure ExpressRoute and multi-cloud networking strategies.', tags: ['AWS/Azure', 'Hybrid Cloud', 'SD-WAN'] },
  { icon: <FaSitemap />, title: 'Fiber Solutions', desc: 'Single-mode and multi-mode fiber optic backbone installation for high-bandwidth, low-latency campus networks.', tags: ['OTDR Testing', 'Fusion Splicing', 'DWDM'] },
  { icon: <FaProjectDiagram />, title: 'LAN Design', desc: 'Complete local area network design with VLAN segmentation, spanning tree, and proper IP address management.', tags: ['VLAN Segmentation', 'STP/RSTP', 'DHCP/DNS'] },
  { icon: <FaGlobe />, title: 'WAN Connectivity', desc: 'WAN link provisioning, optimization and management including MPLS, internet leased lines and broadband solutions.', tags: ['MPLS', 'ILL', 'Load Balancing'] },
  { icon: <FaChartBar />, title: 'Network Monitoring', desc: 'Real-time network monitoring with SNMP, NetFlow analysis, bandwidth monitoring and automated alerting systems.', tags: ['SNMP', 'NetFlow', 'PRTG/SolarWinds'] },
  { icon: <FaTools />, title: 'Network Audit & AMC', desc: 'Comprehensive network audits, vulnerability assessments and annual maintenance contracts for continuous reliability.', tags: ['Network Audit', 'AMC', 'SLA Based'] },
];

const NetworkingSolutions = () => {
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
        title="Networking Solutions"
        subtitle="Comprehensive enterprise networking infrastructure designed for performance, security and scalability."
        breadcrumbs={[{ name: 'Networking Solutions' }]}
      />

      <section className="net-section" ref={sectionRef}>
        <div className="container">
          <div className="section-header reveal">
            <span className="section-tag">Infrastructure</span>
            <h2 className="section-title">ENTERPRISE <span>NETWORKING</span></h2>
            <p className="section-subtitle">End-to-end network solutions from design to deployment and ongoing management.</p>
          </div>
          <div className="net-grid">
            {solutions.map((s, i) => (
              <div key={s.title} className="net-card reveal" style={{ transitionDelay: `${i * 0.06}s` }}>
                <div className="net-icon">{s.icon}</div>
                <h3 className="net-title">{s.title}</h3>
                <p className="net-desc">{s.desc}</p>
                <div className="net-tags">
                  {s.tags.map(t => <span key={t} className="net-tag">{t}</span>)}
                </div>
              </div>
            ))}
          </div>
          <div className="net-cta-row reveal">
            <Link to="/contact" className="btn-primary">Get a Network Assessment</Link>
            <Link to="/services" className="btn-outline">View All Services</Link>
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
};

export default NetworkingSolutions;
