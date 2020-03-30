import React from "react"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

import "./style.scss"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/index"

const staffPage = ({ data }) => (
  <Layout mainClass="staff">
    <SEO title="Staff" />
    <h1>Staff</h1>
    <div className="row">
      {data.allMarkdownRemark.edges.map(({ node }, i) => (
        <div className="card" key={i}>
          <figure>
            <Img fluid={{...node.frontmatter.featuredImage.childImageSharp.fluid, aspectRatio: 1}} alt="" />
          </figure>
          <p>
            <b>Username:</b> {node.frontmatter.username}
          </p>
          <p>
            <b>Real Name:</b> {node.frontmatter.name}
          </p>
          <div
            className="desc"
            dangerouslySetInnerHTML={{ __html: node.html }}
          />
        </div>
      ))}
    </div>
  </Layout>
)

export default staffPage

export const pageQuery = graphql`
  query StaffQuery {
    allMarkdownRemark(filter: { frontmatter: { type: { eq: "staff" } } }) {
      edges {
        node {
          html
          frontmatter {
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            name
            username
          }
        }
      }
    }
  }
`
