import React from 'react';
import Link from 'gatsby-link';
import { Grid, Cell } from 'styled-css-grid';

const IssuesPage = ({ data }) => {
  const usEdges = data.us.edges;

  return (
    <Grid columns="repeat(auto-fit,minmax(200px,1fr))">
      {usEdges.map(({ node }) => (
        <Cell key={node.number} center middle>
          <Link to={`/issues/${node.number}`}>Issue #{node.number}</Link>
        </Cell>
      ))}
    </Grid>
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
