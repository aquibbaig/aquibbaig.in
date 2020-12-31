import React from 'react';
import { Col, Card } from 'antd';
import { rhythm } from '../../utils/typography';

export default (props) => {
  const { projects } = props;
  return (
    <>
      {projects.map(project => {
        return (
          <Col sm={24} md={8} key={project.link}>
            <Card hoverable style={{ minHeight: rhythm(10) }} className="dark">
              <p>{(project.title).toUpperCase()}</p>
              <p>{(project.desc).substring(0, 120)}...</p>
              <a href={project.link} style={{ marginBottom: '0' }}>Learn more</a>
            </Card>
          </Col>
        )
      })}
    </>
  );
}
