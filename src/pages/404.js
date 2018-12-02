import React from 'react'
import Layout from '../components/layout'

const NotFoundPage = () => (
  <Layout>
    <div id="main">
      <div className="section">
        <h1>404: NOT FOUND</h1>
        <p>
          This page doesn&#39;t exist... infinite sadness.{' '}
          <span role="img" aria-label="sad">
            😢
          </span>
        </p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
