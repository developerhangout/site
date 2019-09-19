import React from "react"
import { Link } from "gatsby"

import "./index.scss"
import Layout from "../components/layout/layout"
import SEO from "../components/seo/index"

const HomePage = () => (
  <Layout mainClass="home">
    <SEO title="Home" />
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
