import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Card } from 'antd';
import { TARGET_CLASS } from '../../utils/visible';
import "@fontsource/roboto";
import "@fontsource/work-sans";

import './index.scss'
import { ThemeContext } from '../../layout';

export const ThumbnailItem = (props) => {
  const { darkBg, lightBg, node, view } = props;
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
        <p className="thumbnailTitle">
          <b>
            {node.frontmatter.title || node.fields.slug}
          </b>
        </p>
        <p>{node.frontmatter.date}</p>
        {view === "complete-view" ? <p className="thumbnailContent"
          style={{ fontFamily: 'Roboto' }}
          dangerouslySetInnerHTML={{ __html: node.excerpt }} /> : <></>}
      </div>
      <Link style={{ fontSize: '1rem' }} className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
        Read more..
      </Link>
    </Card>
  )
}
