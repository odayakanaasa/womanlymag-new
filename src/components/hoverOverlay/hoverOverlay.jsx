import React from 'react';
import styled from 'styled-components';
import { darken, rem, transitions, transparentize } from 'polished';

const Container = styled.div`
  position: relative;
  width: inherit;
  height: inherit;
  cursor: pointer;
`;

const ColorOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: block;
  content: '';
  height: inherit;
  width: inherit;
  background-color: transparent;
  opacity: 0;
  box-shadow: inset 0 0 ${rem('30px')} ${rem('5px')}
    ${transparentize(0.95, '#000')};
  ${transitions('opacity 0.25s ease-in-out')};
  z-index: 3;
`;

const TextContainer = styled.div`
  position: absolute;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-bottom: ${rem('10px')};
  padding: ${rem('30px')};
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  opacity: 0;
  height: inherit;
  width: inherit;
  ${transitions('opacity 0.05s ease-in-out')};
  z-index: 4;
`;

const Heading = styled.h2`
  color: ${props => darken(0.65, props.theme.accent)};
`;

const Text = styled.span`
  font-size: ${rem('20px')};
  margin-top: ${rem('20px')};
  ${transitions('margin 0.25s ease-in-out')};
`;

const Animation = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: block;
  content: '';
  opacity: 0;
  z-index: 5;

  &:hover {
    ~ ${ColorOverlay} {
      opacity: 1;
      background: ${props => transparentize(0.25, props.theme.accent)};
    }

    ~ ${TextContainer} {
      opacity: 1;

      > ${Text} {
        margin-top: 0;
      }
    }
  }
`;

const HoverOverlay = ({ children, heading, text }) => (
  <Container>
    {React.Children.only(children)}
    <Animation />
    <ColorOverlay />
    <TextContainer>
      <Heading>{heading}</Heading>
      <Text>{text}</Text>
    </TextContainer>
  </Container>
);

export default HoverOverlay;
