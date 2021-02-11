import React from 'react';
import { Col, Row } from 'antd';
import "fontsource-work-sans";
import { GithubOutlined, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons'

import './index.scss';
// import { rhythm } from '../../utils/typography';

export const Footer = () => (
  <footer className="footer">
    <Row
      justify="space-between"
      // align="bottom"
      className="footer-content"
      style={{
        // maxWidth: rhythm(24),
        fontFamily: "Work Sans",
        color: 'black'
      }}
    >
      <Col lg={8} xs={24} md={8}
        style={{ marginBottom: '4vh' }}
      >
        <h3>AQUIB.</h3>
      </Col>
      <Col lg={8} xs={24} md={8}>
        <Row justify="space-around">
          <Col lg={12} xs={24} md={12}
            justify="start"
            style={{ marginBottom: '4vh' }}
          >
            <h3>Copyright</h3>
            <h5>
              2021, &#xa9;Aquib Baig
            </h5>
            <h6>
              All rights reserved.
            </h6>
          </Col>
          <Col lg={12} xs={24} md={12} justify="start">
            <h3>
              <a target="blank" href="https://drive.google.com/file/d/1-EEP_q239KPlD2NZd5xJrFTTN9bvqTYb/view?usp=sharing">
                Resume
              </a>
            </h3>
            {/* <h5>Hire me!!</h5> */}
          </Col>
        </Row>
      </Col>
      <Col lg={8} xs={24} md={8}>
        <a target="blank" href="https://www.github.com/aquibbaig">
          <GithubOutlined style={{ marginLeft: '0.3rem', fontSize: '1.4rem' }} />
        </a>
        <a target="blank" href="https://linked.in/baigaquib">
          <LinkedinFilled style={{ marginLeft: '0.3rem', fontSize: '1.4rem' }} />
        </a>
        <a target="blank" href="https://twitter.com/BaigAquib">
          <TwitterCircleFilled style={{ marginLeft: '0.3rem', fontSize: '1.4rem' }} />
        </a>
      </Col>
    </Row>
  </footer>
)
