import React from 'react';

import './Table.css';

const Table = ({ children }) => {
  return <table className='ui-table'>{children}</table>;
};

export default Table;
