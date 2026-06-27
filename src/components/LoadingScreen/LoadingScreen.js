import React, { useEffect, useState } from 'react';
import './LoadingScreen.css';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) { clearInterval(interval); return 100; }
        return prev + Math.random() * 15;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="loading-screen">
      <div className="loading-content">
        <div className="loading-logo">
          <div className="logo-icon">
            <span className="logo-letters">RH</span>
          </div>
          <div className="logo-text">
            <span className="logo-main">RH NETWORK</span>
            <span className="logo-sub">SOLUTIONS</span>
          </div>
        </div>
        <div className="loading-tagline">Powering Businesses Through Smart Technology</div>
        <div className="loading-bar-wrap">
          <div className="loading-bar" style={{ width: `${Math.min(progress, 100)}%` }}></div>
        </div>
        <div className="loading-status">Loading... {Math.min(Math.round(progress), 100)}%</div>
      </div>
    </div>
  );
};

export default LoadingScreen;
