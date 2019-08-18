import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

import './styles.scss'
import { graphql } from 'gatsby';

const AboutPage = ({data}) => {
  const {allMarkdownRemark: aboutContent} = data;

  return (
    <Layout>
      <SEO title="About"/>
      <h1>TODO Add Stuff to go here</h1>
      {aboutContent.edges.map(({node: content}) => (
        <p key={content.id} dangerouslySetInnerHTML={{__html: content.html}}></p>
      ))}
    </Layout>
  )
}

export default AboutPage;
export const query = graphql`{
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "about" } } }
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
