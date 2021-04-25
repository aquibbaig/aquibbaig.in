import React from 'react';
import { Col, Row, Typography } from 'antd';

import './index.scss';
import { rhythm } from '../../utils/typography';
import { Link } from 'gatsby';

const { Text, Paragraph } = Typography;

export const Footer = () => (
  <footer className="footer" style={{ fontSize: '1.2rem' }}>
    {/* <h4>Copyright 2021, &#xa9;Aquib Baig, All rights reserved.</h4> */}
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
          <Link to="/">Twitter</Link>
        </Paragraph>
        <Paragraph>
          <Link to="/">Github</Link>
        </Paragraph>
        <Paragraph>
          <Link to="/">LinkedIn</Link>
        </Paragraph>
      </Col>
      <Col md={8} xs={24}>
        <Paragraph>
          <Link to="/">BMC</Link>
        </Paragraph>
        <Paragraph>
          <Link to="/">Patreon</Link>
        </Paragraph>
      </Col>
    </Row>
  </footer>
)
