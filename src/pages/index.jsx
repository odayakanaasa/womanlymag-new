import React from 'react';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { rem } from 'polished';
/* eslint-disable import/no-unresolved */
import { Default, Mobile } from 'components/responsive';
import Hero from 'components/hero/hero';
import HoverOverlay from 'components/hoverOverlay/hoverOverlay';
import Image from 'components/image/image';
/* eslint-enable import/no-unresolved */

const MobileContainer = styled.div`
  margin: 0 ${rem('30px')};
`;

const IndexPage = ({ data }) => {
  const usNode = data.us.edges[0].node;
  const hero = usNode.content.find(el => el.__typename === 'ContentfulHero');
  const issue = usNode.content.find(el => el.__typename === 'ContentfulIssue');
  const { articles } = issue;

  const articleGrid = articles.map(article => (
    <Cell key={article.slug} center middle>
      <HoverOverlay heading={article.title} text={`${article.previewText}...`}>
        <Image
          alt={article.title}
          resolutions={article.thumbnail.resolutions}
          title={article.previewText}
          isBackground
        />
      </HoverOverlay>
    </Cell>
  ));

  return (
    <div>
      <Hero sizes={hero.media.sizes} title={hero.title} />
      <Mobile>
        <MobileContainer>
          <Grid
            columns="repeat(auto-fit,minmax(300px,1fr))"
            gap="40px"
            minRowHeight="300px"
          >
            {articleGrid}
          </Grid>
        </MobileContainer>
      </Mobile>
      <Default>
        <Grid
          columns="repeat(auto-fit,minmax(300px,1fr))"
          gap="40px"
          minRowHeight="300px"
        >
          {articleGrid}
        </Grid>
      </Default>
    </div>
  );
};

export default IndexPage;

export const pageQuery = graphql`
  query homePageQuery {
    us: allContentfulPage(
      filter: { node_locale: { eq: "en-US" }, slug: { eq: "index" } }
    ) {
      edges {
        node {
          id
          content {
            ... on ContentfulHero {
              title
              media {
                sizes {
                  ...GatsbyContentfulSizes
                }
              }
            }
            ... on ContentfulIssue {
              title
              featured
              articles {
                title
                previewText
                slug
                thumbnail {
                  resolutions(width: 400, height: 400) {
                    ...GatsbyContentfulResolutions
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;
