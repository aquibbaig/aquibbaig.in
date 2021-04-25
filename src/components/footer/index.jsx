import React from 'react';
import { Col, Row, Typography } from 'antd';

import './index.scss';
import { rhythm } from '../../utils/typography';
import { Link } from 'gatsby';
import { FaSpotify } from 'react-icons/fa';

const { Text, Paragraph } = Typography;

export const Footer = () => (
  <footer className="footer" style={{ fontSize: '1.2rem' }}>
    <a href="https://open.spotify.com/user/21e2gnoh5t42dkrsp7zc7bzjy" target="_blank">
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
          <Link to="/projects">Projects</Link>
        </Paragraph>
        <Paragraph>
          <Link to="/about">About</Link>
        </Paragraph>
      </Col>
      <Col md={8} xs={24}>
        <Paragraph>
          <Link to="https://twitter.com/BaigAquib">Twitter</Link>
        </Paragraph>
        <Paragraph>
          <Link to="https://github.com/aquibbaig">Github</Link>
        </Paragraph>
        <Paragraph>
          <Link to="https://www.linkedin.com/in/baigaquib/">LinkedIn</Link>
        </Paragraph>
      </Col>
      <Col md={8} xs={24}>
        <Paragraph>
          <Link to="https://www.buymeacoffee.com/aquibbaig">BMC</Link>
        </Paragraph>
      </Col>
    </Row>
  </footer>
)
