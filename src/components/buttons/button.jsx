import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const StyledButton = styled.button`
  text-align: center;
  background-color: black;
  padding: ${rem('15px')};
  text-transform: uppercase;
  color: white;
  border: 0;
  font-family: ${props => props.theme.sansSerifFont};
  display: flex;
  flex-grow: 1;
  &:hover {
    background-color: ${props => props.theme.accent};
  }
`;

const Button = ({ onClick, text }) => (
  <StyledButton onClick={onClick} type="button">
    {text}
  </StyledButton>
);

export default Button;
