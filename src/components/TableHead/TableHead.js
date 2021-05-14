import React from 'react';

import './TableHead.css';

const TableHead = ({ children }) => {
  return <thead className='ui-table--head'>{children}</thead>;
};

export default TableHead;
