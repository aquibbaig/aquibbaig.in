import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layout'

class NotFoundPage extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <div style={{ minHeight: '70vh', textAlign: 'center' }}>
          <center>
            <p style={{ fontSize: '10rem', marginBottom: '2vh' }}>
              404
            </p>
            <p style={{ fontSize: '1.6rem', paddingLeft: '2vw', paddingRight: '2vw' }}>
              Dang!!! The URL that you have requested for does not exist.
            </p>
            <p style={{ fontSize: '1.2rem' }}>
              <Link to="/">Start Again</Link>
            </p>
          </center>
        </div>
      </Layout>
    )
  }
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
