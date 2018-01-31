import React from 'react';

const ListItem = ({ children, id }) => (
  <li key={id}>{React.Children.map(children, child => child)}</li>
);

export default ListItem;
