const siteTitle = "Buczek";
const siteDescription =
  "Buczek";
const siteAuthor = "apryka";
const siteUrl = "https://sklep.pieczywo-buczek.pl";
const siteImage = `${siteUrl}/favicon.ico`;
const siteKeywords = ["wypieki na dowóz", "pieczywo z dostawą do domu", "Piekarnia Buczek", "Krakowska tradycja", "Pieczywo i chleb"];

const myCustomQueries = {
  xs: '(max-width: 360px)',
  sm: '(max-width: 640px)',
  md: '(max-width: 768px)',
  lg: '(max-width: 1024px)',
  xl: '(max-width: 1280px)',
};

module.exports = {
  siteMetadata: {
    title: siteTitle,
    description: siteDescription,
    author: siteAuthor,
    url: siteUrl,
    keywords: siteKeywords,
    image: siteImage,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: "images",
      },
    },
    {
      resolve: "gatsby-plugin-react-axe",
      options: {
        showInProduction: false,
        // Options to pass to axe-core.
        // See: https://github.com/dequelabs/axe-core/blob/master/doc/API.md#api-name-axeconfigure
        axeOptions: {
          // Your axe-core options.
        },
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: siteTitle,
        short_name: siteTitle,
        description: siteDescription,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: "src/images/svg/logo.svg",
        icons: [],
      },
    },
    `gatsby-plugin-offline`,
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /svg/
        }
      }
    },
    {
      resolve: "gatsby-plugin-breakpoints",
      options: {
          queries: myCustomQueries,
      },
  },
  ],
};
