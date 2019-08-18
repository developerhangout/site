import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo";

import './styles.scss'
import { graphql } from "gatsby";

const StaffPage = ({data}) => {
  const {allMarkdownRemark: staffs} = data;

  return (
    <Layout>
      <SEO title="Staff" />
      <h1>TODO Add Stuff to go here</h1>
      <h2>small bios for each staff member, including helpers ?? probs not</h2>
      {staffs.edges.map(({node: staff}) => (
        <p key={staff.id} dangerouslySetInnerHTML={{__html: staff.html}}></p>
      ))}
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

