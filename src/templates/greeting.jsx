import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout/layout';

const greetingTemplate = ({data}) => {
    const {markdownRemark: page} = data;
    return (
        <Layout>
            <h1>{page.frontmatter.title}</h1>
            <article dangerouslySetInnerHTML={{__html: page.html}} />
        </Layout>
    )
}

export default greetingTemplate

export const pageQuery = graphql`
query GreetingQuery($id: String!) {
    markdownRemark(id: {eq: $id}) {
        html
        frontmatter {
            title
        }
    }
}
`