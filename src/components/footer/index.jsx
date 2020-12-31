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
      style={{ maxWidth: rhythm(24), marginLeft: 'auto', marginRight: 'auto', marginTop: '-10vh' }}
    >
      <a
        href="https://github.com/aquibbaig"
        style={{ color: '#FF9523', fontSize: '2rem' }}
      >عاقب بیگ.</a>
    </Row>
  </footer>
)
