import React, { Component } from 'react';
import { withRouter } from 'react-router';
import _ from 'lodash';
import styled from 'styled-components';
import { rem, transitions } from 'polished';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-free-solid/faBars';

/* eslint-disable import/no-unresolved */
import { Default, Mobile } from 'components/responsive';
import TextLink from 'components/textLink/textLink';
/* eslint-enable import/no-unresolved */

const Nav = styled.nav`
  padding: ${rem('20px')};
`;

const MobileNavToggleContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: ${rem('20px')} 0;
`;

const MobileNavToggle = styled.div`
  position: absolute;
  z-index: 15;
`;

const List = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  padding: 0;
`;

const MobileList = styled.ul`
  position: fixed;
  display: flex;
  overflow: auto;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 0;
  background: ${props => props.theme.mobileNavBackground};
  list-style-type: none;
  text-align: center;
  font-size: ${rem('26px')};
  z-index: 10;
`;

const ListItem = styled.li`
  margin: 0 ${rem('5px')};
  text-transform: uppercase;
  border-bottom: ${rem('2px')} solid transparent;
  ${transitions('all 0.15s ease-in 0s')} &:hover {
    border-bottom: ${rem('2px')} solid
      ${props => props.theme.navLinkHoverBorder};
  }
`;

const MobileListItem = styled.li`
  margin-bottom: ${rem('20px')};
`;

const items = {
  '/': 'Home',
  '/about': 'About',
  '/issues': 'Issues',
  '/resources': 'Resources',
  '/glossary': 'Glossary',
};

class NavBar extends Component {
  state = {
    mobileMenuShown: false,
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.location !== nextProps.location) {
      this.setState(() => ({
        mobileMenuShown: false,
      }));
    }
  }

  toggleMobileMenu = () => {
    this.setState(prevState => ({
      mobileMenuShown: !prevState.mobileMenuShown,
    }));
  };

  render() {
    return (
      <div>
        <Default>
          <Nav>
            <List>
              {_.map(items, (item, key) => (
                <ListItem key={key}>
                  <TextLink
                    to={key}
                    text={item}
                    underline={false}
                    withHover={false}
                  />
                </ListItem>
              ))}
            </List>
          </Nav>
        </Default>
        <Mobile>
          <MobileNavToggleContainer>
            <MobileNavToggle onClick={this.toggleMobileMenu}>
              <FontAwesomeIcon icon={faBars} size="lg" />
            </MobileNavToggle>
          </MobileNavToggleContainer>
          {this.state.mobileMenuShown && (
            <MobileList>
              {_.map(items, (item, key) => (
                <MobileListItem key={key}>
                  <TextLink
                    to={key}
                    text={item}
                    underline={false}
                    withHover={false}
                  />
                </MobileListItem>
              ))}
            </MobileList>
          )}
        </Mobile>
      </div>
    );
  }
}

export default withRouter(NavBar);
