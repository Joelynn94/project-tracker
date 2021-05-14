import React from 'react';

import './TableBody.css';

const TableBody = ({ children }) => {
  return <tbody className='ui-table--body'>{children}</tbody>;
};

export default TableBody;
