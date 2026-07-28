import React from 'react';
import './BrandName.css';

/**
 * Company motto with brand colours:
 * "Building Visions," dark blue (same as Rohitha), "Delivering Excellence" orange (same as Edge).
 */
export const BrandMotto = ({ className = '' }) => (
  <span className={`brand-motto ${className}`}>
    <span className="motto-blue">Building Visions,</span>{' '}
    <span className="motto-orange">Delivering Excellence</span>
  </span>
);

/**
 * Company name rendered with brand colours:
 * "Rohitha" dark blue, "Edge" orange, "Enterprises Private Limited" black.
 *
 * @param stacked  put "Enterprises Private Limited" on its own line below "RohithaEdge"
 * @param motto    show the motto line beneath the name
 */
const BrandName = ({ className = '', stacked = false, motto = false }) => (
  <span className={`brand-name ${stacked ? 'brand-stacked' : ''} ${className}`}>
    <span className="brand-mark">
      <span className="brand-rohitha">Rohitha</span><span className="brand-edge">Edge</span>
    </span>{' '}
    <span className="brand-rest">ENTERPRISES PRIVATE LIMITED</span>
    {motto && <BrandMotto />}
  </span>
);

export default BrandName;
