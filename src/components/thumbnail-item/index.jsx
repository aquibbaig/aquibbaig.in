import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { Card, Typography } from 'antd';
import { FaRegCalendarAlt } from 'react-icons/fa';
import { TARGET_CLASS } from '../../utils/visible';

const { Title, Paragraph } = Typography;

import './index.scss'
import { ThemeContext } from '../../layout';

export const ThumbnailItem = (props) => {
  const { darkBg, lightBg, node, view } = props;
  const { dark } = useContext(ThemeContext);
  return (
    <Card
      className="dark"
      style={dark ?
        { background: darkBg, marginBottom: '1vh', border: 0, cursor: 'text' }
        :
        { background: lightBg, marginBottom: '1vh', border: 0, cursor: 'text' }
      }
    >
      <div key={node.fields.slug}>
        <div className="thumbnailTitle">
          <Link className={`thumbnail ${TARGET_CLASS}`} to={node.fields.slug}>
            <Title level={2} style={{ fontWeight: '500', margin: 0, border: 0, padding: 0 }}>
              {node.frontmatter.title || node.fields.slug}
            </Title>
          </Link>
        </div>
        {/* <p style={{ fontFamily: 'Arial', verticalAlign: 'middle' }}><FaRegCalendarAlt/>{' '}{node.frontmatter.date}</p> */}
        {view === "complete-view" ? <Paragraph className="thumbnailContent"
          style={{ marginBottom: '1vh' }}
          >{node.excerpt}</Paragraph> : <></>}
      </div>
    </Card>
  )
}
