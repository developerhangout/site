import React from "react"
import { Link, graphql } from "gatsby"
// import Img from "gatsby-image"

import "./index.scss"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/index"

const HomePage = ({ data }) => (
  <Layout mainClass="home">
    <SEO title="Home" />
    {/* <figure className="img-wrapper">
      <Img fluid={data.placeholder.childImageSharp.fluid} />
    </figure> */}
    <div className="page-content">
      <h1 className="page-content__title">Developer Hangout</h1>
      <p className="page-content__lead">
        Join a discord community of over 12,000 developers, from noob to pro!
      </p>
      <div className="btn-group">
        <a
          href="https://discord.gg/developers"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--primary"
        >
          Join
        </a>
        <Link to="/about" className="btn btn--secondary">
          About
        </Link>
      </div>
    </div>
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  query HomeQuery {
    placeholder: file(relativePath: { eq: "placeholder.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
