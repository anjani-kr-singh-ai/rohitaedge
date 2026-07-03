import React from 'react';
import './ClientsSlider.css';

const brands = [
  'HP', 'Dell', 'Lenovo', 'Canon', 'Epson', 'Kyocera',
  'Konica Minolta', 'Hikvision', 'Dahua', 'CP Plus', 'Axis',
  'ZKTeco', 'BenQ', 'Optoma', 'Samsung', 'LG', 'Akuvox', 'Ricoh',
];

const ClientsSlider = () => {
  return (
    <section className="clients-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Our Partners</span>
          <h2 className="section-title">BRANDS WE <span>DEAL IN</span></h2>
          <p className="section-subtitle">We supply and install genuine, warranty-backed hardware from the world's leading technology brands.</p>
        </div>
      </div>
      <div className="clients-track-wrap">
        <div className="clients-fade-left"></div>
        <div className="clients-fade-right"></div>
        <div className="clients-track">
          {[...brands, ...brands].map((name, i) => (
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
