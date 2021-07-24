import React from 'react';
import './MenuItem.styles.scss';

const MenuItem = ({ title, imageUrl, id }) => (
  <div className="menu-item">
    <div className="content">
      <h2 className="title">
        {title.toUpperCase()}
      </h2>
      <span className="subtitle">
        SHOP NOW
      </span>
    </div>
  </div>
);

export default MenuItem;
