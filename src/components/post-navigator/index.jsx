import React from 'react'
import { Link } from 'gatsby'

import './index.scss'

export const PostNavigator = ({ pageContext }) => {
  const { previous, next } = pageContext

  return (
    <ul className="navigator">
      <li>
        {previous && (
          <Link to={previous.fields.slug} rel="prev" style={{ textDecoration: 'none' }}>
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={next.fields.slug} rel="next" style={{ textDecoration: 'none' }}>
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </ul>
  )
}
