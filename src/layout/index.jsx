import React from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'

import './index.scss'

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <React.Fragment>
      <Top title={title} location={location} rootPath={rootPath} />
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          // marginTop: '-10px',
          boxShadow: '0 2px 2px 0 rgba(0,0,0,0.1)',
        }}
      >
        <Header title={title} location={location} rootPath={rootPath} />
        {children}
      </div>
      <Footer />
    </React.Fragment>
  )
}

export default Layout
