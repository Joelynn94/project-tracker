import React, { useState } from 'react';

import './Input.css';

const Input = ({
  className,
  value,
  type = 'text',
  icon,
  onChange,
  helperText,
  ...otherProps
}) => {
  const [focused, setFocused] = useState(false);

  function handleFocus() {
    setFocused(true);
    console.log(focused);
  }

  function handleBlur() {
    setFocused(false);
    console.log(focused);
  }

  return (
    <div className={`ui-form--group ${className ? className : ''}`}>
      {icon ? (
        <span className='ui-form--icon'>
          <i className={`fal fa-${icon}`}></i>
        </span>
      ) : null}
      <input
        className={`ui-form--input ${focused ? 'focused' : ''}`}
        type={type}
        onChange={onChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...otherProps}
      />
      <small className='ui-form--helper-text'>{helperText}</small>
    </div>
  );
};

export default Input;
