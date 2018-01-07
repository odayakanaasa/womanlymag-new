import React from 'react';

const ResourcesPage = ({ data }) => {
  const usEdges = data.us.edges;

  return <div>Resources...{usEdges[0].node.id}</div>;
};

export default ResourcesPage;

export const pageQuery = graphql`
  query resourcesQuery {
    us: allContentfulPage(
      filter: { node_locale: { eq: "en-US" }, slug: { eq: "resources" } }
    ) {
      edges {
        node {
          id
          content {
            ... on ContentfulList {
              title
              items {
                ... on ContentfulResource {
                  title
                  url
                  text
                }
              }
            }
          }
        }
      }
    }
  }
`;
