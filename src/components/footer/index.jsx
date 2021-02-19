import React from 'react';
import { Col, Row } from 'antd';
import "fontsource-work-sans";
import { GithubOutlined, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons'
import CV from '../../../content/assets/Resume.pdf';

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
        <h3>
          <a style={{ marginLeft: '0.3rem', fontSize: '1.4rem' }} href={CV} download>
            Download CV
          </a>
        </h3>
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
            <h3 style={{ display: 'inline' }}>
              <svg
                style={{ marginRight: '0.1vw' }}
                xmlns="http://www.w3.org/2000/svg"
                width="24" height="24"
                viewBox="0 0 24 24">
                <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
              </svg>
                        Bangalore, India
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
        {/* <a target="blank" style={{ marginLeft: '0.3rem', fontSize: '1.4rem' }} href="https://drive.google.com/file/d/1-EEP_q239KPlD2NZd5xJrFTTN9bvqTYb/view?usp=sharing">
          <FileTextFilled />
        </a> */}
      </Col>
    </Row>
  </footer>
)
