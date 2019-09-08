import React from "react"
import Layout from "../../components/layout/layout"
import "./style.scss"
import { graphql } from "gatsby"

const ResourcesPage = ({data}) => (
  <Layout mainClass="resources">
    <h1>Resources</h1>
    <div className="card-r-wrapper">
      {data.allMarkdownRemark.edges.map(({node}, i) => (
        <div key={i} className="card-r">
          <a href={node.frontmatter.url} className="card-r__title">{node.frontmatter.title}</a>
          <div className="card-r__desc" dangerouslySetInnerHTML={{__html: node.html}} />
        </div>
      ))}
    </div>
  </Layout>
)

export default ResourcesPage

export const pageQuery = graphql`
query ResourcesQuery {
  allMarkdownRemark(filter: {frontmatter: {type: {eq: "resource" }}}) {    
    edges {
      node {
        html
        frontmatter {
          title
          url
        }
      }
    }
  }
}
`