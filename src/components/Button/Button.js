import React from 'react';

import './Button.css';

const STYLES = [
  'btn--default',
  'btn--primary',
  'btn--secondary',
  'btn--danger',
  'btn--success',
  'btn--dark',
];
const ICONS = [
  'arrow-down',
  'arrow-right',
  'arrow-left',
  'calendar',
  'check',
  'delete',
  'moon',
  'plus',
  'sun',
];

const Button = ({ children, type, disabled, onClick, buttonStyle, icon }) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  return (
    <button
      className={`btn ${checkButtonStyle}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
