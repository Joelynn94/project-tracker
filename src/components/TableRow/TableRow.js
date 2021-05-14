import React from 'react';

import './TableRow.css';

const TableRow = ({ children }) => {
  return <tr className='ui-table--row'>{children}</tr>;
};

export default TableRow;
