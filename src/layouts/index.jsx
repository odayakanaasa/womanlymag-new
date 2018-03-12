import React from 'react';
import Helmet from 'react-helmet';
import styled, { injectGlobal, ThemeProvider } from 'styled-components';
import styledNormalize from 'styled-normalize';
import { Grid, Cell } from 'styled-css-grid';
/* eslint-disable import/no-unresolved */
import { Default, Mobile } from 'components/responsive';
import NavBar from 'components/navbar/navbar';
import mainTheme from 'styles/mainTheme';
/* eslint-enable import/no-unresolved */

injectGlobal`
  ${styledNormalize}

  html, body {
    font-family: 'Yantramanav', sans-serif;
    font-size: 100%;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
  }
`;

const MobileNavContainer = styled(Grid)`
  height: 0;
`;

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Womanly Mag | Art & Health on the Global Woman and Non-Binary"
      meta={[
        {
          name: 'description',
          content: 'Art & Health on the Global Woman and Non-Binary',
        },
        {
          name: 'keywords',
          content:
            'art, health, global, woman, nonbinary, non-binary, women, magazine',
        },
      ]}
    />
    <ThemeProvider theme={mainTheme}>
      <div>
        <Mobile>
          <MobileNavContainer columns={12}>
            <Cell />
            <Cell width={10}>
              <NavBar />
            </Cell>
            <Cell />
          </MobileNavContainer>
          <Grid columns={12}>
            <Cell width={12}>{children()}</Cell>
          </Grid>
        </Mobile>
        <Default>
          <Grid columns={12}>
            <Cell />
            <Cell width={10}>
              <NavBar />
              {children()}
            </Cell>
            <Cell />
          </Grid>
        </Default>
      </div>
    </ThemeProvider>
  </div>
);

export default TemplateWrapper;
