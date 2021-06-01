import React, { useState } from 'react';

import './Dropdown.css';

const Dropdown = ({ title, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  function handleOnClick(item) {}

  return (
    <div className='ui-dropdown--container'>
      <button
        className='ui-dropdown--header'
        tabIndex={0}
        onKeyPress={() => toggle(!isOpen)}
        onClick={() => toggle(!isOpen)}
      >
        <div className='ui-dropdown--title'>
          <p>{title}</p>
        </div>
        <div className='ui-dropdown--action'>
          <p>{isOpen ? 'Close' : 'Open'}</p>
        </div>
      </button>
      {isOpen && (
        <ul className='ui-dropdown--list'>
          {items.map((item) => (
            <li className='ui-dropdown--item' key={item.id}>
              <button
                className='ui-dropdown--button'
                onClick={() => handleOnClick(item)}
              >
                <span>{item.value}</span>
                <span>Selected...</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Dropdown;
