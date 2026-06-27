import React, { useEffect, useRef } from 'react';
import { FiTarget, FiAward, FiUsers, FiZap } from 'react-icons/fi';
import PageHero from '../../components/PageHero/PageHero';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import './About.css';

const values = [
  { icon: <FiTarget />, title: 'Customer First', desc: "Every solution is designed keeping the client's needs, budget and growth trajectory at the forefront." },
  { icon: <FiAward />, title: 'Excellence', desc: 'We maintain the highest standards in product quality, installation and after-sales service delivery.' },
  { icon: <FiUsers />, title: 'Integrity', desc: 'Transparent pricing, honest advice and building long-term trust-based relationships with our clients.' },
  { icon: <FiZap />, title: 'Innovation', desc: 'Continuously adopting the latest technologies to deliver cutting-edge solutions to our clients.' },
];

const timeline = [
  { year: '2010', title: 'Company Founded', desc: 'RH Network Solutions established in Secunderabad with a vision to deliver enterprise IT solutions.' },
  { year: '2013', title: 'First 50 Clients', desc: 'Reached 50 enterprise clients across Hyderabad and Secunderabad with networking and CCTV solutions.' },
  { year: '2016', title: 'Expansion', desc: 'Expanded service portfolio to include cloud infrastructure, server solutions and complete data centers.' },
  { year: '2019', title: 'Government Projects', desc: 'Started executing government IT infrastructure projects across Telangana state offices.' },
  { year: '2022', title: '100+ Clients', desc: 'Crossed 100 satisfied clients milestone with 500+ completed IT infrastructure projects.' },
  { year: '2026', title: 'Future Forward', desc: 'Expanding into AI-powered surveillance, edge computing and smart building infrastructure solutions.' },
];

const About = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div>
      <PageHero
        title="About Us"
        subtitle="Delivering enterprise IT infrastructure solutions across Telangana since 2010."
        breadcrumbs={[{ name: 'About' }]}
      />
      <section className="about-section" ref={sectionRef}>
        <div className="container">

          {/* Mission & Vision */}
          <div className="mv-grid reveal">
            <div className="mv-card">
              <div className="mv-icon"><FiTarget /></div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-desc">To empower businesses across Telangana with reliable, cutting-edge IT infrastructure solutions — delivered with expertise, transparency and commitment to excellence.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon"><FiZap /></div>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-desc">To be Telangana's most trusted IT solutions partner — enabling businesses to thrive through innovative technology infrastructure that scales with their growth.</p>
            </div>
          </div>

          {/* Story */}
          <div className="about-story reveal">
            <div className="about-story-text">
              <span className="section-tag">Our Story</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>15+ Years of <span>IT Excellence</span></h2>
              <p>Founded in 2010 in Secunderabad, RH Network Solutions began as a small networking consultancy with a big vision — to bridge the technology gap for businesses in Telangana. Over 15 years, we've grown into a full-service IT infrastructure company trusted by 100+ enterprises.</p>
              <p style={{ marginTop: '12px' }}>From hospitals and schools to banks and government offices, our solutions power the technology backbone of organizations that serve millions of people across the region.</p>
            </div>
            <div className="about-visual-box">
              <div className="about-stat-grid">
                {[['15+', 'Years Experience'], ['500+', 'Projects Done'], ['100+', 'Happy Clients'], ['99%', 'Satisfaction Rate']].map(([num, label]) => (
                  <div key={label} className="about-stat">
                    <div className="about-stat-num">{num}</div>
                    <div className="about-stat-label">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Values */}
          <div className="values-section">
            <div className="section-header reveal">
              <span className="section-tag">What We Stand For</span>
              <h2 className="section-title">OUR CORE <span>VALUES</span></h2>
            </div>
            <div className="values-grid">
              {values.map((v, i) => (
                <div key={v.title} className="value-card reveal" style={{ transitionDelay: `${i * 0.1}s` }}>
                  <div className="value-icon">{v.icon}</div>
                  <h3 className="value-title">{v.title}</h3>
                  <p className="value-desc">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Timeline */}
          <div className="timeline-section">
            <div className="section-header reveal">
              <span className="section-tag">Our Journey</span>
              <h2 className="section-title">COMPANY <span>MILESTONES</span></h2>
            </div>
            <div className="timeline">
              <div className="timeline-line"></div>
              {timeline.map((t, i) => (
                <div key={t.year} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} reveal`}>
                  <div className="timeline-content">
                    <div className="timeline-year">{t.year}</div>
                    <div className="timeline-title">{t.title}</div>
                    <div className="timeline-desc">{t.desc}</div>
                  </div>
                  <div className="timeline-dot"></div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
      <ContactCTA />
    </div>
  );
};

export default About;
