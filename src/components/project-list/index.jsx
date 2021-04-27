import React, { useContext } from 'react';
import { Col, Card, Tag, Typography } from 'antd';
import { ThemeContext } from '../../layout';

const { Paragraph, Title } = Typography;

export default (props) => {
  const { projects } = props;
  const { dark } = useContext(ThemeContext);
  return (
    <>
      {projects.map(project => {
        return (
          <Col sm={24} md={24} key={project.link} className="project">
            <a href={project.link} target="_blank" style={{ marginBottom: '0' }}>
              <Card style={dark ?
                { background: 'transparent',
                  borderBottom: '1px solid rgba(229, 231, 235, 0.4)',
                  marginBottom: '4vh',
                }
                :
                { background: '#fff',
                  marginBottom: '4vh',
                  borderBottom: '1px solid rgba(229, 231, 235, 1)',
                }}>
                <div style={{ marginBottom: '2vh' }}>
                  <Title style={{
                    fontSize: '1.6rem',
                    margin: '0',
                    textAlign: 'left',
                    fontWeight: '600',
                  }}>
                    {project.title}
                  </Title>
                  <Paragraph style={{ fontSize: '1.2rem' }}>
                    {(project.desc).substring(0, 150)}...
                  </Paragraph>
                  {project.tags.map(tag => {
                    return (
                      <Tag key={tag}>{tag}</Tag>
                    )
                  })}
                </div>
              </Card>
            </a>
          </Col>
        )
      })}
    </>
  );
}
