import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Card, Typography, Row, Col } from 'antd';
import moment from 'moment'
import { TARGET_CLASS } from '../../utils/visible';

const { Title, Paragraph } = Typography;

import './index.scss'
import { ThemeContext } from '../../layout';

export const ThumbnailItem = (props) => {
  const { darkBg, lightBg, node, view } = props;
  const { dark } = useContext(ThemeContext);
  return (
    <div className="thumbnail-wrapper" key={node.fields.slug}>
      <Row justify="space-between">
        <Col md={20} sm={24}>
          <Link style={{ textDecoration: 'none' }} className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
          <Title level={2} style={{ fontSize: '1.4rem',fontWeight: '500', margin: 0, border: 0, padding: 0 }}>
              {node.frontmatter.title || node.fields.slug}
            </Title>
          </Link>
        </Col>
        <Col md={4} sm={24}>
          <Title level={2} style={{ fontSize: '1.4rem',fontWeight: '300', margin: '0 0 0 10px', border: 0, padding: 0 }}>
            {moment(node.frontmatter.date).format("MMM D")}
          </Title>
        </Col>
      </Row>
      <Row>
        <Title level={2} style={{ fontSize: '1rem',fontWeight: '300', margin: '0 0 0 0', border: 0, padding: 0 }}>
          {node.fields.readingTime.text}
        </Title>
      </Row>
    </div>
  )
}
