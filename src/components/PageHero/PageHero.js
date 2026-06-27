import React from 'react';
import { Link } from 'react-router-dom';
import './PageHero.css';

const PageHero = ({ title, subtitle, breadcrumbs }) => {
  return (
    <section className="page-hero">
      <div className="container page-hero-container">
        <div className="breadcrumb">
          <Link to="/" className="bc-link">Home</Link>
          {breadcrumbs && breadcrumbs.map((crumb, i) => (
            <React.Fragment key={i}>
              <span className="bc-sep">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </span>
              {crumb.path ? (
                <Link to={crumb.path} className="bc-link">{crumb.name}</Link>
              ) : (
                <span className="bc-current">{crumb.name}</span>
              )}
            </React.Fragment>
          ))}
        </div>
        <h1 className="page-hero-title">{title}</h1>
        {subtitle && <p className="page-hero-subtitle">{subtitle}</p>}
      </div>
    </section>
  );
};

export default PageHero;
