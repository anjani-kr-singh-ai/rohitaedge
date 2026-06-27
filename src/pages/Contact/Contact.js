import React, { useState, useRef, useEffect } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaExternalLinkAlt } from 'react-icons/fa';
import { FiSend, FiCheckCircle } from 'react-icons/fi';
import { MdSupportAgent } from 'react-icons/md';
import PageHero from '../../components/PageHero/PageHero';
import './Contact.css';

const contactDetails = [
  {
    icon: <FaMapMarkerAlt />,
    label: 'Office Address',
    value: '#10-3-32/9/15, 2nd Floor, Umakanth Commercial Complex, Opp. Bandhan Bank, East Marredpally, Secunderabad – 500026, Telangana',
    href: 'https://maps.google.com/?q=East+Marredpally+Secunderabad+Telangana',
    linkLabel: 'View on Google Maps',
  },
  {
    icon: <FaPhoneAlt />,
    label: 'Phone Numbers',
    value: '040 43057138\n040 40211968',
    href: 'tel:04043057138',
    linkLabel: 'Call Now',
  },
  {
    icon: <FaEnvelope />,
    label: 'Email Address',
    value: 'rhnetworksolutionsknl@gmail.com',
    href: 'mailto:rhnetworksolutionsknl@gmail.com',
    linkLabel: 'Send Email',
  },
  {
    icon: <FaClock />,
    label: 'Working Hours',
    value: 'Monday – Saturday: 9:00 AM – 7:00 PM\nSunday: By Appointment Only',
    href: null,
    linkLabel: null,
  },
];

const subjects = [
  'Networking Solutions',
  'CCTV / Surveillance',
  'Server & Storage',
  'Products Inquiry',
  'AMC Contract',
  'IT Consulting',
  'Other',
];

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

  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Reach out for inquiries, quotes and consultations. Our team responds within 2 business hours."
        breadcrumbs={[{ name: 'Contact' }]}
      />

      <section className="contact-section" ref={sectionRef}>
        <div className="container">

          {/* Top strip */}
          <div className="contact-strip reveal">
            <div className="strip-item">
              <MdSupportAgent className="strip-icon" />
              <div>
                <div className="strip-label">24/7 Support Available</div>
                <div className="strip-val">Emergency IT assistance anytime</div>
              </div>
            </div>
            <div className="strip-divider"></div>
            <div className="strip-item">
              <FaPhoneAlt className="strip-icon" />
              <div>
                <div className="strip-label">Call Us Directly</div>
                <a href="tel:04043057138" className="strip-val strip-link">040 43057138 / 040 40211968</a>
              </div>
            </div>
            <div className="strip-divider"></div>
            <div className="strip-item">
              <FaEnvelope className="strip-icon" />
              <div>
                <div className="strip-label">Email Us</div>
                <a href="mailto:rhnetworksolutionsknl@gmail.com" className="strip-val strip-link">rhnetworksolutionsknl@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Main 2-column */}
          <div className="contact-grid">

            {/* Left: Info */}
            <div className="contact-info-col reveal-left">
              <h2 className="contact-info-heading">Get In Touch</h2>
              <p className="contact-info-subtext">
                Our certified IT engineers are ready to understand your requirements and deliver the right solution — on time, on budget.
              </p>

              <div className="contact-details">
                {contactDetails.map(({ icon, label, value, href, linkLabel }) => (
                  <div key={label} className="contact-detail-card">
                    <div className="cd-icon">{icon}</div>
                    <div className="cd-body">
                      <div className="cd-label">{label}</div>
                      <div className="cd-value" style={{ whiteSpace: 'pre-line' }}>{value}</div>
                      {href && linkLabel && (
                        <a href={href} className="cd-link" target={href.startsWith('http') ? '_blank' : '_self'} rel="noopener noreferrer">
                          {linkLabel} <FaExternalLinkAlt size={10} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div className="contact-form-col reveal-right">
              {submitted ? (
                <div className="contact-success">
                  <div className="success-icon-wrap"><FiCheckCircle /></div>
                  <h3>Message Sent Successfully!</h3>
                  <p>Thank you for contacting RH Network Solutions. Our team will get back to you within 2 business hours.</p>
                  <button className="btn-primary" onClick={() => setSubmitted(false)}>Send Another Message</button>
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-head">
                    <h3 className="form-title">Send Us a Message</h3>
                    <p className="form-subtitle">Fill in the form and we'll respond promptly.</p>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Full Name <span>*</span></label>
                      <input type="text" name="name" required className="form-input" placeholder="John Smith" value={form.name} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Email Address <span>*</span></label>
                      <input type="email" name="email" required className="form-input" placeholder="john@company.com" value={form.email} onChange={handleChange} />
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label">Phone Number</label>
                      <input type="tel" name="phone" className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label className="form-label">Subject <span>*</span></label>
                      <select name="subject" required className="form-input form-select" value={form.subject} onChange={handleChange}>
                        <option value="">Select a subject</option>
                        {subjects.map(s => <option key={s} value={s.toLowerCase().replace(/\s/g, '-')}>{s}</option>)}
                      </select>
                    </div>
                  </div>

                  <div className="form-group">
                    <label className="form-label">Message <span>*</span></label>
                    <textarea
                      name="message" required rows="5"
                      className="form-input form-textarea"
                      placeholder="Describe your requirements, project scope, or any questions you have..."
                      value={form.message} onChange={handleChange}
                    />
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
