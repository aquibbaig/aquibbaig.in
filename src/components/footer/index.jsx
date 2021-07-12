import React from 'react';
import { Row, Typography } from 'antd';

import './index.scss';
import { RiHeartFill } from 'react-icons/ri';

const { Text, Paragraph } = Typography;

export const Footer = () => (
  <footer className="footer" style={{ fontSize: '1.2rem' }}>
    <Row align="center" style={{ alignItems: 'normal' }}>
      <Text style={{ marginRight: '2px', fontSize: '1rem' }}>
        with
      </Text>
      <RiHeartFill />
      <Text style={{ marginLeft: '2px', fontSize: '1rem' }}>
        by Aquib Baig
      </Text>
    </Row>
    <Row align="center" style={{ alignItems: 'normal' }}>
      <Text style={{ marginLeft: '2px', fontSize: '1rem' }}>
        Copyright 2021
      </Text>
    </Row>
  </footer>
)
