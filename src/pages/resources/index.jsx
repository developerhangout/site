import React from "react"
import Layout from "../../components/layout/layout"
import "./style.scss"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const ResourcesPage = ({data}) => (
  <Layout mainClass="resources">
    <h1>Resources</h1>
    <div className="card-r-wrapper">
      {data.allMarkdownRemark.edges.map(({node}, i) => (
        <div key={i} className="card-r">
          <Img fluid={node.frontmatter.featuredImage.childImageSharp.fluid} alt="" className="card-r__img" />
          <a href={node.frontmatter.url} className="card-r__title">{node.frontmatter.title}</a>
          <p className="card-r__user">Reported by user <b>{node.frontmatter.user}</b></p>
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
          user
          featuredImage {
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
}
`