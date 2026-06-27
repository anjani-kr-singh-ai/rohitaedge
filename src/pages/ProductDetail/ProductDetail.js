import React, { useEffect, useRef } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import {
  FaCopy, FaLaptop, FaPrint, FaVideo, FaFingerprint,
  FaFilm, FaPhoneAlt, FaTv,
  FaCheckCircle, FaTools, FaShieldAlt, FaClock,
  FaTag, FaArrowRight
} from 'react-icons/fa';
import { MdSupportAgent } from 'react-icons/md';
import PageHero from '../../components/PageHero/PageHero';
import ContactCTA from '../../components/ContactCTA/ContactCTA';
import './ProductDetail.css';

const sharedBenefits = [
  { icon: <FaShieldAlt />, title: 'Warranty Assured', desc: 'Complete manufacturer warranty with extended on-site support options.' },
  { icon: <FaTools />, title: 'Expert Installation', desc: 'Professional on-site installation, configuration and user training.' },
  { icon: <FaClock />, title: 'Fast Turnaround', desc: 'Quick procurement with same-day or next-day delivery across Hyderabad.' },
  { icon: <MdSupportAgent />, title: 'AMC Support', desc: 'Annual maintenance contracts with SLA-backed response guarantees.' },
];

const allProducts = {
  photocopier: {
    icon: <FaCopy />,
    title: 'Photocopier',
    subtitle: 'Multifunctional Office Copiers',
    desc: 'High-performance multifunctional photocopiers from globally recognised brands. We supply, install and maintain copiers of all capacities — from small office units to high-volume production machines — with complete after-sales support and AMC packages.',
    specs: [
      'Print Speed: 20 – 70 ppm',
      'Resolution: 600 × 600 dpi',
      'Paper Capacity: 500 – 3,000 sheets',
      'Connectivity: USB, LAN, Wi-Fi',
      'Functions: Print, Copy, Scan, Fax',
      'Paper Size: A3 / A4 / A5',
      'Duplex: Automatic two-sided printing',
      'Monthly Duty Cycle: Up to 150,000 pages',
    ],
    features: [
      'High-speed duplex printing',
      'Network-ready connectivity',
      'Advanced document security',
      'Low toner consumption',
      'Remote management portal',
      'Cloud printing support',
      'Mobile print via AirPrint / Google Cloud',
      'Automatic document feeder (ADF)',
    ],
    brands: ['Canon', 'Kyocera', 'Konica Minolta', 'Ricoh', 'Toshiba', 'Xerox'],
    useCases: ['Corporate Offices', 'Banks & Finance', 'Government Departments', 'Educational Institutions', 'Healthcare Facilities', 'Law Firms'],
  },
  laptops: {
    icon: <FaLaptop />,
    title: 'Laptop & Desktops',
    subtitle: 'Business Computing Solutions',
    desc: 'A wide range of business-grade laptops and desktop computers from leading global brands. We offer bulk procurement, pre-configured OS deployment, asset tagging and long-term service contracts suitable for enterprises of all sizes.',
    specs: [
      'Processor: Intel Core i5 / i7 / i9',
      'RAM: 8 GB – 64 GB DDR4 / DDR5',
      'Storage: 256 GB – 2 TB SSD',
      'Display: 14" – 27" FHD / 4K',
      'OS: Windows 11 Pro / Ubuntu',
      'GPU: Integrated / Discrete (NVIDIA / AMD)',
      'Ports: USB-C, HDMI, Thunderbolt',
      'Warranty: 1 – 3 year on-site support',
    ],
    features: [
      'Business-grade build quality',
      'Extended warranty support',
      'Bulk procurement discounts',
      'Pre-configured OS deployment',
      'Multi-year AMC contracts',
      'Asset tagging & management',
      'Carry-in and on-site repair',
      'Volume software licensing',
    ],
    brands: ['HP', 'Dell', 'Lenovo', 'Asus', 'Acer', 'Apple MacBook'],
    useCases: ['Corporate Offices', 'IT Companies', 'Educational Institutes', 'Government Projects', 'SME & Startups', 'Remote Workforce'],
  },
  printers: {
    icon: <FaPrint />,
    title: 'Laserjet & Dot Matrix Printers',
    subtitle: 'Industrial Print Solutions',
    desc: 'Comprehensive range of laserjet and dot matrix printers for high-volume business printing. Includes professional installation, driver configuration, AMC and guaranteed consumable supply to keep your operations running without interruption.',
    specs: [
      'Print Speed: 25 – 50 ppm (Laserjet)',
      'Resolution: 1200 × 1200 dpi',
      'Monthly Duty Cycle: Up to 100,000 pages',
      'Interface: USB 2.0, Ethernet, Wi-Fi',
      'Paper: A4, A3, Continuous Forms',
      'Cartridge Life: 3,000 – 12,000 pages',
      'Dot Matrix: 9-pin / 24-pin models',
      'Forms: Single-part / Multi-part',
    ],
    features: [
      'High-volume printing capability',
      'Lowest cost per page',
      'Continuous stationery support',
      'Wired & wireless network printing',
      'Multi-part forms for dot matrix',
      'Toner & ribbon supply contracts',
      'Priority AMC response',
      'On-site repair services',
    ],
    brands: ['HP LaserJet', 'Canon LBP', 'Epson LQ', 'TVS-E', 'Pantum', 'Brother'],
    useCases: ['Accounting & Finance', 'Banks & Insurance', 'Government Offices', 'Logistics & Warehousing', 'Hospitals & Clinics', 'Manufacturing'],
  },
  cctv: {
    icon: <FaVideo />,
    title: 'CCTV Systems & Video Wall',
    subtitle: 'Complete Surveillance Solutions',
    desc: 'End-to-end CCTV surveillance solutions from site survey and design to installation and commissioning. We supply IP and analog cameras, NVR/DVR systems and large-format video walls for comprehensive, uninterrupted security coverage.',
    specs: [
      'Resolution: 2 MP, 4 MP, 8 MP (4K UHD)',
      'Storage: NVR / DVR up to 128 channels',
      'Night Vision: 30 m – 100 m IR range',
      'Video Analytics: Motion, Face, Intrusion',
      'Video Wall: 3×3 to 6×6 configurations',
      'Protocol: ONVIF / H.265+ compression',
      'Remote Access: Mobile app / Web browser',
      'Power: PoE IEEE 802.3af / at',
    ],
    features: [
      '4K IP camera systems',
      'AI-powered video analytics',
      'Remote monitoring via mobile',
      'Weatherproof IP67 cameras',
      'ONVIF-compliant equipment',
      'Video wall display solutions',
      '24×7 continuous recording',
      'Access control integration',
    ],
    brands: ['Hikvision', 'Dahua', 'CP Plus', 'Axis', 'Bosch', 'Hanwha'],
    useCases: ['Corporate Premises', 'Banks & ATMs', 'Hospitals & Clinics', 'Schools & Colleges', 'Manufacturing Plants', 'Government Buildings'],
  },
  biometric: {
    icon: <FaFingerprint />,
    title: 'Biometric Devices',
    subtitle: 'Access Control & Attendance',
    desc: 'Multi-modal biometric systems for employee attendance tracking, door access control and visitor management. Seamlessly integrates with leading payroll and HR software platforms for fully automated workforce management.',
    specs: [
      'Technology: Fingerprint, Face, Card, PIN',
      'Capacity: 5,000 – 100,000 users',
      'Verification Speed: < 1 second',
      'Communication: TCP/IP, USB, RS-485',
      'Battery Backup: Up to 8 hours',
      'Face: 3D Liveness Detection',
      'Card: RFID, Mifare, HID',
      'Display: 3.5" – 5" TFT colour screen',
    ],
    features: [
      'Multi-modal biometric authentication',
      'Real-time attendance sync',
      'Payroll software integration',
      'Door access control',
      'Anti-spoofing technology',
      'Web-based management dashboard',
      'Multi-shift schedule support',
      'Visitor management module',
    ],
    brands: ['ZKTeco', 'Realtime', 'Secureye', 'eSSL', 'BIOMAX', 'Suprema'],
    useCases: ['Corporate Offices', 'Factories & Warehouses', 'Schools & Colleges', 'Hospitals', 'Banks', 'Government Facilities'],
  },
  projectors: {
    icon: <FaFilm />,
    title: 'Projectors',
    subtitle: 'Presentation & Display Solutions',
    desc: 'High-brightness projectors for boardrooms, classrooms, auditoriums and training centres. We provide full installation including ceiling mounting, motorised screen setup, cable concealment and on-site calibration for perfect image quality.',
    specs: [
      'Brightness: 3,000 – 8,000 ANSI Lumens',
      'Resolution: WXGA, Full HD, 4K UHD',
      'Throw Ratio: Short / Standard / Long',
      'Lamp Life: 10,000 – 20,000 hrs (LED)',
      'Connectivity: HDMI, VGA, USB, Wi-Fi',
      'Contrast Ratio: 10,000:1 – 100,000:1',
      'Projection Size: 60" – 300"',
      'Installation: Ceiling / Table / Floor',
    ],
    features: [
      'Interactive projectors available',
      'Ultra-short throw models',
      'Wireless screen mirroring',
      'Long-life laser light source',
      'Ceiling mount & bracket included',
      'Motorised projection screen supply',
      'Smart meeting room control',
      'On-site calibration & training',
    ],
    brands: ['Epson', 'BenQ', 'Optoma', 'Sony', 'Panasonic', 'NEC'],
    useCases: ['Boardrooms', 'Classrooms & Lecture Halls', 'Auditoriums', 'Training Centres', 'Retail & Advertising', 'Home Theatre'],
  },
  intercom: {
    icon: <FaPhoneAlt />,
    title: 'IP Intercom System',
    subtitle: 'Smart Entry Communication',
    desc: 'SIP-based IP video door phones and intercom systems for apartments, offices and gated communities. Full integration with PABX, access control and mobile apps for remote door management from anywhere.',
    specs: [
      'Protocol: SIP / H.323',
      'Video: 1080p HD video calling',
      'Audio: Full-duplex wideband',
      'Integration: PABX, Access Control',
      'Power: PoE IEEE 802.3af',
      'Camera: Wide-angle 160° FOV lens',
      'Capacity: Up to 1,000 extensions',
      'Weather Rating: IP54 / IK08',
    ],
    features: [
      'HD video door phone',
      'Multi-apartment support',
      'Mobile app integration',
      'Remote door unlock',
      'Cloud-based management',
      'Visitor photo capture & log',
      'PABX & SIP PBX integration',
      'Fail-safe electric lock control',
    ],
    brands: ['Akuvox', '2N', 'Aiphone', 'Doorbird', 'Fermax', 'Comelit'],
    useCases: ['Gated Communities', 'Apartment Complexes', 'Corporate Buildings', 'Banks & Finance', 'Hotels', 'Hospitals'],
  },
  led: {
    icon: <FaTv />,
    title: 'Large LED Display Panel',
    subtitle: 'Commercial Display Solutions',
    desc: 'Indoor and outdoor large-format LED display panels for advertising, digital signage, control rooms and events. We offer custom pixel pitches, cabinet configurations and full installation with content management software.',
    specs: [
      'Pixel Pitch: P1.5 to P10',
      'Brightness: 500 – 10,000 nits',
      'Resolution: Full HD to 8K',
      'Refresh Rate: 3,840 Hz',
      'Viewing Angle: 160° H / 160° V',
      'Cabinet: 500×500 / 500×1000 mm',
      'Power Consumption: < 300 W/m²',
      'IP Rating: IP40 Indoor / IP65 Outdoor',
    ],
    features: [
      'Indoor & outdoor variants',
      'Seamless splicing design',
      'Ultra-slim 65 mm panel depth',
      '24×7 continuous operation',
      'Remote content management',
      'Custom size & shape fabrication',
      'Auto brightness adjustment',
      'Professional wiring & installation',
    ],
    brands: ['Absen', 'Unilumin', 'Leyard', 'Samsung', 'LG', 'Barco'],
    useCases: ['Retail & Shopping Malls', 'Stadiums & Arenas', 'Corporate Lobbies', 'Control Rooms', 'Airports & Transit', 'Outdoor Advertising'],
  },
};

const productOrder = ['photocopier', 'laptops', 'printers', 'cctv', 'biometric', 'projectors', 'intercom', 'led'];

const productTitles = {
  photocopier: 'Photocopier',
  laptops: 'Laptop & Desktops',
  printers: 'Laserjet & Dot Matrix Printers',
  cctv: 'CCTV Systems & Video Wall',
  biometric: 'Biometric Devices',
  projectors: 'Projectors',
  intercom: 'IP Intercom System',
  led: 'Large LED Display Panel',
};

const ProductDetail = () => {
  const { id } = useParams();
  const product = allProducts[id];
  const sectionRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [id]);

  if (!product) return <Navigate to="/products" replace />;

  const related = productOrder.filter(pid => pid !== id).slice(0, 3);

  return (
    <div>
      <PageHero
        title={product.title}
        subtitle={product.subtitle}
        breadcrumbs={[{ name: 'Products', path: '/products' }, { name: product.title }]}
      />

      <section className="pd-section" ref={sectionRef}>
        <div className="container">

          {/* Overview */}
          <div className="pd-overview reveal">
            {/* Left: Description + Features */}
            <div className="pd-left">
              <div className="pd-icon-wrap">{product.icon}</div>
              <p className="pd-desc">{product.desc}</p>
              <div className="pd-features-list">
                {product.features.map(f => (
                  <div key={f} className="pd-feature-item">
                    <FaCheckCircle className="pd-check" />
                    <span>{f}</span>
                  </div>
                ))}
              </div>
              <div className="pd-actions">
                <Link to="/contact" className="btn-primary">
                  Request a Quote
                  <FaArrowRight size={13} />
                </Link>
                <Link to="/contact" className="btn-outline">Call Us Now</Link>
              </div>
            </div>

            {/* Right: Specs Card */}
            <div className="pd-right">
              <div className="pd-specs-card">
                <div className="pd-specs-header">
                  <span className="section-tag" style={{ marginBottom: 0 }}>Specifications</span>
                </div>
                <ul className="pd-specs-list">
                  {product.specs.map(s => (
                    <li key={s} className="pd-spec-item">
                      <span className="pd-spec-dot"></span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="pd-benefits-wrap reveal">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: 32 }}>
              <span className="section-tag">Why Buy From Us</span>
              <h2 className="section-title">What You <span>Get With Every Purchase</span></h2>
            </div>
            <div className="pd-benefits-grid">
              {sharedBenefits.map(b => (
                <div key={b.title} className="pd-benefit-card">
                  <div className="pd-benefit-icon">{b.icon}</div>
                  <h3 className="pd-benefit-title">{b.title}</h3>
                  <p className="pd-benefit-desc">{b.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Brands */}
          <div className="pd-brands-wrap reveal">
            <div className="pd-brands-header">
              <FaTag />
              <span>Supported Brands</span>
            </div>
            <div className="pd-brands-strip">
              {product.brands.map(b => (
                <span key={b} className="pd-brand-tag">{b}</span>
              ))}
            </div>
          </div>

          {/* Use Cases */}
          <div className="pd-usecases-wrap reveal">
            <div className="section-header" style={{ textAlign: 'center', marginBottom: 28 }}>
              <span className="section-tag">Applications</span>
              <h2 className="section-title">Industries & <span>Use Cases</span></h2>
            </div>
            <div className="pd-usecases-grid">
              {product.useCases.map(u => (
                <div key={u} className="pd-usecase-card">
                  <FaCheckCircle className="pd-uc-icon" />
                  <span>{u}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Products */}
          <div className="pd-related-wrap reveal">
            <div className="section-header" style={{ marginBottom: 24 }}>
              <span className="section-tag">Also Available</span>
              <h2 className="section-title">Related <span>Products</span></h2>
            </div>
            <div className="pd-related-grid">
              {related.map(pid => (
                <Link key={pid} to={`/products/${pid}`} className="pd-related-card">
                  <div className="pd-related-icon">{allProducts[pid].icon}</div>
                  <div className="pd-related-info">
                    <div className="pd-related-title">{allProducts[pid].title}</div>
                    <div className="pd-related-sub">{allProducts[pid].subtitle}</div>
                  </div>
                  <FaArrowRight className="pd-related-arrow" />
                </Link>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: 24 }}>
              <Link to="/products" className="btn-outline">View All Products</Link>
            </div>
          </div>

        </div>
      </section>

      <ContactCTA />
    </div>
  );
};

export default ProductDetail;
