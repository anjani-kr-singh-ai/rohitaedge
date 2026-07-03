import React, { useState, useEffect, useCallback } from 'react';
import './ImageSlider.css';

const slides = [
  {
    id: 1,
    tag: 'Infrastructure',
    image: '/network-solutions-slider.jpg',
    title: 'Enterprise Networking Cables',
    desc: 'Cat6 & Fiber Optic structured cabling solutions for maximum reliability and performance.',
    btn: 'Learn More',
  },
  {
    id: 2,
    tag: 'Hardware',
    image: '/server_soultions.jpg',
    title: 'Enterprise Server Solutions',
    desc: 'High-performance servers with latest processors and redundant power supplies for 24/7 uptime.',
    btn: 'View Servers',
  },
  {
    id: 3,
    tag: 'Computing',
    image: '/workstation-server-small.jpg',
    title: 'Desktops & Workstations',
    desc: 'Business-grade desktop computers and high-performance workstations for every requirement.',
    btn: 'Explore Range',
  },
  {
    id: 4,
    tag: 'Surveillance',
    image: '/cctv-small.jpg',
    title: 'CCTV & Video Wall Systems',
    desc: '4K IP cameras, NVR systems, and video wall solutions for complete security coverage.',
    btn: 'View Systems',
  },
  {
    id: 5,
    tag: 'Cloud',
    image: '/cloud-computing-small.jpg',
    title: 'Cloud Infrastructure',
    desc: 'Scalable cloud solutions with hybrid deployment options for modern enterprise needs.',
    btn: 'Cloud Services',
  },
  {
    id: 6,
    tag: 'Data Center',
    image: '/datastorage.jpg',
    title: 'Data Center Solutions',
    desc: 'Complete data center design, implementation and management for enterprise clients.',
    btn: 'Data Center',
  },
];

const ImageSlider = () => {
  const [current, setCurrent] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const go = useCallback((idx) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrent(idx);
      setIsAnimating(false);
    }, 300);
  }, [isAnimating]);

  const next = useCallback(() => go((current + 1) % slides.length), [current, go]);
  const prev = useCallback(() => go((current - 1 + slides.length) % slides.length), [current, go]);

  useEffect(() => {
    const t = setInterval(next, 5000);
    return () => clearInterval(t);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="slider-section">
      <div className="container">
        <div className="slider-wrap">
          <div className={`slider-content ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            <div className="slider-inner">
              <div className="slide-left">
                <div className="slide-tag">{slide.tag}</div>
                <h2 className="slide-title">{slide.title}</h2>
                <p className="slide-desc">{slide.desc}</p>
                <button className="slide-btn">
                  {slide.btn}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
              </div>
              <div className="slide-right">
                <div className="slide-visual">
                  <img src={slide.image} alt={slide.title} loading="lazy" />
                </div>
              </div>
            </div>
          </div>

          <button className="slider-arrow arrow-left" onClick={prev} aria-label="Previous">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
          <button className="slider-arrow arrow-right" onClick={next} aria-label="Next">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6"/>
            </svg>
          </button>

          <div className="slider-indicators">
            {slides.map((s, i) => (
              <button
                key={s.id}
                className={`indicator ${i === current ? 'active' : ''}`}
                onClick={() => go(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageSlider;
