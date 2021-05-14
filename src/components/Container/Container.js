import React from 'react';

const Container = ({ children, className, ...otherProps }) => {
  return (
    <div
      className={`ui-container ${className ? className : ''}`}
      {...otherProps}
    >
      {children}
    </div>
  );
};

export default Container;
