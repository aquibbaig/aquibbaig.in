import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layout/index'
import { ThumbnailItem } from '../components/thumbnail-item';
import { rhythm } from '../utils/typography';
import Tile from '../components/tiles';
// import Flag from '../components/flag';
import { Typography, List } from 'antd';
// import Banner from '../components/banner';

const { Title, Paragraph } = Typography;

const socials = [
  { "as": "GitHub", "href": "https://github.com/aquibbaig" },
  { "as": "Twitter", "href": "https://github.com/aquibbaig" },
  { "as": "Spotify", "href": "https://github.com/aquibbaig" },
]

export default ({ data, location }) => {
  const { title } = data.site.siteMetadata
  const latestPosts = data.allMarkdownRemark.edges

  const InnerStyles = {
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  }

  return (
    <Layout
      title={title.toLowerCase()}
      location="/"
    >
      <div className="header" style={{ marginBottom: '5vh' }}>
        <Title style={{
          fontSize: '2.8rem',
          fontWeight: '700',
          padding: 0,
          margin: 0,
          color: '#082b38'
        }}>
          Hey,
        </Title>
        <Paragraph style={{ fontSize: '1.2rem', color: '#595959', textAlign: 'left', margin: 0 }}>
          I'm Aquib Baig. I'm a full stack web developer who enjoys music and soccer/football.
          I currently work at Redhat. Things I love to work on at the moment are: Reactjs,
          Golang. You can follow me here:
        </Paragraph>
        <List
          size="small"
          dataSource={socials}
          renderItem={item => (
            <List.Item style={{ border: 0, padding: '1vw 0 0 0' }}>
              <Link
                to={item.href}
                target="blank"
              >
                <Typography.Text style={{ fontSize: '1.2rem' }}>
                  {item.as}
                </Typography.Text>
              </Link>
            </List.Item>
          )}
        />
      </div>
      {/* Latest BlogPosts */}
      <div className="posts">
        <div className="header" style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'baseline'
        }}>
          <Title
            level={2}
            style={{ border: 0, fontWeight: '700', margin: 0, color: '#082b38' }}
          >
              Latest Articles
          </Title>
          <Title style={{ fontSize: '1.4rem' }}>
            <Link to="/blog">
              View All Posts
            </Link>
          </Title>
        </div>
        {(latestPosts || []).map(post => {
          return <ThumbnailItem
            view="complete-view"
            lightBg="transparent"
            darkBg="transparent"
            key={post.node.excerpt}
            node={post.node}
          />
        })}
      </div>
      {/* Latest BlogPosts end */}
      {/* Tiles. */}
      {/* <div style={{ marginTop: '5vh' }}>
        <div className="header">
          <Title level={1} style={{ fontWeight: '700', margin: 0, color: '#082b38' }}>
            Contributions
          </Title>
        </div> */}
        {/* <Tile
          loading={false}
          innerStyles={InnerStyles}
          // darkOutline="#EAC6A2"
          darkBg="transparent"
          lightBg="transparent"
          className="tile"
          buttonLink="/gsoc-2019-project-report/"
          top="Google Summer of Code 2019"
          // header="Google Summer of Code"
          content="An excerpt of my gsoc journey with fossi foundation,
        working towards improving the Librecores project."
        /> */}
        {/* <Tile
          loading={false}
          innerStyles={InnerStyles}
          // darkOutline="#EAC6A2"
          darkBg="transparent"
          lightBg="transparent"
          className="tile"
          buttonLink="/blog?category=linux"
          top="Explore the series of Linux blog posts"
          // header=""
          content="The Linux series of blog posts are aimed at 
        improving a broad understanding of Linux and it's tools."
        /> */}
      {/* </div> */}
      {/* Tiles end */}
      {/* <div className="courses" style={{ marginTop: '5vh' }}>
        <Title level={1} style={{ fontWeight: '700', margin: 0 }}>
          Courses
        </Title>
        <Paragraph>Coming soon..</Paragraph>
      </div> */}
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
      limit: 10
    ) {
      edges {
        node {
          excerpt(pruneLength: 150, truncate: true)
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
