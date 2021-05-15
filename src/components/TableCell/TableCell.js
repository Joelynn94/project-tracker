import React from 'react';

import './TableCell.css';

const TableCell = ({ children, ...otherProps }) => {
  return (
    <td className='ui-table--cell' {...otherProps}>
      {children}
    </td>
  );
};

export default TableCell;
