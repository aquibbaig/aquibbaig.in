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
          border: `0`,
          marginBottom: '1vh'
        } : {
          backgroundColor: lightBg,
          marginBottom: '1vh'
        }
      }
    >
      <Row align="middle" style={{ padding: '10px' }}>
        <Col style={innerStyle}>
          <p style={{ fontSize: '1.3rem', margin: '0', textAlign: 'left', fontWeight: '600' }}>
            {props.top}
          </p>
          <p style={{ fontSize: '1.6rem', margin: '0', textAlign: 'left', fontWeight: '600' }}>
            {props.header}
          </p>
          <p style={{ fontSize: '1rem', fontFamily: 'Roboto' }}>
            {props.content}
          </p>
          <p>
            <Button type="primary">
              <a href={buttonLink}
                style={{ fontFamily: 'Work Sans' }}>
                Navigate
              </a>
            </Button>
          </p>
        </Col>
      </Row>
    </Card >
  );
};
