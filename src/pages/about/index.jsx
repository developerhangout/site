import React from "react"
import {Link} from 'gatsby'

import "./style.scss"
import Layout from "../../components/layout/layout"

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
      voluptatum nostrum doloribus aut error inventore sunt, delectus aperiam
      modi aliquam id accusamus culpa dolorem repellat cum ullam, reiciendis
      mollitia at.
    </p>
    <Link to="/about/rules">Rules</Link>
    <Link to="/about/guidelines">Guidelines</Link>
    <Link to="/about/scamming">How not to get scammed</Link>
  </Layout>
)

export default AboutPage
