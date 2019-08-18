import React from 'react';
import Layout from '../../components/layout';
import SEO from '../../components/seo';
import { graphql } from 'gatsby';

const ChallengeTemplate = ({data}) => {

  const { markdownRemark: post } = data;

  return (
    <Layout>
      <SEO title={post.frontmatter.title}/>
      <h1>{post.frontmatter.title}</h1>
      <p>{post.frontmatter.desc}</p>
      <p dangerouslySetInnerHTML={{__html: post.html}}></p>
    </Layout>
  )

}

export default ChallengeTemplate;

export const postQuery = graphql`
  query ChallengeByPath($path: String!) {
    markdownRemark(frontmatter: {path: { eq: $path } })
    {
      html
      frontmatter {
        path
        title
        desc
      }
    }
  }
`
