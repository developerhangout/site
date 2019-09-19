import React from "react"
import {Link} from 'gatsby'

import "./style.scss"
import Layout from "../../components/layout/layout"
import SEO from "../../components/seo/index"

const AboutPage = () => (
  <Layout mainClass="about">
    <SEO title="About" />
    <h1>About</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
      voluptatum nostrum doloribus aut error inventore sunt, delectus aperiam
      modi aliquam id accusamus culpa dolorem repellat cum ullam, reiciendis
      mollitia at.
    </p>
    <ul>
      <li><Link to="/about/rules">Rules</Link></li>
      <li><Link to="/about/guidelines">Guidelines</Link></li>
      <li><Link to="/about/scamming">How not to get scammed</Link></li>
    </ul>
  </Layout>
)

export default AboutPage
