import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../../components/layout/layout'
import Paginate from '../../components/paginate/index'
import './style.scss'

const ProjectListTemplate = ({ data, pageContext }) => (
	<Layout mainClass="projects">
		<h1>Projects</h1>
		<header className="paginate-wrapper--top">
			<Paginate pages={pageContext.numPages} cur={pageContext.currentPage} className="paginate--top" />
		</header>
		<div className="proj-wrapper">
			{data.allMarkdownRemark.edges.map(({ node }, i) => (
				<div className="proj" key={i}>
					<p><b>Title:</b> {node.frontmatter.title}</p>
					<p><b>User:</b> {node.frontmatter.user}</p>
					<p><b>Date Submitted:</b> {node.frontmatter.date}</p>
					<p><b>Tech Used:</b> {node.frontmatter.tech.join(', ')}</p>
					<div><b>Links:</b>&nbsp;
						{node.frontmatter.links.site ? <a href={node.frontmatter.links.site}>Site</a> : null}
						,&nbsp;
						{node.frontmatter.links.demo ? <a href={node.frontmatter.links.demo}>Demo</a> : null}
						,&nbsp;
						{node.frontmatter.links.repo ? <a href={node.frontmatter.links.repo}>Repo</a> : null}
					</div>
					<p className="proj__desc--label">Description</p>
					<div className="proj__desc" dangerouslySetInnerHTML={{__html: node.html}} />
				</div>
			))}
		</div>
		<footer className="paginate-wrapper--bottom">
			<Paginate pages={pageContext.numPages} cur={pageContext.currentPage} className="paginate--bottom" />
		</footer>
	</Layout>
)

export default ProjectListTemplate

export const BlogListQuery = graphql`
  query BlogListQuery($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      filter: {frontmatter: {type: {eq: "project"}}}
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
		  html
          frontmatter {
			title
			user
			date(formatString: "MMMM DD, YYYY")
			tech
			links {
				repo
				demo
				site
			}
          }
        }
      }
    }
  }
`