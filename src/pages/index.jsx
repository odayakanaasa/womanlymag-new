import React from 'react';

const IndexPage = ({ data }) => {
  const usEdges = data.us.edges;

  return (
    <div>
      <h1>Homepage</h1>
      <p>Hello hello {usEdges[0].id}</p>
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
