import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => (
    <StaticQuery
        query={query}
        render={({
            site: {
                siteMetadata: {
                    defaultTitle,
                    titleTemplate,
                    defaultDescription
                }
            }
        }) => {
            const seo = {
                title: title || defaultTitle,
                description: description || defaultDescription
            }
            return (
                <>
                    <Helmet title={seo.title} titleTemplate={titleTemplate}>
                        <meta name="description" content={seo.description} />
                        {seo.title && <meta property="og:title" content={seo.title} />}
                        {seo.description && (
                            <meta property="og:description" content={seo.description} />
                        )}
                    </Helmet>
                </>
            )
        }}
    />
)
export default SEO

SEO.defaultProps = {
    title: null,
    description: null
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
      }
    }
  }
`;