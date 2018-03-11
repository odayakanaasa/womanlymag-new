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
  &:hover {
    background-color: ${props => props.theme.accent};
    cursor: pointer;
  }
`;

const Button = ({ onClick, text, type }) => (
  <StyledButton onClick={onClick} type={type}>
    {text}
  </StyledButton>
);

Button.defaultProps = {
  type: 'submit',
};

export default Button;
