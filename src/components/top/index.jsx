import React, { useState } from 'react'
import { Link } from 'gatsby'
import './index.scss'
import { Row, Col, Menu } from 'antd'
import { ThemeSwitch } from '../theme-switch'
import { StaticQuery, graphql } from 'gatsby';
// import Searchbar from '../search';
import { FaBars } from 'react-icons/fa'

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
              >
                <Col lg={8} className="nav-menu">
                  <Link className="ff" to="/projects" style={{ textDecoration: 'none' }}>Projects</Link>
                  {/* <Link className="ff" to="/blog">Blog</Link> */}
                  <Link className="ff" to="/dashboard" style={{ textDecoration: 'none' }}>Dashboard</Link>
                  <Link className="ff" to="/about" style={{ textDecoration: 'none' }}>About</Link>
                  <Link className="rf" to="/" style={{ textDecoration: 'none' }}>Home</Link>
                </Col>
                <FaBars className="hamburger-menu" onClick={() => toggleShowMenu(expandMenu)}/>
                <Col>
                  <ThemeSwitch setVar={(c) => setThemeCheck(c)} />
                </Col>
                {/* <Col lg={8} className="search-container" style={{ marginTop: '-1vh' }}>
                  <Searchbar />
                </Col> */}
              </Row>
              {expandMenu && <Row
                className="navigation"
                justify="space-between"
                align="middle"
                style={{
                  margin: '0'
                }}
              >
                <Menu
                  style={{
                    background: 'transparent',
                    border: '0',
                  }}>
                  <Menu.Item>
                    <Link to="/" className="rf" style={{ fontSize: '1.4rem', textDecoration: 'none' }}>Home</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/projects" className="rf" style={{ fontSize: '1.4rem', textDecoration: 'none' }}>Projects</Link>
                  </Menu.Item>
                  {/* <Menu.Item>
                    <Link to="/blog" style={{ fontSize: '1.4rem' }}>Blog</Link>
                  </Menu.Item> */}
                  <Menu.Item>
                    <Link to="/dashboard" className="rf" style={{ fontSize: '1.4rem', textDecoration: 'none' }}>Dashboard</Link>
                  </Menu.Item>
                  <Menu.Item>
                    <Link to="/about" className="rf" style={{ fontSize: '1.4rem', textDecoration: 'none' }}>About</Link>
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
