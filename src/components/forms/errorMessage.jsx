import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const StyledErrorMessage = styled.div`
  color: ${props => props.theme.errorColor};
  padding: ${rem('5px')} 0;
`;

const ErrorMessage = ({ text, type }) => (
  <StyledErrorMessage type={type}>{text}</StyledErrorMessage>
);

ErrorMessage.defaultProps = {
  type: 'error',
};

ErrorMessage.propTypes = {
  text: PropTypes.string.isRequired,
};

export default ErrorMessage;
