import React from 'react';
import { Grid, Cell } from 'styled-css-grid';

const IndexPage = ({ data }) => {
  const usNode = data.us.edges[0].node;
  const issue = usNode.content.find(el => el.__typename === 'ContentfulIssue');
  const { articles } = issue;

  return (
    <div>
      <Grid columns={1}>
        <Cell center middle>
          Hero goes here.
        </Cell>
      </Grid>
      <Grid columns="repeat(auto-fit,minmax(200px,1fr))">
        {articles.map(article => (
          <Cell key={article.slug} center middle>
            {article.title}
          </Cell>
        ))}
      </Grid>
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
                file {
                  url
                }
              }
            }
            ... on ContentfulIssue {
              title
              featured
              articles {
                title
                slug
              }
            }
          }
        }
      }
    }
  }
`;
