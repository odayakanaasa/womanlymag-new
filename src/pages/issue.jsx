import React from 'react';
import Link from 'gatsby-link';

const IssuePage = ({ data }) => {
  const { us } = data;

  return (
    <div>
      <h1>Issue...#{us.number}</h1>
      {us.articles.map(article => (
        <Link key={article.slug} to={`/articles/${article.slug}`}>
          {article.title}
        </Link>
      ))}
    </div>
  );
};

export default IssuePage;

export const pageQuery = graphql`
  query issueQuery($number: Int!) {
    us: contentfulIssue(number: { eq: $number }) {
      id
      number
      title
      articles {
        ... on ContentfulArticle {
          title
          slug
          previewText
          thumbnail {
            file {
              url
            }
          }
          featured
        }
      }
    }
  }
`;
