import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';

const StyledParagraph = styled.div`
  font-weight: 100;
  font-size: ${props => (props.isLarge ? rem('20px') : rem('18px'))};
  line-height: 1.25;
`;

const Paragraph = ({ children, isLarge }) => (
  <StyledParagraph isLarge={isLarge}>{children}</StyledParagraph>
);

Paragraph.defaultProps = {
  isLarge: false,
};

Paragraph.propTypes = {
  children: PropTypes.element.isRequired,
  isLarge: PropTypes.bool,
};

export default Paragraph;
