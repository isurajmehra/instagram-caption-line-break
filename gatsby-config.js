const website = require("./config/website") 

module.exports = {
  siteMetadata: {
    title: website.title,
    description: website.description,
    siteUrl: website.siteUrl,
    image: website.image,
    owner: website.owner,
    twitterUsername: website.twitterUsername,
    facebookAppID: "",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images/`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./node_modules"],
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: website.googleAnalyticsID,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: website.title,
        short_name: website.short_name,
        start_url: `/`,
        background_color: website.background_color,
        theme_color: website.theme_color,
        display: `standalone`,
        icon: website.icon,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
