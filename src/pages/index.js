import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layout/index'
import { ThumbnailItem } from '../components/thumbnail-item'

export default ({ data, location }) => {
  const { title } = data.site.siteMetadata
  const latestPosts = data.allMarkdownRemark.edges
  return (
    <div>
      <Layout title={title.toLowerCase()} location="/">
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Latest Posts</p>
        {(latestPosts || []).map(post => {
          return <ThumbnailItem key={post.node.excerpt} node={post.node} />
        })}
        <Link to="/blog">Read all...</Link>
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
          excerpt(pruneLength: 60, truncate: true)
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
