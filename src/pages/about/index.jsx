import React from "react"
// import {graphql} from 'gatsby'

import "./style.scss"
import Layout from "../../components/layout/layout"
import Accordion from "../../components/accordion/index"

const AboutPage = () => (
  <Layout>
    <h1>About</h1>
    <p>Note: not finished yet</p>
    <p>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Excepturi
      voluptatum nostrum doloribus aut error inventore sunt, delectus aperiam
      modi aliquam id accusamus culpa dolorem repellat cum ullam, reiciendis
      mollitia at.
    </p>
    <div className="tab-group">
      <Accordion title="Rules" id="0">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          aliquid quae perspiciatis soluta eveniet consequuntur explicabo unde
          cupiditate atque ad labore, dolorem voluptatem doloribus deleniti
          minus ipsa iure blanditiis adipisci!
        </p>
      </Accordion>
      <Accordion title="Guidelines" id="1">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          aliquid quae perspiciatis soluta eveniet consequuntur explicabo unde
          cupiditate atque ad labore, dolorem voluptatem doloribus deleniti
          minus ipsa iure blanditiis adipisci!
        </p>
      </Accordion>
      <Accordion title="How to Not Get Scammed" id="2">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
          aliquid quae perspiciatis soluta eveniet consequuntur explicabo unde
          cupiditate atque ad labore, dolorem voluptatem doloribus deleniti
          minus ipsa iure blanditiis adipisci!
        </p>
      </Accordion>
    </div>
  </Layout>
)

export default AboutPage
