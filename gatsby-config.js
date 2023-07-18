/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  trailingSlash: 'always',
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
        name: `Dobromir Yordanov portfolio`,
        short_name: `dy`,
        start_url: `.`,
        display: `standalone`,
        icons: [
          {
            src: `/icon_x48.png`,
            sizes: `48x48`,
            type: `image/png`,
            purpose: `any`,
          },
          {
            src: `/icon_x72.png`,
            sizes: `72x72`,
            type: `image/png`,
            purpose: `any`,
          },
          {
            src: `/icon_x96.png`,
            sizes: `96x96`,
            type: `image/png`,
            purpose: `any`,
          },
          {
            src: `/icon_x128.png`,
            sizes: `128x128`,
            type: `image/png`,
            purpose: `any`,
          },
          {
            src: `/icon_x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `any`,
          },
          {
            src: `/icon_x384.png`,
            sizes: `384x384`,
            type: `image/png`,
            purpose: `any`,
          },
          {
            src: `/icon_x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `any`,
          },
          {
            src: `/maskable_icon_x48.png`,
            sizes: `48x48`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/maskable_icon_x72.png`,
            sizes: `72x72`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/maskable_icon_x96.png`,
            sizes: `96x96`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/maskable_icon_x128.png`,
            sizes: `128x128`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/maskable_icon_x192.png`,
            sizes: `192x192`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/maskable_icon_x384.png`,
            sizes: `384x384`,
            type: `image/png`,
            purpose: `maskable`,
          },
          {
            src: `/maskable_icon_x512.png`,
            sizes: `512x512`,
            type: `image/png`,
            purpose: `maskable`,
          },
        ],
        include_favicon: false,
        background_color: `#222222`,
        theme_color: `#222222`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        precachePages: [`/cv`, `/404`],
        workboxConfig: {
          globPatterns: ["**/*"],
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
