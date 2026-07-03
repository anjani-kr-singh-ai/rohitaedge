import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiClock, FiChevronRight, FiYoutube } from 'react-icons/fi';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="container footer-grid">

          {/* Company Info */}
          <div className="footer-col footer-brand">
            <Link to="/" className="footer-logo">
              <img src="/logo.png" alt="Rohitha Edge Enterprises" className="footer-logo-img" />
              <div>
                <div className="footer-logo-name">Rohitha Edge</div>
                <div className="footer-logo-sub">IT Communications & Technology</div>
              </div>
            </Link>
            <p className="footer-tagline">Building Visions, Delivering Excellence</p>
            <div className="footer-address">
              <div className="footer-address-line">
                <FiMapPin size={14} />
                <span>H.No. 87/1317, Shop No. 02, 4th Class Employees Colony,<br />Nagireddy Colony Road No. 7, Revenue Ward No. 87,<br />Opp: Bishop Church, Kurnool – 518002,<br />Andhra Pradesh, India</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Quick Links</h4>
            <ul className="footer-links">
              {[
                ['Products', '/products'],
                ['Networking Solutions', '/networking-solutions'],
                ['Services', '/services'],
                ['About Us', '/about'],
                ['Brands', '/clients'],
                ['Contact', '/contact'],
              ].map(([name, path]) => (
                <li key={name}>
                  <Link to={path} className="footer-link">
                    <FiChevronRight size={12} />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="footer-col">
            <h4 className="footer-col-title">Products</h4>
            <ul className="footer-links">
              {['Photocopier', 'Laptop & Desktops', 'Laserjet Printers', 'CCTV Systems', 'Biometric Devices', 'Projectors', 'IP Intercom', 'LED Display Panel'].map(name => (
                <li key={name}>
                  <Link to="/products" className="footer-link">
                    <FiChevronRight size={12} />
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-col">
            <h4 className="footer-col-title">Contact Us</h4>
            <div className="footer-contact-list">
              <a href="tel:+919885910396" className="footer-contact-item">
                <FiPhone size={14} />
                <span>+91 98859 10396{'\n'}+91 99485 22001</span>
              </a>
              <a href="mailto:rohithaedgeenterprisespvtltd@gmail.com" className="footer-contact-item">
                <FiMail size={14} />
                <span>rohithaedgeenterprisespvtltd@gmail.com</span>
              </a>
              <div className="footer-hours">
                <FiClock size={14} />
                <span>Mon – Sat: 9:00 AM – 7:00 PM</span>
              </div>
            </div>
            <div className="footer-legal-links">
              <Link to="/contact" className="footer-link-small">Terms & Conditions</Link>
              <span>·</span>
              <Link to="/about" className="footer-link-small">Certification</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container footer-bottom-inner">
          <span>© {year} Rohitha Edge Enterprises Private Limited. All Rights Reserved.</span>
          <span className="footer-made">Made with care in Kurnool, Andhra Pradesh</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
