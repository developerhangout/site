import React from "react"
import { graphql } from "gatsby"

import "./style.scss"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/index"

const ResourcesPage = ({data}) => (
  <Layout mainClass="resources">
    <SEO title="Resources" />
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