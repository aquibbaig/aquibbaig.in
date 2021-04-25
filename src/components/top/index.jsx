import React, { useState } from 'react'
import { Link } from 'gatsby'
import './index.scss'
import { Row, Col, Menu } from 'antd'
import { ThemeSwitch } from '../theme-switch'
import { StaticQuery, graphql } from 'gatsby';
import Searchbar from '../search';
import { FaEquals, FaOutdent } from 'react-icons/fa'

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
                <Col>
                  <ThemeSwitch setVar={(c) => setThemeCheck(c)} />
                </Col>
                <Col lg={8} className="nav-menu">
                  <Link className="ff" to="/projects">Projects</Link>
                  <Link className="ff" to="/blog">Blog</Link>
                  <Link to="/">Home</Link>
                </Col>
                <FaOutdent className="hamburger-menu" onClick={() => toggleShowMenu(expandMenu)}/>
                {/* <Col lg={8} className="search-container" style={{ marginTop: '-1vh' }}>
                  <Searchbar />
                </Col> */}
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
  )
}
