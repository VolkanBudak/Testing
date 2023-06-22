import React from 'react';

const Button = ({ color, disabled, children, onClick }) => {
  return (
    <button style={{ backgroundColor: color }} disabled={disabled} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
