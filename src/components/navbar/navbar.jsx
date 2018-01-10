import React from 'react';
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

const NavBar = () => (
  <Nav>
    <List>
      <ListItem>
        <TextLink to="/" text="Home" />
      </ListItem>
      <ListItem>
        <TextLink to="/about" text="About" />
      </ListItem>
      <ListItem>
        <TextLink to="/issues" text="Issues" />
      </ListItem>
      <ListItem>
        <TextLink to="/resources" text="Resources" />
      </ListItem>
      <ListItem>
        <TextLink to="/glossary" text="Glossary" />
      </ListItem>
    </List>
  </Nav>
);

export default NavBar;
