import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  display: flex;
  flex-flow: ${props => (props.inline ? 'row' : 'column')};
  padding: 0;
  margin: 0;
  list-style-type: none;
`;

const List = ({ children, inline }) => (
  <StyledList inline={inline}>
    {React.Children.map(children, child => child)}
  </StyledList>
);

export default List;
