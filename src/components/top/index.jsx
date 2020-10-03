import React from 'react'
import { Link } from 'gatsby'
import { Menu, Row, Col, Typography } from 'antd'
import { ThemeSwitch } from '../theme-switch'
import { ProjectOutlined, ProfileOutlined } from '@ant-design/icons'

const { Paragraph } = Typography

const { SubMenu } = Menu

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      {!isRoot && (
        <>
          <Row justify="center">
            <Col>
              <Link to={`/`} className="link">
                {title}
              </Link>
            </Col>
            <Col>
              <Row>
                <Menu
                  style={{
                    background: 'transparent',
                    border: '0',
                    color: '#fff',
                  }}
                  selectedKeys={[1]}
                  mode="horizontal"
                >
                  <Menu.Item key="blog" icon={<ProfileOutlined />}>
                    blog
                  </Menu.Item>
                  <Menu.Item key="projects" icon={<ProjectOutlined />}>
                    projects
                  </Menu.Item>
                </Menu>
                <Col push={2} style={{ paddingTop: '10px' }}>
                  <ThemeSwitch />
                </Col>
              </Row>
            </Col>
          </Row>
          <Row justify="center" align="middle">
            <Col
              style={{ color: 'white', display: 'flex', fontSize: '1.8rem' }}
            >
              Hi, I am a Open Source web developer {<br />}
              who also likes to play video games, {<br />}
              paint and not read books.
            </Col>
            <Col>
              <img src="./hero.png" />
            </Col>
          </Row>
        </>
      )}
    </div>
  )
}
