import React, { useState } from 'react';

import './Dropdown.css';

const Dropwdown = ({ children, title, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen(!isOpen);
  }

  function handleOnClick(item) {}

  return (
    <div className='ui-dropdown--container'>
      <div
        className='ui-dropdown--header'
        tabIndex={0}
        role='button'
        onKeyPress={() => toggle(!isOpen)}
        onClick={() => toggle(!isOpen)}
      >
        <div className='ui-dropdown--title'>
          <p>{title}</p>
        </div>
        <div className='ui-dropdown--action'>
          <p>{isOpen ? 'Close' : 'Open'}</p>
        </div>
      </div>
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

export default Dropwdown;