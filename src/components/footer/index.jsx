import React from 'react';
import { Row } from 'antd';

import './index.scss';
import { rhythm } from '../../utils/typography';

export const Footer = () => (
  <footer className="footer">
    <Row
      justify="end"
      align="bottom"
      className="footer-content"
      style={{ maxWidth: rhythm(24), marginLeft: 'auto', marginRight: 'auto' }}
    >
      <a
        href="https://github.com/aquibbaig"
        style={{ fontSize: '1rem' }}
      >© Aquib.</a>
    </Row>
  </footer>
)
