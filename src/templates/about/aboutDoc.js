import React from 'react'
import { graphql} from 'gatsby'

import Layout from '../../components/layout/layout'
import './style.scss'

const AboutDocTemplate = ({data}) => {
    const {html, frontmatter} = data.markdownRemark
    return (
        <Layout mainClass="about-doc-template">
            <h1>{frontmatter.title}</h1>
            <article dangerouslySetInnerHTML={{__html: html}} />
        </Layout>
    )
}

export default AboutDocTemplate

export const pageQuery = graphql`
query($id: String!) {
    markdownRemark(id: {eq: $id}) {
        html
        frontmatter {
            title
        }
    }
}
`