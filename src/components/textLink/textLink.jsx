import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Link from 'gatsby-link';

const StyledLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
  font-weight: 700;
`;

const TextLink = ({ text, to }) => <StyledLink to={to}>{text}</StyledLink>;

TextLink.propTypes = {
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
};

export default TextLink;
