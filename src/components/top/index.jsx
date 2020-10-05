import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'
import { Menu, Row, Col, Typography } from 'antd'
import { ThemeSwitch } from '../theme-switch'
import { ProjectOutlined, ProfileOutlined } from '@ant-design/icons'
import { StaticQuery, graphql } from 'gatsby'

const { SubMenu } = Menu

import './index.scss'

export const Top = ({ title, location, rootPath }) => {
  const isRoot = location.pathname === rootPath
  return (
    <div className="top">
      <StaticQuery
        query={graphql`
          query {
            file(absolutePath: { regex: "/hero.png/" }) {
              childImageSharp {
                fixed(width: 220, height: 200) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}
        render={data => {
          return (
            !isRoot && (
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
                    style={{
                      color: 'white',
                      display: 'flex',
                      fontSize: '1.8rem',
                    }}
                  >
                    Hi, I am an Open Source web developer {<br />}
                    who also likes to play video games, {<br />}
                    paint and not read books.
                  </Col>
                  <Col
                    style={{
                      color: 'white',
                      display: 'flex',
                      fontSize: '1.8rem',
                    }}
                  >
                    {/* <div className="isv">
                      <Img fixed={data.file.childImageSharp.fixed} />
                    </div> */}
                    <div className="isv">#dev</div>
                  </Col>
                </Row>
              </>
            )
          )
        }}
      />
    </div>
  )
}
