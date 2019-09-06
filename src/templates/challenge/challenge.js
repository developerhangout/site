import React from 'react'
import {graphql} from 'gatsby'

import Layout from '../../components/layout/layout'
import './style.scss'

const ChallengeTemplate = ({data, pageContext: content}) => {
    return (
        <Layout mainClass="challenge-template">
            <h1>{content.frontmatter.date + (content.frontmatter.title ? `: ${content.frontmatter.title}` : null)}</h1>
            <a href={content.frontmatter.repo} className="btn btn--primary github-btn">
                <div className="icon"><img src={data.img.publicURL} alt="" /></div>
                Fork me on Github</a>
            <article dangerouslySetInnerHTML={{__html: content.html}} />
        </Layout>
    )
}

export default ChallengeTemplate

export const pageQuery = graphql`
query ChallengeTemplateQuery {
    img: file(name: {eq: "fork" }) {
        publicURL
    }
}
`