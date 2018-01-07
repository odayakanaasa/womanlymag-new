import React from 'react';

const AboutPage = ({ data }) => {
  const usEdges = data.us.edges;

  return <div>About... {usEdges[0].node.id}</div>;
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
