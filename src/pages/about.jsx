import React from 'react';
import _ from 'lodash';
import styled from 'styled-components';
import { Grid, Cell } from 'styled-css-grid';
import { rem } from 'polished';
/* eslint-disable import/no-unresolved */
import Button from 'components/button/button';
import Contributor from 'components/contributor/contributor';
import { Default, Mobile } from 'components/responsive';
import { Form, Input, TextArea } from 'components/forms';
import Image from 'components/image/image';
import { isEmail, isRequired } from 'components/forms/validations';
import { List, ListItem } from 'components/list';
import Paragraph from 'components/typography/paragraph';
/* eslint-enable import/no-unresolved */

const StyledMobile = styled(Mobile)`
  padding: ${rem('20px')};
  margin-top: ${rem('30px')};
`;

const StyledListItem = styled(ListItem)`
  margin-bottom: ${rem('25px')};

  @media (max-width: ${props => props.theme.mobileMax}) {
    > * {
      display: block;
      text-align: center;
    }
  }
`;

const TextCell = styled(Cell)`
  @media (min-width: ${props => props.theme.mobileMax}) {
    margin-right: ${rem('15px')};
  }
`;

const FormCell = styled(Cell)`
  @media (max-width: ${props => props.theme.mobileMax}) {
    margin-bottom: ${rem('20px')};
  }
`;

const AboutPage = ({ data }) => {
  const usNode = data.us.edges[0].node;
  const text = usNode.content.find(el => el.__typename === 'ContentfulText');
  const contributorsList = usNode.content.find(
    el => el.__typename === 'ContentfulList'
  );

  const content = (
    <React.Fragment>
      <TextCell area="text">
        <h1>{usNode.title}</h1>
        <Paragraph isLarge>
          <span
            dangerouslySetInnerHTML={{
              __html: text.content.childMarkdownRemark.html,
            }}
          />
        </Paragraph>
      </TextCell>
      <FormCell area="form">
        <Form
          name="contact"
          successText="Thanks! We'll be reaching out shortly."
          isNetlifyForm
        >
          <Input
            label={{ text: 'Name' }}
            name="name"
            placeholder="Name"
            validate={isRequired}
            required
          />
          <Input
            label={{ text: 'Email' }}
            name="email"
            placeholder="example@email.com"
            type="email"
            validate={isEmail}
            required
          />
          <TextArea
            label={{ text: 'Comments' }}
            name="comments"
            placeholder="Comments"
            validate={isRequired}
            required
          />
          <Button text="Contact Us" />
        </Form>
      </FormCell>
      <Cell area="bios">
        <h2>{contributorsList.title}</h2>
        <List>
          {_.map(contributorsList.items, contributor => (
            <StyledListItem id={contributor.name} key={contributor.name}>
              <Image
                resolutions={contributor.image.resolutions}
                alt={contributor.name}
                title={contributor.title}
                caption={
                  <Contributor
                    bio={contributor.bio}
                    name={contributor.name}
                    socialMediaLinks={contributor.socialMediaLinks}
                    title={contributor.title}
                  />
                }
                captionPosition="right"
                circle
              />
            </StyledListItem>
          ))}
        </List>
      </Cell>
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <StyledMobile>
        <Grid
          columns="repeat(auto-fit,minmax(120px,1fr))"
          areas={['text', 'form', 'bios']}
        >
          {content}
        </Grid>
      </StyledMobile>
      <Default>
        <Grid columns="2fr 1fr" areas={['text form form', 'bios bios bios']}>
          {content}
        </Grid>
      </Default>
    </React.Fragment>
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
