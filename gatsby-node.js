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

exports.createPages = ({actions, graphql, reporter}) => {
  const {createPage} = actions;

  const getChallenges = makeRequest(graphql, `
  query {
      allMarkdownRemark(filter: {frontmatter: {type: {eq: "challenge"}}}) {
        edges {
          node {
            html
            frontmatter {
              date(formatString: "MMMM YYYY")
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
          path: `/challenges/${node.frontmatter.date.toLowerCase().replace(' ', '_')}`,
          component: path.resolve('./src/templates/challenge/challenge.js'),
          context: {...node}
        })
      })
    })

    const getProjects = makeRequest(graphql, `
      query {
        allMarkdownRemark(
          filter: {frontmatter: {type: {eq: "project"}}}
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              id
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges
      const postsPerPage = 10;
      const numPages = Math.ceil(posts.length / postsPerPage)
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/projects` : `/projects/${i + 1}`,
          component: path.resolve("./src/templates/project-list/project-list.js"),
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1,
          },
        })
      })
    })

    const getAboutDocs = makeRequest(graphql,`
    query {
        allMarkdownRemark(filter: {frontmatter: {type: {eq: "about"}}}) {
          edges {
            node {
              id
              frontmatter {
                slug
              }
            }
          }
        }
      }
    `)
      .then(result => {
        result.data.allMarkdownRemark.edges.forEach(({node}) => {
          createPage({
            path: `/about/${node.frontmatter.slug}`,
            component: path.resolve('./src/templates/about/aboutDoc.js'),
            context: {...node}
          })
        })
      })

    return Promise.all([
      getChallenges,
      getProjects,
      getAboutDocs
    ])
}