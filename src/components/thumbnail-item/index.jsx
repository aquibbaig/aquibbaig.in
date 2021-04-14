import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Card } from 'antd';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { TARGET_CLASS } from '../../utils/visible';

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
        { background: darkBg, marginBottom: '1vh', border: 0, cursor: 'text' }
        :
        { background: lightBg, marginBottom: '1vh', border: 0, cursor: 'text' }
      }
    >
      <div key={node.fields.slug}>
        <div className="thumbnailTitle">
          <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
            <div>
              {node.frontmatter.title || node.fields.slug}
            </div>
          </Link>
        </div>
        <p style={{ fontFamily: 'Arial', verticalAlign: 'middle' }}><FaRegCalendarAlt/>{' '}{node.frontmatter.date}</p>
        {view === "complete-view" ? <p className="thumbnailContent"
          style={{ marginBottom: '1vh' }}
          dangerouslySetInnerHTML={{ __html: node.excerpt }} /> : <></>}
      </div>
    </Card>
  )
}
