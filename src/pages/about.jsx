import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { rem } from 'polished';
/* eslint-disable import/no-unresolved */
import Image from 'components/image/image';
import { List, ListItem } from 'components/list';
import TextLink from 'components/textLink/textLink';
/* eslint-enable import/no-unresolved */

const ContributorHeading = styled.span`
  display: flex;
  align-items: center;
`;

const ContributorName = styled.h3`
  margin: 0;
  padding-right: ${rem('10px')};
`;

const formatContributorInfo = contributor => (
  <span>
    <ContributorHeading>
      <ContributorName>{contributor.name}</ContributorName>
      <span>({contributor.title})</span>
    </ContributorHeading>
    <div>
      <div
        dangerouslySetInnerHTML={{
          __html: contributor.bio.childMarkdownRemark.html,
        }}
      />
      {contributor.socialMediaLinks && (
        <List inline>
          {_.map(contributor.socialMediaLinks, link => (
            <ListItem>
              <TextLink external to={link.url} text={link.type} underline />
            </ListItem>
          ))}
        </List>
      )}
    </div>
  </span>
);

const AboutPage = ({ data }) => {
  const usNode = data.us.edges[0].node;
  const text = usNode.content.find(el => el.__typename === 'ContentfulText');
  const contributorsList = usNode.content.find(
    el => el.__typename === 'ContentfulList'
  );

  return (
    <Grid columns="2fr 1fr" areas={['text form form', 'bios bios bios']}>
      <Cell area="text">
        <h1>{usNode.title}</h1>
        <div
          dangerouslySetInnerHTML={{
            __html: text.content.childMarkdownRemark.html,
          }}
        />
      </Cell>
      <Cell area="form">Form</Cell>
      <Cell area="bios">
        <h2>{contributorsList.title}</h2>
        <List>
          {_.map(contributorsList.items, contributor => (
            <ListItem id={contributor.name} key={contributor.name}>
              <Image
                resolutions={contributor.image.resolutions}
                alt={contributor.name}
                title={contributor.title}
                caption={formatContributorInfo(contributor)}
                captionPosition="right"
                circle
              />
            </ListItem>
          ))}
        </List>
      </Cell>
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
          title
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
                    resolutions(width: 150, height: 150) {
                      ...GatsbyContentfulResolutions
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
