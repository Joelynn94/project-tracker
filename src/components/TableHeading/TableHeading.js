import React from 'react';

import './TableHeading.css';

const TableHeading = ({ children }) => {
  return <th className='ui-table--heading'>{children}</th>;
};

export default TableHeading;
