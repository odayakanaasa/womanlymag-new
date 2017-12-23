require('dotenv-safe').config();

const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  siteMetadata: {
    title: 'Womanly Mag',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: `${process.env.CONTENTFUL_SPACE_ID}`,
        accessToken: `${process.env.CONTENTFUL_ACCESS_TOKEN}`,
        host: !isProduction ? 'preview.contentful.com' : 'cdn.contentful.com',
      },
    },
  ],
};
