import React from 'react';
import { Avatar, Row } from 'antd';

import './index.scss'

export const PostDate = ({ date }) => {
  return (
    <Row align="middle" style={{ marginBottom: '5vh' }}>
      <p className="post-date">
        <Avatar size={60} src="https://avatars.githubusercontent.com/u/26324376?v=4" />
      </p>
      <p className="post-date" style={{ fontFamily: 'Arial' }}>
        <span className="brand">Aquib Baig, </span>
        {date}
      </p>
    </Row>
  );
};
