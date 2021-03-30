import React from 'react';
import { Col, Row } from 'antd';
import "fontsource-work-sans";
import { GithubOutlined, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons'

import './index.scss';
import { rhythm } from '../../utils/typography';

export const Footer = () => (
  <footer className="footer">
    <Row justify="space-between"
      align="middle"
      className="footer-content">
      <h2>I build scalable applications for the web.</h2>
      <h2>made with &#x2764; Gatsby.</h2>
    </Row>
    <Row
      justify="space-between"
      align="middle"
      className="footer-content"
      style={{
        // maxWidth: rhythm(28),
        // fontFamily: "Work Sans",
        color: 'black'
      }}
    >
      <Col
        xs={24}
        md={8}
        lg={8}
        className="leftCol"
        style={{ marginBottom: '4vh' }}
      >
        <h4>Copyright 2021, &#xa9;Aquib Baig, All rights reserved.</h4>
      </Col>
      <Col
        xs={24}
        md={8}
        lg={8}
        className="rightCol"
        style={{ marginBottom: '4vh', fontSize: '1rem' }}
      >
        <a target="blank" href="https://www.github.com/aquibbaig">
          <GithubOutlined style={{ marginLeft: '1rem', fontSize: '1.4rem' }} />
        </a>
        <a target="blank" href="https://linked.in/baigaquib">
          <LinkedinFilled style={{ marginLeft: '1rem', fontSize: '1.4rem' }} />
        </a>
        <a target="blank" href="https://twitter.com/BaigAquib">
          <TwitterCircleFilled style={{ marginLeft: '1rem', fontSize: '1.4rem' }} />
        </a>
      </Col>
    </Row>
  </footer>
)
