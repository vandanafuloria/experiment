import React from 'react';
import './BaboskiLogo.css';

const BaboskiLogo = ({ size = 'medium', color = 'dark' }) => {
  return (
    <div className={`baboski-logo ${size} ${color}`}>
      <span className="baboski-text">BABOSKI</span>
    </div>
  );
};

export default BaboskiLogo;