import React, { createContext, useEffect, useState } from 'react'

import { Top } from '../components/top'
import { Header } from '../components/header'
import { Footer } from '../components/footer'
import { rhythm } from '../utils/typography'

// Theme vars
import * as Dom from '../utils/dom'
import * as Storage from '../utils/storage'
import { THEME } from '../constants'

import './index.scss'

function getTheme(checked) {
  return checked ? THEME.DARK : THEME.LIGHT
}

function toggleTheme(theme) {
  switch (theme) {
    case THEME.LIGHT: {
      Dom.addClassToBody(THEME.LIGHT)
      Dom.removeClassToBody(THEME.DARK)
      break
    }
    case THEME.DARK: {
      Dom.addClassToBody(THEME.DARK)
      Dom.removeClassToBody(THEME.LIGHT)
      break
    }
  }
}

export const ThemeContext = createContext();

const Layout = ({ location, title, children }) => {
  const [checked, setChecked] = useState(false)
  const renderChildren = (children) => {
    return (
      <ThemeContext.Provider value={{ "dark": checked }}>
        {children}
      </ThemeContext.Provider>
    )
  }
  const handleChange = ch => {
    const theme = getTheme(ch)

    Storage.setTheme(ch)
    setChecked(ch)
    toggleTheme(theme)
  }
  useEffect(() => {
    const ch = Storage.getTheme(Dom.hasClassOfBody(THEME.DARK))

    handleChange(ch)
  }, [checked])
  const rootPath = `${__PATH_PREFIX__}/`
  return (
    <>
      <Top
        setCheckVar={(c) => setChecked(c)}
        title={title}
        location={location}
        rootPath={rootPath}
        checked={checked}
      />
      <br />
      <div
        id="layout-content"
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          fontSize: '1rem',
          textAlign: 'justify'
        }}
      >
        <Header title={title} location={location} rootPath={rootPath} />
        {renderChildren(children)}
      </div>
      <Footer />
    </>
  )
}

export default Layout
