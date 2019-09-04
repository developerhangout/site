import React from "react"
import Header from "../header"
import "typeface-montserrat"
import "../style.scss"

const Layout = ({ children, mainClass }) => (
  <div className="wrapper">
    <Header />
    <main className={mainClass}>{children}</main>
    <footer>&copy; 2019 Developer Hangout</footer>
  </div>
)

export default Layout
