import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { rem } from 'polished';
/* eslint-disable import/no-unresolved */
import { Default, Mobile } from 'components/responsive';
import Image from 'components/image/image';
/* eslint-enable import/no-unresolved */

const HeroContainer = styled.div`
  margin-bottom: ${rem('30px')};
`;

const MobileHeroContainer = HeroContainer.extend`
  height: 50vh;
`;

const Hero = ({ sizes, title }) => (
  <React.Fragment>
    <Mobile>
      <MobileHeroContainer>
        <Image alt={title} sizes={sizes} title={title} isBackground />
      </MobileHeroContainer>
    </Mobile>
    <Default>
      <HeroContainer>
        <Grid columns={1} minRowHeight="400px">
          <Cell center middle>
            <Image alt={title} sizes={sizes} title={title} />
          </Cell>
        </Grid>
      </HeroContainer>
    </Default>
  </React.Fragment>
);

export default Hero;
