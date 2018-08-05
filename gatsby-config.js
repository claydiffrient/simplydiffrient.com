module.exports = {
  siteMetadata: {
    title: "Simply Diffrient - Clay Diffrient",
    siteUrl: "https://simplydiffrient.com"
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-glamor",
    "gatsby-plugin-sitemap"
  ]
};
