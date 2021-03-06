import React from 'react';
import { Col, Row } from 'antd';
import "fontsource-work-sans";
import { GithubOutlined, LinkedinFilled, TwitterCircleFilled } from '@ant-design/icons'

import './index.scss';
import { rhythm } from '../../utils/typography';

export const Footer = () => (
  <footer className="footer">
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
        <h3>Copyright</h3>
        <h5>
          2021, &#xa9;Aquib Baig, All rights reserved.
        </h5>
      </Col>
      <Col
        xs={24}
        md={8}
        lg={8}
        className="centerCol"
        style={{ marginBottom: '4vh' }}
      >
        <h4 style={{ display: 'inline' }}>
          {/* <svg
            className="locale"
            style={{ marginRight: '0.1vw' }}
            xmlns="http://www.w3.org/2000/svg"
            width="24" height="24"
            viewBox="0 0 24 24">
            <path d="M12 0c-4.198 0-8 3.403-8 7.602 0 4.198 3.469 9.21 8 16.398 4.531-7.188 8-12.2 8-16.398 0-4.199-3.801-7.602-8-7.602zm0 11c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
          </svg> */}
              Bangalore, India
            </h4>
      </Col>
      <Col
        xs={24}
        md={8}
        lg={8}
        className="rightCol"
        style={{ marginBottom: '4vh', fontSize: '1rem' }}
      >
        <a target="blank" href="https://www.github.com/aquibbaig">
          Github,{' '}
          {/* <GithubOutlined style={{ marginLeft: '0.3rem', fontSize: '1.4rem' }} /> */}
        </a>
        <a target="blank" href="https://linked.in/baigaquib">
          LinkedIn,{' '}
          {/* <LinkedinFilled style={{ marginLeft: '0.3rem', fontSize: '1.4rem' }} /> */}
        </a>
        <a target="blank" href="https://twitter.com/BaigAquib">
          Twitter
          {/* <TwitterCircleFilled style={{ marginLeft: '0.3rem', fontSize: '1.4rem' }} /> */}
        </a>
      </Col>
    </Row>
  </footer>
)
