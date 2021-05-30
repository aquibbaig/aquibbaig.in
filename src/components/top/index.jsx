import React, { useState } from 'react'
import { Link } from 'gatsby'
import './index.scss'
import { Row, Col, Menu } from 'antd'
import { ThemeSwitch } from '../theme-switch'
import { StaticQuery, graphql } from 'gatsby';
// import Searchbar from '../search';
import { RiMenuFill } from 'react-icons/ri';
import { rhythm } from '../../utils/typography'

export const Top = ({ title, location, rootPath, ...props }) => {
  const isRoot = location.pathname === rootPath;
  const [expandMenu, showExpandMenu] = useState(false);
  const { setCheckVar } = props;

  const isActive = (currRoute) => {
    if (location.pathname) {
      if (location.pathname === currRoute) {
        return true;
      }
    } else {
      if (location === currRoute) {
        return true;
      }
    }
    return false;
  };

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
                style={{
                  maxWidth: rhythm(40),
                  marginLeft: `auto`,
                  marginRight: `auto`,
                }}
                className="navigation"
                justify="space-between"
                align="middle"
              >
                <Col lg={8} className="nav-menu">
                  {/* <Link className="ff" to="/projects" style={{ textDecoration: 'none' }}>Projects</Link> */}
                  {/* <Link className="ff" to="/about" style={{ textDecoration: 'none' }}>About</Link> */}
                  <Link
                    className={isActive('/') ? `active` : `rf`}
                    to="/"
                    style={{ textDecoration: 'none' }}>
                      Home
                  </Link>
                  <Link
                    className={isActive('/blog') ? `active ff` : `ff`}
                    to="/blog"
                    style={{ textDecoration: 'none' }}>
                      Articles
                  </Link>
                  <Link
                    className={isActive('/me') ? `active ff` : `ff`}
                    to="/me"
                    style={{ textDecoration: 'none' }}>
                      About
                  </Link>
                </Col>
                <RiMenuFill className="hamburger-menu" onClick={() => toggleShowMenu(expandMenu)}/>
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
                    <Link to="/blog" className="rf" style={{ fontSize: '1.4rem', textDecoration: 'none' }}>Articles</Link>
                  </Menu.Item>
                  {/* <Menu.Item>
                    <Link to="/blog" style={{ fontSize: '1.4rem' }}>Blog</Link>
                  </Menu.Item> */}
                  <Menu.Item>
                    <Link to="/me" className="rf" style={{ fontSize: '1.4rem', textDecoration: 'none' }}>About</Link>
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
