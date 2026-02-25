import React from 'react';
import { Link } from 'react-router-dom';

const PageHeader = ({ title, subtitle, breadcrumbItems }) => {
  return (
    <div className="page-header">
      <div className="container">
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        {breadcrumbItems && (
          <div className="breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumbItems.map((item, index) => (
              <React.Fragment key={index}>
                <span>/</span>
                {item.link ? (
                  <Link to={item.link}>{item.label}</Link>
                ) : (
                  <span>{item.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default PageHeader;
