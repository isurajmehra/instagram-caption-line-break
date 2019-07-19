module.exports = {
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        includePaths: ["./node_modules"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Instagram Caption Tool`,
        short_name: `Insta Tool`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#ffffff`,
        display: `standalone`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
