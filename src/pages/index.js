import React from 'react'
import { graphql } from 'gatsby'
import { Row } from 'antd'

import Layout from '../layout/index'

export default ({ data, location }) => {
  const { title } = data.site.siteMetadata
  return (
    <div>
      <Layout title={title.toLowerCase()} location="/">
        <Row>Blog</Row>
      </Layout>
    </div>
  )
}
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        configs {
          countOfInitialPost
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { category: { ne: null }, draft: { eq: false } } }
      limit: 3
    ) {
      edges {
        node {
          excerpt(pruneLength: 30, truncate: true)
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            category
            draft
          }
        }
      }
    }
  }
`
