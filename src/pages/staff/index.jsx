import React from "react"
import Layout from "../../components/layout/layout"
import "./style.scss"
import { graphql } from "gatsby"
import Img from 'gatsby-image'

const staffPage = ({ data }) => (
  <Layout mainClass="staff">
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
