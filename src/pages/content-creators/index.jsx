import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import "./style.scss"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/index"

const CreatorsPage = ({ data }) => (
  <Layout mainClass="content-creators">
      <SEO title="Content Creators" />
        <h1>Content Creators</h1>
        <div className="row">
            {data.allMarkdownRemark.edges.map(({node}, i) => (
                <div className="card" key={i}>
                    <figure className="card__image">
                        <Img fluid={{...node.frontmatter.featuredImage.childImageSharp.fluid, aspectRatio: 1}} alt="" />
                    </figure>
                    <div className="card__info">
                        <p><b>Real Name:</b> {node.frontmatter.name}<br/>
                            <b>Username:</b> {node.frontmatter.username}</p>
                        <div className="card__links">
                            <p><b>Links:</b></p>
                            <ul>
                                {node.frontmatter.socialLinks.map((link, i) => <li key={i}><a href={link}>{link}</a></li>)}
                            </ul>
                        </div>
                    </div>
                    <div className="card__content" dangerouslySetInnerHTML={{__html: node.html}} />
                </div>
            ))}
        </div>
  </Layout>
)

export default CreatorsPage

export const pageQuery = graphql`
  query CreatorsQuery {
    allMarkdownRemark(filter: {frontmatter: {type: {eq: "content-creator"}}}) {
      edges {
          node {
            html
            frontmatter {
                name
                username
                socialLinks
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