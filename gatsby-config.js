module.exports = {
  siteMetadata: {
    title: "Developer Hangout",
    description: "A website for the developer hangout discord server",
    author: "developerhangout",
  },
  plugins: [
    {
      // This entry has to be the first, or apparently the images will not work
      resolve:`gatsby-source-filesystem`,
      options:{
        path:`${__dirname}/static/assets`,
        name:`assets`
      }
    },
    {
      resolve: `gatsby-plugin-netlify-cms-paths`,
      options: {
      // Path to your Netlify CMS config file
      cmsConfig: `/static/admin/config.yml`
      }
    },
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          `gatsby-remark-relative-images`,
        ]
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "images",
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
  ],
}
