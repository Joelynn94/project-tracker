import React, { useState } from 'react';

import sunIcon from '../../assets/icons/icon-sun.svg';
import moonIcon from '../../assets/icons/icon-moon.svg';
import './ToggleSwitch.css';

const ToggleSwitch = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = () => {
    setIsToggled(!isToggled);
  };

  return (
    <div className='ui-toggle'>
      <img src={sunIcon} alt='light theme icon' />
      <label className='ui-toggle__label'>
        <input
          className='ui-toggle__checkbox'
          type='checkbox'
          checked={isToggled}
          onChange={handleToggle}
        />
        <span className='ui-toggle__switch'></span>
      </label>
      <img src={moonIcon} alt='dark theme icon' />
    </div>
  );
};

export default ToggleSwitch;
