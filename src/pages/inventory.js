import React, { useContext, useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import { Card, Typography, Row, Col } from 'antd';
import Stats from '../components/stats';
import { FaRocket, FaStar, FaTrophy } from 'react-icons/fa';

const { Title, Paragraph } = Typography;

export default ({ data, location }) => {
  // const [topTracks, setTopTracks] = useState([]);
  useEffect(() => {
    fetchTopTracks();
  }, []);
  const { siteMetadata } = data.site;
  return (
    <>
      <Layout location={location} title={siteMetadata.title}>
        <Title style={{
          fontSize: '2.8rem',
          fontWeight: '800',
          padding: 0,
          margin: 0,
        }}>
          Inventory
        </Title>
        {/* Showcase */}
        <Row style={{ marginTop: '4vh' }} gutter={[16, 16]}>
          <Col md={12} xs={24}>
            {/* TODO: Fetch from codeforces API */}
            <Stats
              title="Codeforces"
              icon={<FaTrophy />}
              value="1016"
              lightBg="#fff"
              darkBg="#090A21"
            />
          </Col>
          <Col md={12} xs={24}>
            {/* TODO Fetch from Github API */}
            <Stats
              title="Github"
              icon={<FaStar />}
              value="200"
              lightBg="#fff"
              darkBg="#090A21"
            />
          </Col>
        </Row>
        <Title style={{
          fontSize: '2.8rem',
          fontWeight: '800',
          padding: 0,
          margin: '4vh 0 0 0'
        }}>
          Top Tracks
        </Title>
        {/* TODO: Consistent font size across the website */}
        <Paragraph style={{ fontSize: '1.2rem' }}>
          Here is a list of songs I listened to over
          the past month on Spotify. You can find
          the list on Top Tracks of your profile.
        </Paragraph>
      </Layout>
    </>
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
