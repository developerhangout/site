import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';

import './styles.scss'
import { graphql } from 'gatsby';

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About"/>
      <h1>TODO Add Stuff to go here</h1>
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
