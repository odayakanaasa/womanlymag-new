import React from 'react';
import { Grid, Cell } from 'styled-css-grid';

const AboutPage = ({ data }) => {
  const usEdges = data.us.edges;

  return (
    <Grid columns="2fr 1fr" areas={['text form form', 'bios bios bios']}>
      <Cell area="text">About us text... {usEdges[0].node.id}</Cell>
      <Cell area="form">Form</Cell>
      <Cell area="bios">Bios</Cell>
    </Grid>
  );
};

export default AboutPage;

export const pageQuery = graphql`
  query aboutPageQuery {
    us: allContentfulPage(
      filter: { node_locale: { eq: "en-US" }, slug: { eq: "about" } }
    ) {
      edges {
        node {
          id
          content {
            ... on ContentfulText {
              content {
                childMarkdownRemark {
                  html
                }
              }
            }
            ... on ContentfulList {
              title
              items {
                ... on ContentfulContributor {
                  name
                  title
                  image {
                    file {
                      url
                    }
                  }
                  bio {
                    childMarkdownRemark {
                      html
                    }
                  }
                  socialMediaLinks {
                    type
                    url
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
