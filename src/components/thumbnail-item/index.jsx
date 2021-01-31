import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Card } from 'antd';
import { TARGET_CLASS } from '../../utils/visible'

import './index.scss'

export const ThumbnailItem = ({ node }) => {
  return (
    <Card className="dark" hoverable style={{ cursor: 'text', marginBottom: '2vh' }}>
      <div key={node.fields.slug}>
        <h3>{node.frontmatter.title || node.fields.slug}, {node.frontmatter.date}</h3>
        <p dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
      <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
        Read more..
      </Link>
    </Card>
  )
}
