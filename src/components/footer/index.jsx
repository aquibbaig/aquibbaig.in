import React from 'react';
import { Col, Row, Typography } from 'antd';

import './index.scss';
import { Link } from 'gatsby';
import { FaCopyright } from 'react-icons/fa';

const { Text, Paragraph } = Typography;

export const Footer = () => (
  <footer className="footer" style={{ fontSize: '1.2rem' }}>
    <Row style={{ textAlign: 'left' }}>
      <Col md={8} xs={24}>
        <Paragraph style={{ textDecoration: 'underline', fontWeight: 600 }}>
          MENU
        </Paragraph>
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
        <Paragraph style={{ textDecoration: 'underline', fontWeight: 600 }}>
          SOCIALS
        </Paragraph>
        <Paragraph>
          <a href="https://twitter.com/BaigAquib" target="_blank">Twitter</a>
        </Paragraph>
        <Paragraph>
          <a href="https://github.com/aquibbaig" target="_blank">Github</a>
        </Paragraph>
        <Paragraph>
          <a href="https://www.linkedin.com/in/baigaquib/" target="_blank">LinkedIn</a>
        </Paragraph>
      </Col>
      <Col md={8} xs={24}>
        <Paragraph style={{ textDecoration: 'underline', fontWeight: 600 }}>
          OTHER
        </Paragraph>
        <Paragraph>
          <a
            href="https://open.spotify.com/user/21e2gnoh5t42dkrsp7zc7bzjy"
            target="_blank"
          >
            Spotify
          </a>
        </Paragraph>
        <Paragraph>
          <a href="https://www.buymeacoffee.com/aquibbaig" target="_blank">BuyMeACoffee</a>
        </Paragraph>
      </Col>
    </Row>
    <Row style={{ textAlign: 'left', marginTop: '2vh' }}>
      <Paragraph className="rf" style={{ display: 'flex' }}>
        <FaCopyright style={{ marginRight: '4px' }} />Aquib Baig, All Rights Reserved.
      </Paragraph>
    </Row>
  </footer>
)
