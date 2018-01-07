import React from 'react';

const GlossaryPage = ({ data }) => {
  const usEdges = data.us.edges;

  return <div>Glossary...{usEdges[0].node.id}</div>;
};

export default GlossaryPage;

export const pageQuery = graphql`
  query glossaryQuery {
    us: allContentfulPage(
      filter: { node_locale: { eq: "en-US" }, slug: { eq: "glossary" } }
    ) {
      edges {
        node {
          id
          content {
            ... on ContentfulList {
              title
              items {
                ... on ContentfulDefinition {
                  title
                  text {
                    childMarkdownRemark {
                      html
                    }
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
