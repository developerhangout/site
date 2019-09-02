import React from 'react'
import Layout from '../components/layout/layout'
import {Link} from 'gatsby'

const HomePage = () => (
    <Layout>
        <h1>Developer Hangout</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium eveniet assumenda quod? Laborum, asperiores inventore deserunt consequuntur minus, praesentium, unde aperiam quas totam quibusdam iste atque repudiandae sed soluta dolorum.</p>
        <div>
            <a href="https://discord.gg/developers" className="btn btn--primary">Join</a>
            <Link to="/about" className="btn btn--secondary">About</Link>
        </div>
    </Layout>
)

export default HomePage