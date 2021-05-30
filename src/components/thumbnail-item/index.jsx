import React from 'react'
import { Link } from 'gatsby'
import { Typography, Row, Col } from 'antd';
import moment from 'moment'
import { TARGET_CLASS } from '../../utils/visible';

const { Title } = Typography;

import './index.scss'

export const ThumbnailItem = (props) => {
  const { node } = props;
  return (
    <div className="thumbnail-wrapper" key={node.fields.slug}>
      <Row justify="space-between">
        <Col md={20} sm={24}>
          <Link style={{ textDecoration: 'none' }} className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
          <Title level={2} style={{ fontSize: '1.4rem',fontWeight: '400', margin: 0, border: 0, padding: 0 }}>
              {node.frontmatter.title || node.fields.slug}
            </Title>
          </Link>
        </Col>
        <Col md={4} sm={24}>
          <Title level={2} style={{ fontSize: '1.2rem',fontWeight: '300', margin: '0 0 0 0px', border: 0, padding: 0 }}>
            {moment(new Date(node.frontmatter.date)).format("MMM D")}
          </Title>
        </Col>
      </Row>
      <Row>
        <Title
          level={2}
          style={{
            fontSize: '1rem',
            fontWeight: '300',
            margin: '0 0 0 0',
            border: 0,
            padding: 0,
            opacity: '70%'
          }}>
          {node.fields.readingTime.text}
        </Title>
      </Row>
    </div>
  )
}
