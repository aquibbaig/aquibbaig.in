import React from 'react';
import { Col, Row, Typography } from 'antd';

import './index.scss';
import { rhythm } from '../../utils/typography';
import { Link } from 'gatsby';
import { FaSpotify } from 'react-icons/fa';

const { Text, Paragraph } = Typography;

export const Footer = () => (
  <footer className="footer" style={{ fontSize: '1.2rem' }}>
    <a
      href="https://open.spotify.com/user/21e2gnoh5t42dkrsp7zc7bzjy"
      target="_blank"
      style={{ textDecoration: 'none' }}
    >
      <Row style={{ marginBottom: '4vh', color: '#1DB954', fontSize: '1.2rem' }}>
        <FaSpotify style={{ marginRight: '4px' }}  />
        <Text>Follow</Text>
      </Row>
    </a>
    <Row style={{ textAlign: 'left' }}>
      <Col md={8} xs={24}>
        <Paragraph>
          <Link to="/">Home</Link>
        </Paragraph>
        <Paragraph>
          <Link to="/blog">Blog</Link>
        </Paragraph>
        <Paragraph>
          <Link to="/projects">Projects</Link>
        </Paragraph>
        <Paragraph>
          <Link to="/dashboard">Dashboard</Link>
        </Paragraph>
        <Paragraph>
          <Link to="/about">About</Link>
        </Paragraph>
      </Col>
      <Col md={8} xs={24}>
        <Paragraph>
          <a href="https://twitter.com/BaigAquib">Twitter</a>
        </Paragraph>
        <Paragraph>
          <a href="https://github.com/aquibbaig">Github</a>
        </Paragraph>
        <Paragraph>
          <a href="https://www.linkedin.com/in/baigaquib/">LinkedIn</a>
        </Paragraph>
      </Col>
      <Col md={8} xs={24}>
        <Paragraph>
          <a href="https://www.buymeacoffee.com/aquibbaig">BMC</a>
        </Paragraph>
      </Col>
    </Row>
  </footer>
)
