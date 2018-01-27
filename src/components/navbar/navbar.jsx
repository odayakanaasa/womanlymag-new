import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
// eslint-disable-next-line import/no-unresolved
import TextLink from 'components/textLink/textLink';

const Nav = styled.nav`
  padding: 20px;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin: 0 5px;
`;

const items = {
  '/': 'Home',
  '/about': 'About',
  '/issues': 'Issues',
  '/resources': 'Resources',
  '/glossary': 'Glossary',
};

const NavBar = () => (
  <Nav>
    <List>
      {_.map(items, (item, key) => (
        <ListItem key={key}>
          <TextLink to={key} text={item} />
        </ListItem>
      ))}
    </List>
  </Nav>
);

export default NavBar;
