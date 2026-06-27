import React from 'react';
import { Link } from 'react-router-dom';
import { FaServer, FaNetworkWired, FaCloud, FaDatabase, FaShieldAlt, FaVideo } from 'react-icons/fa';
import './Hero.css';

const dashItems = [
  { icon: <FaServer />, label: 'Servers', stat: '99.9% Uptime' },
  { icon: <FaNetworkWired />, label: 'Networking', stat: '10 Gbps Link' },
  { icon: <FaCloud />, label: 'Cloud', stat: 'Hybrid Ready' },
  { icon: <FaVideo />, label: 'Surveillance', stat: '4K IP Cameras' },
  { icon: <FaShieldAlt />, label: 'Security', stat: 'NGFW Active' },
  { icon: <FaDatabase />, label: 'Storage', stat: 'NAS / SAN' },
];

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-container">
        {/* Left: Text */}
        <div className="hero-text">
          <div className="hero-badge">
            <span className="badge-dot"></span>
            Enterprise IT Infrastructure
          </div>
          <h1 className="hero-title">
            Empowering Businesses<br />
            with <span>Smart IT</span><br />
            Infrastructure
          </h1>
          <p className="hero-subtitle">
            Enterprise Networking, Security Solutions, Servers, Storage,
            Surveillance and IT Infrastructure Services — trusted by 100+ businesses across Telangana.
          </p>
          <div className="hero-actions">
            <Link to="/services" className="btn-primary">Explore Services</Link>
            <Link to="/contact" className="btn-outline">Contact Us</Link>
          </div>
          <div className="hero-stats">
            {[['500+', 'Projects'], ['100+', 'Clients'], ['20+', 'Solutions'], ['99%', 'Satisfaction']].map(([num, label]) => (
              <div key={label} className="hero-stat">
                <span className="hero-stat-num">{num}</span>
                <span className="hero-stat-label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: IT Dashboard Illustration */}
        <div className="hero-visual">
          <div className="hero-dashboard">
            <div className="dashboard-header">
              <div className="dashboard-dot"></div>
              <span>IT Infrastructure Overview</span>
            </div>
            <div className="dashboard-grid">
              {dashItems.map(({ icon, label, stat }) => (
                <div key={label} className="dash-item">
                  <div className="dash-icon">{icon}</div>
                  <div className="dash-label">{label}</div>
                  <div className="dash-stat">{stat}</div>
                </div>
              ))}
            </div>
            <div className="dashboard-footer">
              <span>500+ Projects Delivered</span>
              <span className="dash-badge">Certified Engineers</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-indicator">
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
        <span>Scroll Down</span>
      </div>
    </section>
  );
};

export default Hero;
