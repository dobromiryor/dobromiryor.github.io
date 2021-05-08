/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: "gatsby-plugin-anchor-links",
      options: {
        offset: -72,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/cv`,
        name: `cv`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/content/projects`,
        name: `projects`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/images`,
        name: `images`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Dobromir Yordanov | Front-end Developer`,
        short_name: `Dobromir Yordanov`,
        description: `Hello there! I'm Dobromir Yordanov, a front-end developer based in Plovdiv, BG.`,
        start_url: `.`,
        display: `standalone`,
        icon: `static/maskable.png`,
        icon_options: {
          purpose: `maskable`,
        },
        include_favicon: false,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/cv/`, `/404/`],
        workboxConfig: {
          globPatterns: ["**/icon-path*"],
        },
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-json`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
  ],
}
