import React, { useState, useRef, useEffect } from 'react';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheckCircle } from 'react-icons/fi';
import PageHero from '../../components/PageHero/PageHero';
import './Contact.css';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  const details = [
    {
      icon: <FiMapPin />,
      label: 'Our Office',
      value: '#10-3-32/9/15, 2nd Floor,\nUmakanth Commercial Complex,\nOpp. Bandhan Bank, East Marredpally,\nSecunderabad – 500026, Telangana',
    },
    {
      icon: <FiPhone />,
      label: 'Phone',
      value: '040 43057138\n040 40211968',
      href: 'tel:04043057138',
    },
    {
      icon: <FiMail />,
      label: 'Email',
      value: 'rhnetworksolutionsknl@gmail.com',
      href: 'mailto:rhnetworksolutionsknl@gmail.com',
    },
    {
      icon: <FiClock />,
      label: 'Working Hours',
      value: 'Mon – Sat: 9:00 AM – 7:00 PM\nSunday: By Appointment',
    },
  ];

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Reach out for inquiries, quotes and technical consultations. We respond within 2 business hours."
        breadcrumbs={[{ name: 'Contact' }]}
      />

      <section className="contact-section" ref={sectionRef}>
        <div className="container">
          <div className="contact-grid">

            {/* Left: Info */}
            <div className="contact-info reveal-left">
              <div className="contact-info-card">
                <h3 className="contact-info-title">Get In Touch</h3>
                <p className="contact-info-desc">Our team of certified IT engineers is ready to understand your requirements and deliver the right solution.</p>
                <div className="contact-details">
                  {details.map(({ icon, label, value, href }) => (
                    <div key={label} className="contact-detail-item">
                      <div className="contact-detail-icon">{icon}</div>
                      <div>
                        <div className="contact-detail-label">{label}</div>
                        {href ? (
                          <a href={href} className="contact-detail-value link" style={{ whiteSpace: 'pre-line' }}>{value}</a>
                        ) : (
                          <div className="contact-detail-value" style={{ whiteSpace: 'pre-line' }}>{value}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="map-placeholder">
                <div className="map-grid-bg"></div>
                <div className="map-overlay">
                  <div className="map-pin-icon"><FiMapPin /></div>
                  <div className="map-info">
                    <div className="map-name">RH Network Solutions</div>
                    <div className="map-addr">East Marredpally, Secunderabad</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-wrap reveal-right">
              {submitted ? (
                <div className="contact-success">
                  <div className="success-icon"><FiCheckCircle /></div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting RH Network Solutions. Our team will get back to you within 2 business hours.</p>
                  <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <h3 className="form-title">Send Us a Message</h3>
                  <p className="form-subtitle">Fill in your details and we'll get back to you promptly.</p>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name *</label>
                      <input type="text" name="name" required className="form-input" placeholder="John Smith" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address *</label>
                      <input type="email" name="email" required className="form-input" placeholder="john@company.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" name="phone" className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject *</label>
                      <select name="subject" required className="form-input form-select" value={form.subject} onChange={handleChange}>
                        <option value="">Select a subject</option>
                        <option value="networking">Networking Solutions</option>
                        <option value="cctv">CCTV / Surveillance</option>
                        <option value="server">Server & Storage</option>
                        <option value="products">Products Inquiry</option>
                        <option value="amc">AMC Contract</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message *</label>
                    <textarea name="message" required rows="5" className="form-input form-textarea" placeholder="Describe your requirements, project scope, or any questions you have..." value={form.message} onChange={handleChange}></textarea>
                  </div>

                  <button type="submit" className="btn-primary form-submit" disabled={loading}>
                    {loading ? (
                      <><div className="btn-spinner"></div>Sending...</>
                    ) : (
                      <><FiSend />Send Message</>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
