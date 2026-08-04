import React from 'react';
import './OurClients.css';

const clients = [
  { name: 'IIITDM Kurnool', logo: '/client-logo/5.jpeg' },
  { name: 'Rayalaseema University', logo: '/client-logo/6.jpeg' },
  { name: 'Yogi Vemana University', logo: '/client-logo/15.jpeg' },
  { name: 'Vikrama Simhapuri University', logo: '/client-logo/14.jpeg' },
  { name: 'Kurnool Medical College', logo: '/client-logo/12.jpeg' },
  { name: 'G. Pullaiah College of Engineering & Technology', logo: '/client-logo/4.jpeg' },
  { name: 'Rajeev Gandhi Memorial College of Engineering & Technology', logo: '/client-logo/7.jpeg' },
  { name: 'Bheema Institute of Technology & Science, Adoni', logo: '/client-logo/3.jpeg' },
  { name: 'Srinivasa Ramanujan Institute of Technology', logo: '/client-logo/11.jpeg' },
  { name: 'SREC, Nandyal', logo: '/client-logo/16.jpeg' },
  { name: 'Sri Ramakrishna Degree College, Nandyal', logo: '/client-logo/10.jpeg' },
  { name: 'Ankura Apex Hospital', logo: '/client-logo/1.jpeg' },
  { name: 'Ashwini Hospital, Kurnool', logo: '/client-logo/2.jpeg' },
  { name: 'Agraseni Hospital', logo: '/client-logo/9.jpeg' },
  { name: 'Suseela Netralaya', logo: '/client-logo/13.jpeg' },
  { name: 'Sasha Nursing Home', logo: '/client-logo/8.jpeg' },
];

const OurClients = () => {
  return (
    <section className="our-clients-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Trusted By</span>
          <h2 className="section-title">OUR <span>CLIENTS</span></h2>
          <p className="section-subtitle">Universities, colleges and hospitals across the Rayalaseema region rely on us for their IT infrastructure, supply and after-sales support.</p>
        </div>
      </div>
      <div className="our-clients-track-wrap">
        <div className="our-clients-fade-left"></div>
        <div className="our-clients-fade-right"></div>
        <div className="our-clients-track">
          {[...clients, ...clients].map((c, i) => (
            <div key={i} className="our-client-logo">
              <div className="our-client-icon">
                <img src={c.logo} alt={c.name} loading="lazy" />
              </div>
              <span className="our-client-name">{c.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurClients;
