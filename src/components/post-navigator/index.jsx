import React from 'react'
import { Link } from 'gatsby'
import { Col, Row, Typography } from 'antd'

import './index.scss'

export const PostNavigator = ({ pageContext }) => {
  const { previous, next } = pageContext

  return (
    <Row className="navigator" justify="space-between" style={{ marginTop: '5vh' }}>
      {previous ? <Col xs={24} md={12}>
        <Typography.Paragraph style={{ fontSize: '0.8rem' }}>
          Previous Article
        </Typography.Paragraph>
        <Typography.Paragraph className="navigator-post">
          <Link to={`${previous.fields.slug}`} rel="prev" style={{ textDecoration: 'none' }}>
            {previous.frontmatter.title}
          </Link>
        </Typography.Paragraph>
      </Col>: <Col xs={24} md={12}></Col>}
      {next && <Col xs={24} md={12} style={{ textAlign: 'right', fontSize: '0.8rem' }}>
        <Typography.Paragraph>
          Next Article
        </Typography.Paragraph>
        <Typography.Paragraph className="navigator-post">
          <Link to={`${next.fields.slug}`} rel="prev" style={{ textDecoration: 'none' }}>
            {next.frontmatter.title}{''}
          </Link>
        </Typography.Paragraph>
      </Col>}
    </Row>
  )
}
