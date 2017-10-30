import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './index.scss'

const Header = () => (
  <nav>
    <div className="nav-content">
      <h2>Luke Sanwick</h2>
    </div>
  </nav>
)

class TemplateWrapper extends React.Component {
  componentDidMount() {
    window.particlesJS.load('particles-js', '/particlesjs-config.json')
  }

  render() {
    return (
      <div>
        <div id="particles-js" />
        <Helmet title="Sanwick">
          <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js" />
        </Helmet>
        <Header />
        <main className="main-content">{this.props.children()}</main>
        <footer>Built with <a href="https://www.gatsbyjs.org/">Gatsby</a></footer>
      </div>
    )
  }
}

export default TemplateWrapper
