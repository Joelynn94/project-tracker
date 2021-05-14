import React from 'react';

import './TableCell.css';

const TableCell = ({ children }) => {
  return <td className='ui-table--cell'>{children}</td>;
};

export default TableCell;
