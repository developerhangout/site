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
        <div key={staff.id}>
          <h3>{staff.frontmatter.title}</h3>
          <p dangerouslySetInnerHTML={{__html: staff.html}}></p>
        </div>
      ))}
    </Layout>
  )
}

export default StaffPage;

export const query = graphql`
         {
           allMarkdownRemark(
             filter: { frontmatter: { type: { eq: "staff" }, path: {ne: "template"} } }
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

