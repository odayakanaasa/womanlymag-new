import React from 'react';
import Link from 'gatsby-link';

const IssuesPage = ({ data }) => {
  const usEdges = data.us.edges;

  return (
    <div>
      Issues...
      <ul>
        {usEdges.map(({ node }) => (
          <li key={node.number}>
            <Link to={`/issues/${node.number}`}>Issue #{node.number}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default IssuesPage;

export const pageQuery = graphql`
  query issuesQuery {
    us: allContentfulIssue(filter: { node_locale: { eq: "en-US" } }) {
      edges {
        node {
          id
          title
          number
          featured
        }
      }
    }
  }
`;
