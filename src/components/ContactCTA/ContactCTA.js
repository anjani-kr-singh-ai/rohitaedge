import React from 'react';
import { Link } from 'react-router-dom';
import { FaPhoneAlt, FaEnvelope, FaCommentDots } from 'react-icons/fa';
import './ContactCTA.css';

const ContactCTA = () => {
  return (
    <section className="cta-section">
      <div className="container cta-inner">
        <div className="cta-badge">
          <span className="badge-dot"></span>
          Ready to Transform Your IT Infrastructure?
        </div>
        <h2 className="cta-title">Let's Build Your IT<br /><span>Infrastructure Together</span></h2>
        <p className="cta-subtitle">
          Get in touch with our certified engineers today. We'll analyze your requirements and deliver a customized solution that fits your budget.
        </p>
        <div className="cta-actions">
          <Link to="/contact" className="btn-primary cta-btn-primary">
            <FaCommentDots />
            Request Quote
          </Link>
          <Link to="/contact" className="btn-outline">
            <FaPhoneAlt />
            Contact Now
          </Link>
        </div>
        <div className="cta-contact-row">
          <a href="tel:+919885910396" className="cta-contact-item">
            <FaPhoneAlt size={13} />
            +91 98859 10396
          </a>
          <span className="cta-sep">|</span>
          <a href="mailto:rhnetworksolutionsknl@gmail.com" className="cta-contact-item">
            <FaEnvelope size={13} />
            rhnetworksolutionsknl@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;
