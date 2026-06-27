import React from 'react';
import './ClientsSlider.css';

const clients = [
  'Andhra Pradesh Govt', 'Telangana State IT', 'HCL Technologies', 'Wipro Limited',
  'TCS Hyderabad', 'HDFC Bank', 'State Bank of India', 'Apollo Hospitals',
  'Yashoda Hospitals', 'ICICI Bank', 'Axis Bank', 'Infosys Ltd',
  'L&T Constructions', 'Bharat Biotech', 'DRDOHyderabad', 'BSNL Telangana',
];

const ClientsSlider = () => {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Trusted By</span>
          <h2 className="section-title">OUR <span>CLIENTS</span></h2>
          <p className="section-subtitle">Proudly serving leading enterprises, government bodies and institutions across Telangana and beyond.</p>
        </div>
      </div>
      <div className="clients-track-wrap">
        <div className="clients-fade-left"></div>
        <div className="clients-fade-right"></div>
        <div className="clients-track">
          {[...clients, ...clients].map((name, i) => (
            <div key={i} className="client-logo">
              <div className="client-icon">
                {name.slice(0, 2).toUpperCase()}
              </div>
              <span className="client-name">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
