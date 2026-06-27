import React from 'react';
import { Link } from 'react-router-dom';
import { FiMapPin, FiPhone, FiMail, FiClock, FiChevronRight, FiLinkedin, FiFacebook, FiInstagram, FiYoutube } from 'react-icons/fi';
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
              <div className="footer-logo-hex">RH</div>
              <div>
                <div className="footer-logo-name">RH Network</div>
                <div className="footer-logo-sub">Solutions</div>
              </div>
            </Link>
            <p className="footer-tagline">Powering Businesses Through Smart Technology</p>
            <div className="footer-address">
              <div className="footer-address-line">
                <FiMapPin size={14} />
                <span>#10-3-32/9/15, 2nd Floor, Umakanth Commercial Complex,<br />Opp. Bandhan Bank, East Marredpally,<br />Secunderabad – 500026, Telangana</span>
              </div>
            </div>
            <div className="footer-socials">
              {[
                { label: 'LinkedIn', icon: <FiLinkedin size={16} /> },
                { label: 'Facebook', icon: <FiFacebook size={16} /> },
                { label: 'Instagram', icon: <FiInstagram size={16} /> },
                { label: 'YouTube', icon: <FiYoutube size={16} /> },
              ].map(({ label, icon }) => (
                <a key={label} href="#!" className="social-icon" aria-label={label}>{icon}</a>
              ))}
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
                ['Clients', '/clients'],
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
              <a href="tel:04043057138" className="footer-contact-item">
                <FiPhone size={14} />
                <span>040 43057138{'\n'}040 40211968</span>
              </a>
              <a href="mailto:rhnetworksolutionsknl@gmail.com" className="footer-contact-item">
                <FiMail size={14} />
                <span>rhnetworksolutionsknl@gmail.com</span>
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
          <span>© {year} RH Network Solutions. All Rights Reserved.</span>
          <span className="footer-made">Made with care in Secunderabad, Telangana</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
