import React, { useContext, useEffect } from 'react';
import { Card, Row, Col, Button } from 'antd';
import { ThemeContext } from '../../layout';

export default (props) => {
  const {
    buttonLink,
    loading,
    className,
    outerStyle,
    innerStyle,
    darkBg,
    lightBg,
    darkOutline,
  } = props;

  const { dark } = useContext(ThemeContext);

  useEffect(() => {
    // setLoading(loading);
  }, [loading]);
  return (
    <Card
      loading={loading}
      className={className}
      style={outerStyle, dark ?
        {
          backgroundColor: darkBg,
          border: `1px solid ${darkOutline}`
        } : {
          backgroundColor: lightBg
        }
      }
    >
      <Row align="middle">
        <Col style={innerStyle}>
          <p style={{ fontSize: '1.5rem', margin: '0' }}>
            {props.top}
          </p>
          <p style={{ fontSize: '2.5rem', margin: '0' }}>
            {props.header}
          </p>
          <p style={{ fontSize: '1rem' }}>
            {props.content}
          </p>
          <p>
            <Button type="primary">
              <a href={buttonLink}
                target="blank" style={{ fontFamily: 'Work Sans' }}>
                Launch
              </a>
            </Button>
          </p>
        </Col>
      </Row>
    </Card>
  );
};
