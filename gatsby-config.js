require('dotenv-safe').config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'Womanly Mag',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        host: !isProduction ? 'preview.contentful.com' : 'cdn.contentful.com',
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-105571821-1',
        // TODO: Will need this when i18n enabled:
        // anonymize: true,
      },
    },
    'gatsby-plugin-netlify', // Important: make sure to put last in the array
  ],
};
