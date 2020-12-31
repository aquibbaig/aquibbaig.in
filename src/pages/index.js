import React from 'react'
import { graphql, Link } from 'gatsby'

import Layout from '../layout/index'
import { ThumbnailItem } from '../components/thumbnail-item';
import { rhythm } from '../utils/typography';
import Tile from '../components/tiles';
import Flag from '../components/flag';
import EmailForm from '../components/email-form';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row, Col } from 'antd';
import { StarFilled } from '@ant-design/icons';

export default ({ data, location }) => {
  const { title } = data.site.siteMetadata
  const latestPosts = data.allMarkdownRemark.edges
  const [cfCardLoading, setCfCardLoading] = useState(true);
  const cfStars = (
    <div>
      785 <StarFilled style={{ color: '#d4af37' }} />
    </div>
  );
  const fossImage = (
    <img src="https://fossi-foundation.org/assets/fossi_logo_large.png" />
  );
  useEffect(() => {
    setTimeout(() => {
      setCfCardLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
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
        <Tile
          bg="#040250"
          textCol="white"
          className="tile"
          loading={cfCardLoading}
          header="codeforces.com"
          img={cfStars}
          buttonLink="https://codeforces.com/profile/aquibbaig97"
          content="I recently started solving competitive problems,
            and learning how to approach real world problems algorithmically."
        />
        <Tile
          bg="white"
          textCol="black"
          className="dark"
          loading={cfCardLoading}
          header="summerofcode.withgoogle.com"
          img={fossImage || '2019'}
          buttonLink="https://summerofcode.withgoogle.com/archive/2019/projects/6739681302020096/"
          content="This is my open source project which was a thrilling 3 months under Google's
          summer internship. It was my first real world learning experience."
        />
        {/* Tiles end */}
        {/* Flag group */}
        <Row align="middle" gutter={[8, 8]} style={{ paddingTop: '5vh' }}>
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
        </Row>
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
