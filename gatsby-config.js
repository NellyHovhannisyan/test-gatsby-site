require("dotenv").config();

module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "My Gatsby Site",
  },
  plugins: [
    "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_CMS_API_KEY,
        environment: `main`,
        previewMode: false,
        disableLiveReload: false,
        localeFallbacks: {
          it: ['en'],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name:"images",
        path: `${__dirname}/src/images/`,
      }
    }
  ],
};
