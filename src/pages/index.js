import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layout/index'
import { ThumbnailItem } from '../components/thumbnail-item';
import { rhythm } from '../utils/typography';
import Tile from '../components/tiles';
// import Flag from '../components/flag';
// import { Row, Col, Button } from 'antd';
// import Banner from '../components/banner';

export default ({ data, location }) => {
  const { title } = data.site.siteMetadata
  const latestPosts = data.allMarkdownRemark.edges

  const OuterStyles = {
    // padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
    // background: "black",
  }

  const InnerStyles = {
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  }

  return (
    <Layout
      title={title.toLowerCase()}
      location="/"
    >
      {/* Latest BlogPosts */}
      <div className="posts" style={{ padding: `${rhythm(1.5)} ${rhythm(3 / 4)}` }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold', textAlign: 'center', fontFamily: 'Work Sans' }}>Latest Posts</p>
        {(latestPosts || []).map(post => {
          return <ThumbnailItem
            lightBg="#f3fcfd"
            darkBg="#282C35"
            key={post.node.excerpt}
            node={post.node}
          />
        })}
        <p
          style={{
            textAlign: 'center',
            fontFamily: 'Work Sans',
          }}>
          <Link to="/blog">VIEW MORE</Link>
        </p>
      </div>
      {/* Latest BlogPosts end */}
      {/* Tiles. */}
      <Tile
        loading={false}
        outerStyle={OuterStyles}
        innerStyles={InnerStyles}
        darkBg="#273037"
        lightBg="#C7D3E6"
        className="tile"
        buttonLink="https://gophertuts.surge.sh"
        top="Golang Tutorials with"
        header="Hands on Exercises"
        content="Gophertuts is a collection of topics in golang which are
        lesser known, but widely used."
      />
      <Tile
        loading={false}
        outerStyle={OuterStyles}
        innerStyles={InnerStyles}
        // darkOutline="#EAC6A2"
        darkBg="#273037"
        lightBg="#C7D3E6"
        className="tile"
        buttonLink="/blog?category=linux"
        top="Explore the series of"
        header="Linux Blog Posts"
        content="The Linux series of blog posts are aimed at 
        improving a broad understanding of Linux and it's tools."
      />
      {/* Tiles end */}
    </Layout>
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
    fossiLogo: file(absolutePath: { regex: "/fossi_logo_large.png/" }) {
      childImageSharp {
        fixed(width: 100, height: 100) {
          ...GatsbyImageSharpFixed
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
          excerpt(pruneLength: 200, truncate: true)
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
