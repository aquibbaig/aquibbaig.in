import React, { useState } from 'react'
import { Link } from 'gatsby'
import './index.scss'
import { Row, Col, Menu } from 'antd'
import { ThemeSwitch } from '../theme-switch'
import { StaticQuery, graphql } from 'gatsby';
import Searchbar from '../search';

export const Top = ({ title, location, rootPath, ...props }) => {
  const isRoot = location.pathname === rootPath;
  const [expandMenu, showExpandMenu] = useState(false);
  const { setCheckVar, checked } = props;

  const setThemeCheck = (ch) => {
    setCheckVar(ch);
  }

  const toggleShowMenu = (expandMenu) => {
    showExpandMenu(!expandMenu);
  }

  return (
    <>
      <div
        className="top"
        style={{
          position: 'fixed',
          top: '0',
          zIndex: 100,
        }}
      >
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
                  <Row
                    className="navigation"
                    justify="space-between"
                    align="middle"
                    style={{
                      fontFamily: "Calibre"
                    }}
                  >
                    <div className="brand">
                      Aquib Baig
                    </div>
                    <Col lg={8}>
                      <Menu
                        className="nav-menu"
                        mode="horizontal"
                        overflowedIndicator={<div>&#x2630;</div>}
                        style={{
                          background: 'transparent',
                          border: '0',
                        }}>
                        <Menu.Item>
                          <Link to="/">Home</Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link to="/projects">Projects</Link>
                        </Menu.Item>
                        <Menu.Item>
                          <Link to="/blog">Blog</Link>
                        </Menu.Item>
                      </Menu>
                    </Col>
                    <Col lg={8} className="hamburger-menu">
                      <div onClick={() => toggleShowMenu(expandMenu)}>
                        &#x2630;
                      </div>
                    </Col>
                    <Col lg={8} className="search-container" style={{ marginTop: '-1vh' }}>
                      <Searchbar />
                    </Col>
                    <Col>
                      <ThemeSwitch setVar={(c) => setThemeCheck(c)} />
                    </Col>
                  </Row>
                  {expandMenu && <Row
                    className="navigation"
                    justify="space-between"
                    align="middle"
                    style={{
                      fontFamily: "Calibre",
                      backgroundColor: '#0C2252',
                      margin: '0'
                    }}
                  >
                    <Menu
                      style={{
                        background: 'transparent',
                        border: '0',
                      }}>
                      <Menu.Item>
                        <Link to="/" style={{ color: 'white' }}>Home</Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/projects" style={{ color: 'white' }}>Projects</Link>
                      </Menu.Item>
                      <Menu.Item>
                        <Link to="/blog" style={{ color: 'white' }}>Blog</Link>
                      </Menu.Item>
                    </Menu>
                  </Row>}
                </>
              )
            )
          }}
        />
      </div>
    </>
  )
}
