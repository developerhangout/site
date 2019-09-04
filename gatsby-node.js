const path = require('path');

const prettyDate = (date) => {  
  const months = ['January', 'Febuary', 'March', 'April', 'May', "June", "July", "August", "September", "October", 'November', "December"];
  return `${months[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`
}

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

  const getChallenges = makeRequest(graphql, `
  query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "challenge"}}}) {
        edges {
          node {
            html
            frontmatter {
              date
              title
              repo
            }
          }
        }
      }
    }
  `)
    .then(result => {
      result.data.allMarkdownRemark.edges.forEach(({node}) => {
        if(node.frontmatter.active === false) return;
        createPage({
          path: `/challenges/${prettyDate(node.frontmatter.date).toLowerCase().replace(' ', '_')}`,
          component: path.resolve('./src/templates/challenge.js'),
          context: {...node}
        })
      })
    })

    return Promise.all([
      getChallenges
    ])
}
