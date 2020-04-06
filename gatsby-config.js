module.exports = {
  siteMetadata: {
    title: `Akshay Gulhane | Full Stack Web Developer`,
    description: `I’m Akshay Gulhane, a Full Stack Web Developer`,
    author: `Akshay Gulhane`,
    siteUrl: 'https://akshr.dev',
    social: {
      twitter: 'akshaygulhane',
      instagram: 'akshaygulhane',
      linkedin: 'akshaygulhane',
      youtube: 'akshaygulhane',
      facebook: 'akshaygulhane',
      github: 'akshaygulhane',
      email: 'akshay.gulhane@outlook.com',
    },
    // name of the image for social website share, should be in static folder
    imageShare: `share.jpg`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-85607794-1',
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    },
    `gatsby-plugin-use-dark-mode`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `content`,
        path: `${__dirname}/src/content`,
      },
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Montserrat`,
            variants: [`200`, `400`, `400i`, `600`, `600i`, `700`],
          },
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-external-links',
            options: {
              target: '_blank',
              rel: 'noreferrer',
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Akshay Gulhane | Full Stack Developer`,
        short_name: `Akshay`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#212121`,
        theme_color: `#127EB1`,
        display: `minimal-ui`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
