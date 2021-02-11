import React, { useState, useEffect } from 'react'

import * as Dom from '../../utils/dom'
import * as Storage from '../../utils/storage'
import { THEME } from '../../constants'

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

const MoonIcon = () => {
  return (
    <svg
      width="22px"
      height="30px"
      style={{
        margin: '0 10px'
      }}
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="moon"
      className="svg-inline--fa fa-moon fa-w-16 hex-icon"
      role="img"
      viewBox="0 0 512 512">
      <path fill="currentColor" d="M283.211 512c78.962 0 151.079-35.925 198.857-94.792 7.068-8.708-.639-21.43-11.562-19.35-124.203 23.654-238.262-71.576-238.262-196.954 0-72.222 38.662-138.635 101.498-174.394 9.686-5.512 7.25-20.197-3.756-22.23A258.156 258.156 0 0 0 283.211 0c-141.309 0-256 114.511-256 256 0 141.309 114.511 256 256 256z">
      </path>
    </svg>
  )
}

const SunIcon = () => {
  return (
    <span className="hex-icon-sun">
      <svg>
        <path d="M19,1 Q21,0,23,1 L39,10 Q41.5,11,42,14 L42,36 Q41.5,39,39,40 L23,49 Q21,50,19,49 L3,40 Q0.5,39,0,36 L0,14 Q0.5,11,3,10 L19,1"></path>
        <circle cx="21" cy="25" r="8"></circle>
        <circle cx="21" cy="25" r="12">
          <animateTransform attributeName="transform" attributeType="XML" type="rotate" from="0 21 25" to="360 21 25" dur="3.5s" repeatCount="indefinite"></animateTransform>
        </circle>
      </svg>
    </span>
  )
}

export const ThemeSwitch = (props) => {
  const { setVar } = props;
  const [checked, setChecked] = useState(false)

  const handleChange = checked => {
    const theme = getTheme(checked)

    Storage.setTheme(checked)
    setChecked(checked)
    if (setVar) {
      setVar(checked)
    }
    toggleTheme(theme)
  }

  useEffect(() => {
    const checked = Storage.getTheme(Dom.hasClassOfBody(THEME.DARK))

    handleChange(checked)
  }, [])

  return (
    <div className="switch-container" onClick={() => handleChange(!checked)}>
      <label htmlFor="normal-switch">
        {!checked ?
          <SunIcon /> :
          <MoonIcon />
        }
      </label>
    </div>
  )
}
