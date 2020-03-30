import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query HeaderQuery {
      logo: file(relativePath: { eq: "wordmark.png" }) {
        childImageSharp {
          fixed(width: 300) {
            ...GatsbyImageSharpFixed
          }
        }
      }
    }
  `)

  return (
    <header className="header">
      <Link to='/'>
        <Img
          fixed={data.logo.childImageSharp.fixed}
          alt="Developer Hangout"
          className="header__logo"
        />
      </Link>
      <nav className="nav">
        <Link to="/about" className="nav__link">
          About
        </Link>
        <div className="nav__submenu--wrapper">
          <span className="nav__item" tabIndex="0">
            People
          </span>
          <div className="nav__submenu">
            <Link to="/staff" className="nav__link" tabIndex="-1">
              Staff
            </Link>
            <Link to="/content-creators" className="nav__link" tabIndex="-1">
              Content Creators
            </Link>
          </div>
        </div>
        <Link to="/challenges" className="nav__link">
          Challenges
        </Link>
        <Link to="/resources" className="nav__link">
          Resources
        </Link>
        <Link to="/projects" className="nav__link">
          Projects
        </Link>
      </nav>
    </header>
  )
}

export default Header
