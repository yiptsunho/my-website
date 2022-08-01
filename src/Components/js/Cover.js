import React from 'react';
import '../../App.css';

function Cover({ className, pageName }) {
  return (
    <div>
      <h1 className={`container-fluid bg ${className}`}>{pageName}</h1>
    </div>
  )
};

export default Cover;
