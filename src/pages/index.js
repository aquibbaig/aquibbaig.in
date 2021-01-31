import React, { useContext } from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layout/index'
import { ThumbnailItem } from '../components/thumbnail-item';
import { rhythm } from '../utils/typography';
// import Tile from '../components/tiles';
// import Flag from '../components/flag';
import EmailForm from '../components/email-form';
import { Row, Col, Button } from 'antd';
import Banner from '../components/banner';

export default ({ data, location }) => {
  const { title } = data.site.siteMetadata
  const latestPosts = data.allMarkdownRemark.edges

  return (
    <Layout title={title.toLowerCase()} location="/">
      {/* Latest BlogPosts */}
      <div style={{ padding: `${rhythm(1.5)} ${rhythm(3 / 4)}` }}>
        <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Latest Posts</p>
        {(latestPosts || []).map(post => {
          return <ThumbnailItem key={post.node.excerpt} node={post.node} />
        })}
        <Link to="/blog">Read all...</Link>
      </div>
      {/* Latest BlogPosts end */}
      {/* Tiles. */}
      <Banner
        darkModeImage={data.darkLinesBanner.childImageSharp.fluid}
        lightImage={data.lightBanner.childImageSharp.fluid}
        h1="LEARN GOLANG"
        smallText="The Better Way"
        button={<Button type="ghost"><a href={''}>Gophertuts</a></Button>}
      />
      <Banner
        darkModeImage={data.darkLinesBanner.childImageSharp.fluid}
        lightImage={data.lightMixerBanner.childImageSharp.fluid}
        h1="LEARN GOLANG"
        smallText="The Better Way"
        button={<Button type="ghost"><a href={''}>Gophertuts</a></Button>}
      />
      {/* Tiles end */}
      {/* Flag group */}
      {/* <Row align="middle" gutter={[8, 8]}>
        <Col md={8} sm={8} xs={24}>
          <a href="
              https://drive.google.com/file/d/1-EEP_q239KPlD2NZd5xJrFTTN9bvqTYb/view?usp=sharing">
            <Flag
              className="dark-orange"
              header="Resume"
              bg="#B9D9EB"
              textCol="black"
              loading={false}
            />
          </a>
        </Col>
        <Col md={8} sm={8} xs={24}>
          <a href="">
            <Flag
              className="dark-blue"
              header="Gallery"
              bg="#6699CC"
              textCol="black"
              loading={false}
            />
          </a>
        </Col>
        <Col md={8} sm={8} xs={24}>
          <a href="">
            <Flag
              className="dark-coffee"
              header="Misc."
              bg="#B0C4DE"
              textCol="black"
              loading={false}
            />
          </a>
        </Col>
      </Row> */}
      {/* Flag group end */}
      {/* Email */}
      <Row justify="start" style={{ background: 'transparent', position: 'relative', marginTop: '100px' }}>
        <Col xs={24} sm={12}>
          <EmailForm
            className="dark-blue"
            bg="#0039a6"
            textCol="white"
            loading={false}
          />
        </Col>
      </Row>
      {/* Email end */}
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
    lightBanner: file(absolutePath: { regex: "/banner-light.png/" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    lightMixerBanner: file(absolutePath: { regex: "/mixer.png/" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    darkFaceBanner: file(absolutePath: { regex: "/banner-dark.png/" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    darkLinesBanner: file(absolutePath: { regex: "/banner-dark-lines.png/" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp
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
