import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const products = [
  { name: 'Photocopier', path: '/products/photocopier' },
  { name: 'Laptop & Desktops', path: '/products/laptops' },
  { name: 'Laserjet & Dot Matrix Printers', path: '/products/printers' },
  { name: 'CCTV Systems & Video Wall', path: '/products/cctv' },
  { name: 'Biometric Devices', path: '/products/biometric' },
  { name: 'Projectors', path: '/products/projectors' },
  { name: 'IP Intercom System', path: '/products/intercom' },
  { name: 'Large LED Display Panel', path: '/products/led' },
];

const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'Products', path: '/products', dropdown: products },
  { name: 'Networking Solutions', path: '/networking-solutions' },
  { name: 'Services', path: '/services' },
  { name: 'About Us', path: '/about' },
  { name: 'Brands', path: '/clients' },
  { name: 'Contact', path: '/contact' },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
      <div className="navbar-inner container">
        {/* Logo */}
        <Link to="/" className="navbar-logo">
          <img src="/logo.png" alt="RH Network Solutions" className="logo-img" />
          <div className="logo-text-wrap">
            <span className="logo-name">RH Network Solutions</span>
            <span className="logo-tagline">IT Communications & Technology</span>
          </div>
        </Link>

        {/* Desktop Menu */}
        <ul className="navbar-links">
          {navLinks.map((link) =>
            link.dropdown ? (
              <li key={link.name} className="nav-item has-dropdown" ref={dropdownRef}>
                <button
                  className={`nav-link dropdown-trigger ${location.pathname === link.path ? 'active' : ''}`}
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  aria-expanded={dropdownOpen}
                >
                  {link.name}
                  <svg className={`chevron ${dropdownOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div className={`dropdown-menu ${dropdownOpen ? 'open' : ''}`}>
                  <div className="dropdown-inner">
                    {link.dropdown.map((item) => (
                      <Link key={item.name} to={item.path} className="dropdown-item">
                        <span className="dropdown-dot"></span>
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </li>
            ) : (
              <li key={link.name} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${location.pathname === link.path ? 'active' : ''}`}
                >
                  {link.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* CTA Button */}
        <Link to="/contact" className="navbar-cta btn-primary">
          Get Quote
        </Link>

        {/* Hamburger */}
        <button
          className={`hamburger ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
        {navLinks.map((link) =>
          link.dropdown ? (
            <div key={link.name} className="mobile-dropdown">
              <button
                className="mobile-nav-link mobile-dropdown-trigger"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                {link.name}
                <svg className={`chevron ${dropdownOpen ? 'open' : ''}`} width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>
              {dropdownOpen && (
                <div className="mobile-sub">
                  {link.dropdown.map((item) => (
                    <Link key={item.name} to={item.path} className="mobile-sub-link">
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <Link
              key={link.name}
              to={link.path}
              className={`mobile-nav-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.name}
            </Link>
          )
        )}
        <Link to="/contact" className="btn-primary mobile-cta">Get Quote</Link>
      </div>
    </nav>
  );
};

export default Navbar;
