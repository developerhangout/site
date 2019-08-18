/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');

exports.createPages = ({actions, graphql}) => {
  const { createPage } = actions;

  const challengeTemplate = path.resolve('src/templates/challenge/index.tsx');

  return graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { type: { eq: "challenge" } } }
      ) {
        edges {
          node {
            frontmatter {
              desc
              path
              title
            }
            html
          }
        }
      }
    }
  `).then(res => {
    if (!!res.errors) {
      console.error(res.errors)
      return Promise.reject(res.errors)
    }

    res.data.allMarkdownRemark.edges.forEach(({ node: challenge }) => {
      createPage({
        path: challenge.frontmatter.path,
        component: challengeTemplate,
      })
    })
  })

}
