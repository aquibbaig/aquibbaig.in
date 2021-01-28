import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import './index.scss'
import { Menu, Row, Col, Dropdown } from 'antd'
import { ThemeSwitch } from '../theme-switch'
import { MenuOutlined } from '@ant-design/icons'
import { StaticQuery, graphql } from 'gatsby'

// Theme Handlers
import * as Dom from '../../utils/dom'

export const Top = ({ title, location, rootPath, ...props }) => {
  const isRoot = location.pathname === rootPath
  const { setCheckVar, checked } = props;

  const setThemeCheck = (ch) => {
    setCheckVar(ch);
  }

  const menu = (
    <Menu style={{ backgroundColor: 'white' }}>
      <Menu.Item key="1">
        <Link to="/blog">Blog</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/projects">Projects</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <ThemeSwitch setVar={(c) => setThemeCheck(c)} />
      </Menu.Item>
    </Menu>
  );
  return (
    <>
      <div className="top"
        style={!checked ? { backgroundColor: '#F7F3ED' } : { backgroundColor: '#282C35' }}
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
                  <Row justify="space-between">
                    <Col>
                    </Col>
                    <Col style={{ paddingRight: '20vw' }}>
                      <Dropdown
                        trigger={['click']}
                        overlay={menu}
                      >
                        <MenuOutlined
                          style={!checked ?
                            {
                              fontSize: '1.8rem',
                              paddingTop: '1vh',
                              color: '#FC0027'
                            } : {
                              fontSize: '1.8rem',
                              paddingTop: '1vh',
                              color: '#D050B1'
                            }}
                        />
                      </Dropdown>
                      {/* ThemeSwitch was not able to access the root
                          level component. Hacky fix for dark mode. */}
                      <div style={{ display: 'none' }}>
                        <ThemeSwitch style={{ display: 'none' }} />
                      </div>
                    </Col>
                  </Row>
                  <Row justify="left" align="middle">
                    <Col
                      className="bio"
                      style={!checked ? { color: 'black' } : { color: 'white' }}
                    >
                      <div style={{ fontSize: '2.5rem' }}>Hi, I'm Aquib Baig.</div>
                      <div style={{ fontSize: '1.4rem' }}>I am a full stack web developer.</div>
                    </Col>
                  </Row>
                </>
              )
            )
          }}
        />
      </div>
      {/* Banners */}
      {!checked ? (
        <>
          <Row style={{ backgroundColor: '#FEBE26', height: '2vh' }}></Row>
          <Row style={{ backgroundColor: '#FE672E', height: '2vh' }}></Row>
          <Row style={{ backgroundColor: '#F52D3A', height: '2vh' }}></Row>
          <Row style={{ backgroundColor: '#B81E67', height: '2vh' }}></Row>
          <Row style={{ backgroundColor: '#710965', height: '2vh' }}></Row>
        </>
      ) : (
          <>
            <Row style={{ backgroundColor: '#D050B1', height: '2vh' }}></Row>
            <Row style={{ backgroundColor: '#9C1DCC', height: '2vh' }}></Row>
            <Row style={{ backgroundColor: '#750EB5', height: '2vh' }}></Row>
            <Row style={{ backgroundColor: '#4A1B8F', height: '2vh' }}></Row>
            <Row style={{ backgroundColor: '#24145D', height: '2vh' }}></Row>
          </>
        )}
    </>
  )
}
