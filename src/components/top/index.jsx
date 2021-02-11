import React from 'react'
import { Link } from 'gatsby'
import './index.scss'
import { Menu, Row, Col, Dropdown, Divider } from 'antd'
import { ThemeSwitch } from '../theme-switch'
import { MoreOutlined } from '@ant-design/icons'
import { StaticQuery, graphql } from 'gatsby'
import { rhythm } from '../../utils/typography'

export const Top = ({ title, location, rootPath, ...props }) => {
  const isRoot = location.pathname === rootPath
  const { setCheckVar, checked } = props;

  const setThemeCheck = (ch) => {
    setCheckVar(ch);
  }

  return (
    <>
      <div className="top"
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
                  {/* <Row justify="space-between">
                    <Col>
                    </Col>
                    <Col style={{ paddingRight: '20vw' }}>
                      <Dropdown
                        trigger={['click']}
                        overlay={menu}
                      >
                        <MoreOutlined
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
                  {/* <div style={{ display: 'none' }}>
                        <ThemeSwitch style={{ display: 'none' }} />
                      </div>
                    </Col> */}
                  {/* </Row> */}
                  <Row justify="space-between" className="hello" align="middle">
                    <Col>
                      <div style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>Hello,</div>
                    </Col>
                    <Col>
                      <ThemeSwitch setVar={(c) => setThemeCheck(c)} />
                    </Col>
                  </Row>
                  <Row justify="space-between" className="heading" align="middle">
                    <Col
                      className="bio"
                    >
                      <div style={{ fontSize: '1.5rem' }}>I'm <Link to="/">Aquib,</Link></div>
                      <div style={{ fontSize: '1rem' }}>A full stack developer from India.</div>
                      <hr />
                    </Col>
                  </Row>
                  <Row
                    className="navigation"
                    justify="space-around" align="middle">
                    <Col>
                      <p>HOME</p>
                    </Col>
                    <p>BLOG</p>
                    <Col>
                      <p>CONTACT</p>
                    </Col>
                  </Row>
                </>
              )
            )
          }}
        />
      </div>
      {/* Banners */}
      {/* {!checked ? (
        <>
          <Row style={{ backgroundColor: '#FEE761', height: '1vh' }}></Row>
          <Row style={{ backgroundColor: '#FF755A', height: '1vh' }}></Row>
          <Row style={{ backgroundColor: '#F52D3A', height: '1vh' }}></Row>
          <Row style={{ backgroundColor: '#B81E67', height: '1vh' }}></Row>
          <Row style={{ backgroundColor: '#710965', height: '1vh' }}></Row>
        </>
      ) : (
          <>
            <Row style={{ backgroundColor: '#D050B1', height: '1vh' }}></Row>
            <Row style={{ backgroundColor: '#9C1DCC', height: '1vh' }}></Row>
            <Row style={{ backgroundColor: '#750EB5', height: '1vh' }}></Row>
            <Row style={{ backgroundColor: '#4A1B8F', height: '1vh' }}></Row>
            <Row style={{ backgroundColor: '#24145D', height: '1vh' }}></Row>
          </>
        )} */}
    </>
  )
}
