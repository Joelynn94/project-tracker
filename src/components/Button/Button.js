import React from 'react';

import './Button.css';

const STYLES = [
  'btn--default',
  'btn--primary',
  'btn--danger',
  'btn--success',
  'btn--dark',
  'btn--light',
  'btn--default--outline',
  'btn--primary--outline',
  'btn--warning--outline',
  'btn--danger--outline',
  'btn--success--outline',
  'btn--dark--outline',
  'btn--light--outline',
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

  const checkButtonIcon = ICONS.includes(icon) ? icon : '';

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
