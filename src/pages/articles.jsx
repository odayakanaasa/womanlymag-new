import React from 'react';
import Link from 'gatsby-link';

const ArticlesPage = ({ data }) => {
  const usEdges = data.us.edges;

  return (
    <div>
      Articles...
      <ul>
        {usEdges.map(({ node }) => (
          <li key={node.slug}>
            <Link to={`/articles/${node.slug}`}>{node.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ArticlesPage;

export const pageQuery = graphql`
  query articlesQuery {
    us: allContentfulArticle(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          slug
          title
        }
      }
    }
  }
`;
