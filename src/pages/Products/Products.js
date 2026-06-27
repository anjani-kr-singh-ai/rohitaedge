import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FiPrinter, FiMonitor, FiCamera, FiLock, FiFilm, FiPhone, FiTv, FiCopy } from 'react-icons/fi';
import PageHero from '../../components/PageHero/PageHero';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import './Products.css';

const products = [
  {
    id: 'photocopier',
    icon: <FiCopy />,
    title: 'Photocopier',
    subtitle: 'Multifunctional Office Copiers',
    color: '#0055b3',
    specs: ['Print Speed: 20-70 ppm', 'Resolution: 600x600 dpi', 'Paper Capacity: 500-3000 sheets', 'Connectivity: USB, LAN, WiFi', 'Functions: Print, Copy, Scan, Fax'],
    features: ['High-speed duplex printing', 'Network-ready connectivity', 'Advanced security features', 'Low toner consumption', 'Remote management'],
    brands: ['Canon', 'Kyocera', 'Konica Minolta', 'Ricoh'],
  },
  {
    id: 'laptops',
    icon: <FiMonitor />,
    title: 'Laptop & Desktops',
    subtitle: 'Business Computing Solutions',
    color: '#0077e6',
    specs: ['Processor: Intel Core i5/i7/i9', 'RAM: 8GB – 64GB DDR4', 'Storage: 256GB – 2TB SSD', 'Display: 14" – 27" FHD/4K', 'OS: Windows 11 Pro'],
    features: ['Business-grade durability', 'Extended warranty support', 'Bulk procurement deals', 'Pre-configured deployment', 'Multi-year service contracts'],
    brands: ['HP', 'Dell', 'Lenovo', 'Asus'],
  },
  {
    id: 'printers',
    icon: <FiPrinter />,
    title: 'Laserjet & Dot Matrix Printers',
    subtitle: 'Industrial Print Solutions',
    color: '#0055b3',
    specs: ['Print Speed: 25-50 ppm', 'Resolution: 1200x1200 dpi', 'Monthly Duty: 15,000-100,000 pages', 'Interface: USB 2.0, Ethernet', 'Paper: A4, A3, Continuous Forms'],
    features: ['High-volume printing capability', 'Low cost per page', 'Continuous stationery support', 'Network printing', 'Dot matrix for multi-part forms'],
    brands: ['HP LaserJet', 'Canon LBP', 'Epson LQ', 'TVS-E'],
  },
  {
    id: 'cctv',
    icon: <FiCamera />,
    title: 'CCTV Systems & Video Wall',
    subtitle: 'Complete Surveillance Solutions',
    color: '#0077e6',
    specs: ['Resolution: 2MP, 4MP, 8MP (4K)', 'Storage: NVR/DVR up to 128 channels', 'Night Vision: 30m – 100m IR range', 'Video Analytics: Motion, Face, Intrusion', 'Video Wall: 3x3 to 6x6 configurations'],
    features: ['4K IP camera systems', 'AI-powered video analytics', 'Remote monitoring via mobile', 'Weatherproof IP67 cameras', 'ONVIF compliant systems'],
    brands: ['Hikvision', 'Dahua', 'CP Plus', 'Axis'],
  },
  {
    id: 'biometric',
    icon: <FiLock />,
    title: 'Biometric Devices',
    subtitle: 'Access Control & Attendance',
    color: '#0055b3',
    specs: ['Technology: Fingerprint, Face, Card, PIN', 'Capacity: 5000-100,000 users', 'Verification Speed: < 1 second', 'Communication: TCP/IP, USB, RS485', 'Battery Backup: Up to 8 hours'],
    features: ['Multi-modal biometric authentication', 'Real-time attendance sync', 'Integration with payroll software', 'Door access control', 'Anti-spoofing technology'],
    brands: ['ZKTeco', 'Realtime', 'Secureye', 'eSSL'],
  },
  {
    id: 'projectors',
    icon: <FiFilm />,
    title: 'Projectors',
    subtitle: 'Presentation & Display Solutions',
    color: '#0077e6',
    specs: ['Brightness: 3000-8000 ANSI Lumens', 'Resolution: WXGA, Full HD, 4K', 'Throw Ratio: Short to Long throw', 'Lamp Life: 10,000-20,000 hours (LED)', 'Connectivity: HDMI, VGA, USB, WiFi'],
    features: ['Interactive projectors available', 'Ultra-short throw models', 'Wireless screen mirroring', 'Long-life laser light source', 'Professional installation & calibration'],
    brands: ['Epson', 'BenQ', 'Optoma', 'Sony'],
  },
  {
    id: 'intercom',
    icon: <FiPhone />,
    title: 'IP Intercom System',
    subtitle: 'Smart Entry Communication',
    color: '#0055b3',
    specs: ['Protocol: SIP/H.323', 'Video: 1080p HD video calling', 'Audio: Full-duplex audio', 'Integration: PABX, Access Control', 'PoE: IEEE 802.3af powered'],
    features: ['HD video door phones', 'Multi-apartment support', 'Mobile app integration', 'Remote door unlock', 'Cloud-based management'],
    brands: ['Akuvox', '2N', 'Aiphone', 'Doorbird'],
  },
  {
    id: 'led',
    icon: <FiTv />,
    title: 'Large LED Display Panel',
    subtitle: 'Commercial Display Solutions',
    color: '#0077e6',
    specs: ['Pixel Pitch: P1.5 to P10', 'Brightness: 500-10,000 nits', 'Resolution: FHD to 8K', 'Refresh Rate: 3840 Hz', 'Viewing Angle: 160° H / 160° V'],
    features: ['Indoor & outdoor variants', 'Seamless splicing design', 'Ultra-slim panel design', '24/7 continuous operation', 'Remote content management'],
    brands: ['Absen', 'Unilumin', 'Leyard', 'Samsung'],
  },
];

const Products = () => {
  const sectionRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="products-page">
      <PageHero
        title="Our Products"
        subtitle="Premium hardware and technology products from leading global brands with complete installation, warranty and support."
        breadcrumbs={[{ name: 'Products' }]}
      />
      <section className="products-section" ref={sectionRef}>
        <div className="container">
          <div className="products-grid">
            {products.map((p, i) => (
              <div key={p.id} id={p.id} className="product-card reveal" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="product-card-header">
                  <div className="product-icon-wrap" style={{ color: p.color, background: p.color + '12' }}>{p.icon}</div>
                  <div>
                    <h3 className="product-title">{p.title}</h3>
                    <div className="product-subtitle">{p.subtitle}</div>
                  </div>
                </div>
                <div className="product-card-body">
                  <div className="product-section-label">Specifications</div>
                  <ul className="product-specs">
                    {p.specs.map(s => <li key={s}>{s}</li>)}
                  </ul>
                  <div className="product-section-label">Key Features</div>
                  <ul className="product-features">
                    {p.features.map(f => (
                      <li key={f}>
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={p.color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>
                  <div className="product-brands">
                    <span className="product-section-label">Brands: </span>
                    {p.brands.map(b => <span key={b} className="brand-tag">{b}</span>)}
                  </div>
                  <Link to="/contact" className="product-enquiry-btn">
                    Enquire Now
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14M12 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <ContactCTA />
    </div>
  );
};

export default Products;
