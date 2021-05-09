import React, { useEffect, useState } from 'react';
import { graphql } from 'gatsby';
import Layout from '../layout';
import { Typography, Row, Col } from 'antd';
import Stats from '../components/stats';
import { FaStar, FaTrophy } from 'react-icons/fa';
import { getTopTracks } from '../utils/integrations/spotify';
import Tracks from '../components/track-container';

const { Title, Paragraph } = Typography;


export default ({ data, location }) => {
  const [topTracks, setTopTracks] = useState([]);
  const [ct, setCt] = useState(0);
  const [tracksLoading, setTracksLoading] = useState(true);
  useEffect(() => {
    (async() => {
      const response = await getTopTracks();
      setTopTracks(response);
      setTracksLoading(false);
    })()
  }, []);
  const { siteMetadata } = data.site;
  return (
    <>
      <Layout location={location} title={siteMetadata.title}>
        <Title style={{
          fontSize: '2.8rem',
          fontWeight: '700',
          padding: 0,
          margin: 0,
        }}>
          Dashboard
        </Title>
        <Paragraph style={{ fontSize: '1.2rem' }}>
          This is my personal dashboard. It has integrations with
          Github API, Spotify API, and Codeforces API to fetch my details.
        </Paragraph>
        {/* Showcase */}
        <Row style={{ marginTop: '4vh' }} gutter={[16, 16]}>
          <Col md={12} xs={24}>
            {/* TODO: Fetch from codeforces API */}
            <Stats
              title="Codeforces"
              icon={<FaTrophy />}
              value="1016"
              lightBg="#fff"
              darkBg="#082b38"
            />
          </Col>
          <Col md={12} xs={24}>
            {/* TODO Fetch from Github API */}
            <Stats
              title="Github"
              icon={<FaStar />}
              value="200"
              lightBg="#fff"
              darkBg="#082b38"
            />
          </Col>
        </Row>
        <Title style={{
          fontSize: '2.8rem',
          fontWeight: '700',
          padding: 0,
          margin: '4vh 0 0 0'
        }}>
          Top Tracks
        </Title>
        <Paragraph style={{ fontSize: '1.2rem' }}>
          Here is a list of songs I listened to over
          the past month on Spotify. You can find
          the list on Top Tracks of your profile.
        </Paragraph>
        <Tracks tracks={topTracks} loading={tracksLoading} />
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
