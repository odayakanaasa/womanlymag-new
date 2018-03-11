import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

const HiddenLabel = styled.label`
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

const StyledLabel = styled.label`
  display: flex;
  margin-bottom: ${rem('5px')};
  color: ${props => props.theme.labelColor};
`;

const Label = ({ hidden, htmlFor, text }) => {
  if (hidden) {
    return <HiddenLabel htmlFor={htmlFor}>{text}</HiddenLabel>;
  }

  return <StyledLabel htmlFor={htmlFor}>{text}</StyledLabel>;
};

export default Label;
