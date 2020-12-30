import React from 'react';

import { Card, Row, Col } from 'antd';

export default (props) => {
  return (
    <Card hoverable {...props}>
      <Row align="middle">
        <Col xs={16}>
          <p style={{ fontSize: '1.2rem' }}>
            {props.header}
          </p>
          <p>
            {props.content}
          </p>
        </Col>
        <Col xs={8} align="center">
          34
        </Col>
      </Row>
    </Card>
  );
};
