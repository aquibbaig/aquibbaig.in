import React, { useContext } from 'react';
import { Col, Card, Tag } from 'antd';
import { ThemeContext } from '../../layout';

export default (props) => {
  const { projects } = props;
  const { dark } = useContext(ThemeContext);
  return (
    <>
      {projects.map(project => {
        return (
          <Col sm={24} md={24} key={project.link}>
            <a href={project.link} style={{ marginBottom: '0' }}>
              <Card hoverable style={dark ?
                { background: '#0F1029', marginBottom: '1vh', border: 0 }
                :
                { background: '#fff', marginBottom: '1vh', border: 0 }}>
                <p style={{ fontSize: '1.6rem', margin: '0', textAlign: 'left', fontWeight: '600', fontFamily: 'Calibre' }}>
                  {project.title}
                </p>
                <p style={{ fontSize: '1.4rem', fontFamily: 'Calibre' }}>
                  {(project.desc).substring(0, 200)}...
              </p>
                {project.tags.map(tag => {
                  return (
                    <Tag key={tag}>{tag}</Tag>
                  )
                })}
              </Card>
            </a>
          </Col>
        )
      })}
    </>
  );
}
