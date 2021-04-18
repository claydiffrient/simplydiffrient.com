module.exports = {
  siteMetadata: {
    title: "Clay Diffrient",
    siteUrl: "https://simplydiffrient.com",
  },
  plugins: [
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "assets",
        path: `${__dirname}/src/assets/`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-transformer-remark",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-sitemap",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Clay Diffrient",
        short_name: "ClayDiffrient",
        start_url: "/",
        background_color: "#397837",
        theme_color: "#397837",
        display: "browser",
        icon: "src/assets/logo.svg", // This path is relative to the root of the site.
      },
    },
    "gatsby-plugin-react-axe",
    "gatsby-plugin-offline",
  ],
};
