import React from 'react';

const ListItem = ({ className, children, id }) => (
  <li className={className} key={id}>
    {React.Children.map(children, child => child)}
  </li>
);

export default ListItem;
