import React from 'react'
import { Link } from 'gatsby'
import './index.scss'
import { Menu, Row, Col } from 'antd'
import { ThemeSwitch } from '../theme-switch'
import { ProjectOutlined, ProfileOutlined } from '@ant-design/icons'
import { StaticQuery, graphql } from 'gatsby'

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
                          fontSize: '1rem'
                        }}
                        selectedKeys={[1]}
                        mode="horizontal"
                      >
                        <Menu.Item key="blog">
                          <Link to="/blog" style={{ color: 'white' }}>Blog</Link>
                        </Menu.Item>
                        <Menu.Item key="projects">
                          <Link to="/projects" style={{ color: 'white' }}>Projects</Link>
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
                    className="bio"
                    style={{
                      color: 'white',
                      display: 'flex',
                    }}
                  >
                    Hi, I am an Open Source web developer {<br />}
                    who also likes to play video games, {<br />}
                    and occasionally paint.
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
