import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo";

import './styles.scss'
import { graphql } from "gatsby";

const ProjectsPage = ({data}) => {
  const {allMarkdownRemark: projects} = data;

  return (
    <Layout>
      <SEO title="Projects" />
      <h1>TODO Add Stuff to go here</h1>
      <h2>List of projects generated by the community, make search able have someone who know react actually do that part</h2>
      {projects.edges.map(({node: project}) => (
        <div key={project.id}>
          <h3>{project.frontmatter.title}</h3>
          <p>{project.frontmatter.desc}</p>
          <p dangerouslySetInnerHTML={{__html: project.html}}></p>
        </div>
      ))}
    </Layout>
  )
}

export default ProjectsPage

export const query = graphql`
         {
           allMarkdownRemark(
             filter: { frontmatter: { type: { eq: "project" }, path: {ne: "template"} } }
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
