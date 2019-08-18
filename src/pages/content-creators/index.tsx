import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"

import "./styles.scss"
import { graphql } from "gatsby"

const ContentCreatorsPage = ({data}) => {
  const {allMarkdownRemark: creators} = data;

  return (
    <Layout>
      <SEO title="Content Creators" />
      <h1>TODO Add Stuff to go here</h1>
      <h2>
        THis is where we can put links and little bios about each content
        creator for the server
      </h2>
      {creators.edges.map(({node: creator}) =>(
        <p key={creator.id} dangerouslySetInnerHTML={{__html: creator.html}}></p>
      ))}
    </Layout>
  )
}

export default ContentCreatorsPage

export const query = graphql`
  {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "creator" } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            desc
            path
            title
          }
          html
        }
      }
    }
  }
`
