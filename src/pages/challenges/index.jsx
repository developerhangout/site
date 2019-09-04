import React from 'react'
import { Link, graphql } from 'gatsby';

import Layout from '../../components/layout/layout'
import './style.scss'

const ChallengesPage = ({data}) => {
    
    const prettyDate = (date) => {  
        const months = ['January', 'Febuary', 'March', 'April', 'May', "June", "July", "August", "September", "October", 'November', "December"];
        return `${months[new Date(date).getMonth()]} ${new Date(date).getFullYear()}`;
    }

    return (
        <Layout mainClass="challenges-page">
            <h1>This Month's Challenge</h1>
            <div className="content-desc">{data.allMarkdownRemark.edges[0].node.frontmatter.desc}</div>
            <Link
                to={`/challenges/${prettyDate(data.allMarkdownRemark.edges[0].node.frontmatter.date).toLowerCase().replace(' ', '_')}`}
                className="btn btn--primary"
            >Go to Challenge</Link>
            <div className="row">
                {data.allMarkdownRemark.edges.map(({node}, i) => {
                    if(i === 0) return null;
                    return (
                        <div className="card-c" key={i}>
                            <h2>
                                <Link to={`/challenges/${prettyDate(node.frontmatter.date).toLowerCase().replace(' ', '_')}`}>
                                    {prettyDate(node.frontmatter.date)}
                                </Link>
                            </h2>
                            <div className="section__desc">
                                <p>{node.frontmatter.desc}</p>
                                <p><b>Winner:</b> {node.frontmatter.winner || 'Stay tuned...'}<br/>
                                <b>Runner-Up:</b> {node.frontmatter.runnerup || 'Stay tuned...'}</p>
                            </div>
                        </div>
                    )}
                )}
            </div>
        </Layout>
    )
}

export default ChallengesPage

export const pageQuery = graphql`
query ChallengesQuery {
    allMarkdownRemark(
        filter: { frontmatter: {
            type: { eq: "challenge" },
            active: {eq: true}
        } }
        sort: {
            fields: frontmatter___date,
            order: DESC
        }
    ) {
        edges {
            node {
                html
                frontmatter {
                    date
                    title
                    desc
                    repo
                }
            }
        }
    }
}
`