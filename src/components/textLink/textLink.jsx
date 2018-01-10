import React from 'react';
import styled from 'styled-components';
import Link from 'gatsby-link';

const StyledLink = styled(Link)`
  color: ${props => props.theme.text};
  text-decoration: none;
`;

const TextLink = ({ text, to }) => <StyledLink to={to}>{text}</StyledLink>;

export default TextLink;
