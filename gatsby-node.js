const path = require('path');

const makeRequest = (graphql, request) => new Promise((resolve, reject) => {
    // Query for nodes to use in creating pages.
    resolve(
        graphql(request).then(result => {
            if(result.errors) {
                reject(result.errors)
            }

            return result;
        })
    )
});

exports.createPages = ({actions, graphql}) => {
  const {createPage} = actions;

  const getMarkdown = makeRequest(graphql, `
    {
      allMarkdownRemark {
        edges {
          node {
            id
            frontmatter {
              title
            }
          }
        }
      }
    }
  `)
    .then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        createPage({
          path: `/${node.frontmatter.title.toLowerCase()}`,
          component: path.resolve('./src/templates/greeting.jsx'),
          context: {id: node.id}
        })
      })
    })

    return Promise.all([
      getMarkdown
    ])
}
