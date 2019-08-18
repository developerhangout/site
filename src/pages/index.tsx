import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './styles.scss'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Hi people</h1>
    <p>Put some good content here about the community and link to discord.</p>
    <p>Now go build something great.</p>
  </Layout>
)

export default IndexPage
