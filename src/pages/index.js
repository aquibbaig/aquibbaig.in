import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../layout/index'
import { ThumbnailItem } from '../components/thumbnail-item';
import { rhythm } from '../utils/typography';
import Tile from '../components/tiles';
import { FaRegClock, FaRegBookmark } from 'react-icons/fa';
// import Flag from '../components/flag';
import { Typography } from 'antd';
// import Banner from '../components/banner';

const { Title } = Typography;

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
      <div className="posts" style={{ padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`, minHeight: '70vh' }}>
        <div className="header" style={{
          display: 'flex',
          alignItems: 'baseline',
          color: '#607FF9',
          fontWeight: 'bold',
          justifyContent: 'flex-end'
        }}>
          <FaRegClock/>
          <Title level={3} style={{ color: '#607FF9', marginLeft: '0.2vw' }}>Latest Posts</Title>
        </div>
        {/* <hr style={{ border: '2px solid #1890ff', width: '10%', background: '#ED585B' }} /> */}
        {(latestPosts || []).map(post => {
          return <ThumbnailItem
            view="complete-view"
            lightBg="#fff"
            darkBg="#0F1029"
            key={post.node.excerpt}
            node={post.node}
          />
        })}
      </div>
      {/* Latest BlogPosts end */}
      {/* Tiles. */}
      <div style={{ padding: `${rhythm(1.5)} ${rhythm(3 / 4)}` }}>
        <div className="header" style={{
          display: 'flex',
          alignItems: 'baseline',
          color: '#607FF9',
          fontWeight: 'bold',
          justifyContent: 'flex-end'
        }}>
          <FaRegBookmark/>
          <Title level={3} style={{ color: '#607FF9', marginLeft: '0.2vw' }}>Pinned</Title>
        </div>
        {/* <hr style={{ border: '2px solid #ED585B', width: '10%' }} /> */}
        <Tile
          loading={false}
          outerStyle={OuterStyles}
          innerStyles={InnerStyles}
          // darkOutline="#EAC6A2"
          darkBg="#0F1029"
          lightBg="#fff"
          className="tile"
          buttonLink="/gsoc-2019-project-report/"
          top="Student at 2019's"
          header="Google Summer of Code"
          content="An excerpt of my gsoc journey with fossi foundation,
        working towards improving the Librecores project."
        />
        <Tile
          loading={false}
          outerStyle={OuterStyles}
          innerStyles={InnerStyles}
          darkBg="#0F1029"
          lightBg="#fff"
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
          darkBg="#0F1029"
          lightBg="#fff"
          className="tile"
          buttonLink="/blog?category=linux"
          top="Explore the series of"
          header="Linux Blog Posts"
          content="The Linux series of blog posts are aimed at 
        improving a broad understanding of Linux and it's tools."
        />
      </div>
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
