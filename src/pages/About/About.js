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

const roadmap = [
  { tag: '01', title: 'Genuine Products', desc: 'Sourcing exclusively from authorized distributors so every product comes with full manufacturer warranty.' },
  { tag: '02', title: 'Transparent Pricing', desc: 'Clear, upfront quotations with no hidden costs — you know exactly what you are paying for.' },
  { tag: '03', title: 'Expert Installation', desc: 'Certified engineers handle every setup with professional configuration and user training.' },
  { tag: '04', title: 'Reliable AMC Support', desc: 'Proactive maintenance contracts with fast turnaround whenever an issue comes up.' },
  { tag: '05', title: 'Long-Term Partnerships', desc: 'Earning trust project by project through honest advice and dependable service.' },
  { tag: '06', title: 'Future-Ready Solutions', desc: 'Growing our expertise into cloud infrastructure, AI-driven surveillance and smart building technology.' },
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
        subtitle="A new-age IT infrastructure company delivering genuine products and dependable service across Andhra Pradesh."
        breadcrumbs={[{ name: 'About' }]}
      />
      <section className="about-section" ref={sectionRef}>
        <div className="container">

          {/* Mission & Vision */}
          <div className="mv-grid reveal">
            <div className="mv-card">
              <div className="mv-icon"><FiTarget /></div>
              <h3 className="mv-title">Our Mission</h3>
              <p className="mv-desc">To empower businesses across Andhra Pradesh with reliable, genuine IT infrastructure solutions — delivered with expertise, transparency and commitment to excellence.</p>
            </div>
            <div className="mv-card">
              <div className="mv-icon"><FiZap /></div>
              <h3 className="mv-title">Our Vision</h3>
              <p className="mv-desc">To become Andhra Pradesh's most trusted IT solutions partner — enabling businesses to thrive through innovative technology infrastructure that scales with their growth.</p>
            </div>
          </div>

          {/* Story */}
          <div className="about-story reveal">
            <div className="about-story-text">
              <span className="section-tag">Our Story</span>
              <h2 className="section-title" style={{ textAlign: 'left' }}>Built On Trust & <span>Technology</span></h2>
              <p>RH Network Solutions is a new-age IT infrastructure company based in Kurnool, Andhra Pradesh, built to bridge the technology gap for businesses across the region. We bring genuine products, transparent pricing and dedicated after-sales support to every project we take on.</p>
              <p style={{ marginTop: '12px' }}>From networking and surveillance to office automation and cloud solutions, our goal is to become a dependable IT technology partner for businesses, institutions and government offices across Andhra Pradesh.</p>
            </div>
            <div className="about-visual-box">
              <div className="about-visual-image">
                <img src="/network-solutions-slider.jpg" alt="RH Network Solutions infrastructure" loading="lazy" />
              </div>
              <div className="about-stat-grid">
                {['Genuine Products', 'Transparent Pricing', 'Dedicated Support', 'Modern Infrastructure'].map((label) => (
                  <div key={label} className="about-stat">
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

          {/* Roadmap */}
          <div className="timeline-section">
            <div className="section-header reveal">
              <span className="section-tag">Our Promise</span>
              <h2 className="section-title">OUR MISSION <span>GOING FORWARD</span></h2>
            </div>
            <div className="timeline">
              <div className="timeline-line"></div>
              {roadmap.map((t, i) => (
                <div key={t.tag} className={`timeline-item ${i % 2 === 0 ? 'left' : 'right'} reveal`}>
                  <div className="timeline-content">
                    <div className="timeline-year">{t.tag}</div>
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
