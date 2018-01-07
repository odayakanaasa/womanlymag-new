import React from 'react';

const ArticlePage = ({ data }) => {
  const { us } = data;

  return (
    <div>
      <h1>{us.title}</h1>
    </div>
  );
};

export default ArticlePage;

export const pageQuery = graphql`
  query articleQuery($slug: String!) {
    us: contentfulArticle(slug: { eq: $slug }) {
      slug
      title
      contributors {
        ... on ContentfulContributor {
          name
          image {
            file {
              url
            }
          }
        }
      }
      text {
        childMarkdownRemark {
          html
        }
      }
      textPosition
      resources {
        ... on ContentfulResource {
          title
          url
          text
        }
      }
      featured
      tags {
        ... on ContentfulTag {
          text
        }
      }
    }
  }
`;
