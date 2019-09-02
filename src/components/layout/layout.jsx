import React from 'react'
import Header from '../header/header'
import 'typeface-montserrat'
import '../style.scss'

const Layout = ({ children }) => (
    <React.Fragment>
        <Header />
        <main>
            {children}
        </main>
        <footer>&copy; 2019 Developer Hangout</footer>
    </React.Fragment>
)

export default Layout