import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Rajesh Kumar', role: 'IT Manager', company: 'Apollo Hospitals',
    text: 'RH Network Solutions transformed our hospital network infrastructure. Their team was professional, fast, and delivered beyond expectations. The CCTV and server setup is outstanding.',
    rating: 5, initial: 'RK',
  },
  {
    name: 'Priya Sharma', role: 'Operations Head', company: 'Wipro Ltd, Hyderabad',
    text: 'We partnered with RH Networks for our office IT setup in Secunderabad. From structured cabling to firewall configuration — everything was handled with great expertise and timely delivery.',
    rating: 5, initial: 'PS',
  },
  {
    name: 'Mohammed Farhan', role: 'CEO', company: 'Tech Ventures Pvt Ltd',
    text: 'Their AMC service is exceptional. Any IT issue we face, their team responds within hours. The server and networking solutions they provided have given us 99.9% uptime for 2 years.',
    rating: 5, initial: 'MF',
  },
  {
    name: 'Sunita Reddy', role: 'Principal', company: 'Hyderabad Public School',
    text: "RH Networks installed our school's interactive panels, PA system, and CCTV. The quality and value for money is excellent. Students and teachers love the new tech setup.",
    rating: 5, initial: 'SR',
  },
  {
    name: 'Anil Verma', role: 'IT Director', company: 'State Bank of India',
    text: 'For our branch expansion project, RH Network Solutions provided complete networking and biometric setup. Their compliance with banking security standards and prompt support is commendable.',
    rating: 5, initial: 'AV',
  },
];

const Stars = ({ count }) => (
  <div className="stars">
    {[...Array(count)].map((_, i) => (
      <FaStar key={i} size={14} color="#F59E0B" />
    ))}
  </div>
);

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent(c => (c + 1) % testimonials.length);

  const visible = [
    (current - 1 + testimonials.length) % testimonials.length,
    current,
    (current + 1) % testimonials.length,
  ];

  return (
    <section className="testi-section">
      <div className="container">
        <div className="section-header">
          <span className="section-tag">Client Stories</span>
          <h2 className="section-title">CUSTOMER <span>TESTIMONIALS</span></h2>
          <p className="section-subtitle">What our clients say about our services and solutions.</p>
        </div>
        <div className="testi-carousel">
          {visible.map((idx, pos) => (
            <div
              key={idx}
              className={`testi-card ${pos === 1 ? 'active' : 'side'} ${pos === 0 ? 'left' : ''} ${pos === 2 ? 'right' : ''}`}
              onClick={() => pos === 0 ? prev() : pos === 2 ? next() : null}
            >
              <Stars count={testimonials[idx].rating} />
              <p className="testi-text">"{testimonials[idx].text}"</p>
              <div className="testi-author">
                <div className="testi-avatar">{testimonials[idx].initial}</div>
                <div className="testi-info">
                  <div className="testi-name">{testimonials[idx].name}</div>
                  <div className="testi-role">{testimonials[idx].role}, {testimonials[idx].company}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="testi-nav">
          <button className="testi-btn" onClick={prev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <div className="testi-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`testi-dot ${i === current ? 'active' : ''}`}
                onClick={() => setCurrent(i)}
                aria-label={`Review ${i + 1}`}
              />
            ))}
          </div>
          <button className="testi-btn" onClick={next} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
