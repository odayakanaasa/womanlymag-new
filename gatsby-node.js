const path = require('path');
const _ = require('lodash');
const slash = require('slash');
const Promise = require('bluebird');

/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators;

  return new Promise((resolve, reject) => {
    graphql(`
      {
        allContentfulPage(limit: 1000) {
          edges {
            node {
              id
              slug
            }
          }
        }
      }
    `)
      .then(result => {
        if (result.errors) {
          reject(result.errors);
        }

        // Create all pages
        _.each(result.data.allContentfulPage.edges, edge => {
          const template = path.resolve(`./src/pages/${edge.node.slug}.jsx`);
          createPage({
            path: `/${edge.node.slug}`,
            component: slash(template),
            context: {
              id: edge.node.id,
              slug: edge.node.slug,
            },
          });
        });
      })
      .then(() => {
        graphql(`
          {
            allContentfulIssue(limit: 1000) {
              edges {
                node {
                  number
                }
              }
            }
          }
        `)
          .then(result => {
            if (result.errors) {
              reject(result.errors);
            }

            // Create Issues page
            const template = path.resolve('./src/pages/issues.jsx');
            createPage({
              path: '/issues',
              component: slash(template),
            });

            // Create individual Issues
            _.each(result.data.allContentfulIssue.edges, edge => {
              const issueTemplate = path.resolve('./src/pages/issue.jsx');
              createPage({
                path: `/issues/${edge.node.number}`,
                component: slash(issueTemplate),
                context: {
                  number: edge.node.number,
                },
              });
            });
          })
          .then(() => {
            graphql(`
              {
                allContentfulArticle(limit: 1000) {
                  edges {
                    node {
                      slug
                    }
                  }
                }
              }
            `).then(result => {
              // Create Articles page
              const template = path.resolve('./src/pages/articles.jsx');
              createPage({
                path: '/articles',
                component: slash(template),
              });

              // Create individual Articles
              _.each(result.data.allContentfulArticle.edges, edge => {
                const articleTemplate = path.resolve('./src/pages/article.jsx');
                createPage({
                  path: `/articles/${edge.node.slug}`,
                  component: slash(articleTemplate),
                  context: {
                    slug: edge.node.slug,
                  },
                });
              });
            });

            resolve();
          });
      });
  });
};
