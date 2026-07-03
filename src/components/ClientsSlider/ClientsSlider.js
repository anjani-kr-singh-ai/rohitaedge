import React from 'react';
import './ClientsSlider.css';

const brands = [
  { name: 'HP', logo: '/brand-logos/hp.svg' },
  { name: 'Dell', logo: '/brand-logos/dell.svg' },
  { name: 'Lenovo', logo: '/brand-logos/lenovo.svg' },
  { name: 'Canon', logo: '/brand-logos/canon.svg' },
  { name: 'Epson', logo: '/brand-logos/epson.svg' },
  { name: 'Kyocera', logo: '/brand-logos/kyocera.svg' },
  { name: 'Konica Minolta', logo: '/brand-logos/konica-minolta.svg' },
  { name: 'Hikvision', logo: '/brand-logos/hikvision.svg' },
  { name: 'Dahua', logo: '/brand-logos/dahua.svg' },
  { name: 'Axis', logo: '/brand-logos/axis.svg' },
  { name: 'BenQ', logo: '/brand-logos/benq.svg' },
  { name: 'Optoma', logo: '/brand-logos/optoma.png' },
  { name: 'Samsung', logo: '/brand-logos/samsung.svg' },
  { name: 'LG', logo: '/brand-logos/lg.svg' },
  { name: 'Ricoh', logo: '/brand-logos/ricoh.svg' },
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
          {[...brands, ...brands].map((b, i) => (
            <div key={i} className="client-logo">
              <div className="client-icon">
                <img src={b.logo} alt={b.name} loading="lazy" />
              </div>
              <span className="client-name">{b.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSlider;
