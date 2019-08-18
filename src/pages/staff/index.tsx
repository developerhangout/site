import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo";

import './styles.scss'
import { graphql } from "gatsby";

const StaffPage = () => {
  return (
    <Layout>
      <SEO title="Staff" />
      <h1>TODO Add Stuff to go here</h1>
      <h2>small bios for each staff member, including helpers ?? probs not</h2>
    </Layout>
  )
}

export default StaffPage;

export const query = graphql`
         {
           allMarkdownRemark(
             filter: { frontmatter: { type: { eq: "staff" } } }
           ) {
             edges {
               node {
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

