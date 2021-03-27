import React from 'react'
import { graphql } from 'gatsby'

import { rhythm } from '../utils/typography'
import * as Lang from '../constants'
import Layout from '../layout/index'

import PDF from '../../content/assets/Resume.pdf'

export default ({ data, location }) => {
  const resumes = data.allMarkdownRemark.edges
  const metaData = data.site.siteMetadata
  const { title } = metaData

  const resume = resumes
    .filter(({ node }) => node.frontmatter.lang === Lang.ENGLISH)
    .map(({ node }) => node)[0]

  return (
    <Layout location="/about" title={title}>
      <div style={{ padding: '24px', minHeight: '70vh' }}>
        <p className="header" style={{
          fontSize: '1.6rem',
          fontWeight: 'bold',
          marginBottom: '1vh'
        }}>A page in the diary</p>
        <hr style={{ border: '2px solid #ED585B', width: '10%', background: '#ED585B' }} />
        <p>
          Aquib Baig.
        </p>
      </div>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(filter: { frontmatter: { category: { eq: null } } }) {
      edges {
        node {
          id
          excerpt(pruneLength: 160)
          html
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
            lang
          }
        }
      }
    }
  }
`
