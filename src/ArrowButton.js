import React from 'react';

const ArrowButton = ({ direction, onClick, disabled }) => {
  return (
    <button
      className={`arrow-button ${direction}`}
      onClick={onClick}
      disabled={disabled}
    >
      {direction === 'left' ?  String.fromCharCode(8249) : String.fromCharCode(8250)}
    </button>
  );
};

export default ArrowButton;
// &#8250;