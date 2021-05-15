import React from 'react';

import './Checkbox.css';

const Checkbox = () => {
  return (
    <label className='ui-checkbox'>
      <input type='checkbox' />
      <span className='ui-checkbox--checkmark'></span>
    </label>
  );
};

export default Checkbox;
