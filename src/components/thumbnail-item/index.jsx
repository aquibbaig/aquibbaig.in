import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Card } from 'antd';
import { TARGET_CLASS } from '../../utils/visible';
import "@fontsource/roboto"

import './index.scss'
import { ThemeContext } from '../../layout';

export const ThumbnailItem = (props) => {
  const { darkBg, lightBg, node } = props;
  const { dark } = useContext(ThemeContext);
  return (
    <Card
      className="dark"
      hoverable
      style={dark ?
        { background: darkBg, marginBottom: '1vh', border: 0 }
        :
        { background: lightBg, marginBottom: '1vh', border: 0 }
      }
    >
      <div key={node.fields.slug}>
        <p style={{ fontSize: '1.6rem', fontWeight: '600', fontFamily: 'Work Sans', margin: '0', textAlign: 'left' }}>{node.frontmatter.title || node.fields.slug}</p>
        <p>{node.frontmatter.date}</p>
        <p style={{ textAlign: 'justify', fontFamily: 'Roboto' }} dangerouslySetInnerHTML={{ __html: node.excerpt }} />
      </div>
      <Link style={{ fontSize: '1rem' }} className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
        Read more..
      </Link>
    </Card>
  )
}
