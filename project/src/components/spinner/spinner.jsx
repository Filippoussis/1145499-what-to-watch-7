import React from 'react';
import './spinner.css';

function Spinner() {
  return (
    <div className="spinner-box" data-testid='spinner'>
      <div className="pulse-container">
        <div className="pulse-bubble pulse-bubble-1"></div>
        <div className="pulse-bubble pulse-bubble-2"></div>
        <div className="pulse-bubble pulse-bubble-3"></div>
      </div>
    </div>
  );
}

export default Spinner;
