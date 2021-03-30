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
    <span className="hex-icon-moon">
      <svg
        fill="white"
        id="_x31_"
        viewBox="-8 -11 40 48"
        xmlns="http://www.w3.org/2000/svg">
        <g>
          <path d="m12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6c.767 0 1.502.14 2.187.416.19.077.314.262.313.467s-.127.388-.318.463c-1.933.754-3.182 2.581-3.182 4.654s1.249 3.9 3.182 4.654c.191.075.317.258.318.463s-.123.39-.313.467c-.685.276-1.42.416-2.187.416zm0-11c-2.757 0-5 2.243-5 5s2.243 5 5 5c.212 0 .421-.013.626-.038-1.628-1.098-2.626-2.932-2.626-4.962s.998-3.864 2.626-4.962c-.205-.025-.414-.038-.626-.038z" /></g><g><path d="m12 23.693c-.639 0-1.277-.243-1.764-.729l-1.963-1.964h-2.773c-1.379 0-2.5-1.122-2.5-2.5v-2.773l-1.964-1.963c-.972-.973-.972-2.555 0-3.527l1.964-1.964v-2.773c0-1.378 1.121-2.5 2.5-2.5h2.773l1.963-1.963c.973-.973 2.555-.973 3.527 0l1.964 1.963h2.773c1.379 0 2.5 1.122 2.5 2.5v2.773l1.964 1.963c.972.973.972 2.555 0 3.527l-1.964 1.964v2.773c0 1.378-1.121 2.5-2.5 2.5h-2.773l-1.963 1.963c-.487.487-1.125.73-1.764.73zm-6.5-19.693c-.827 0-1.5.673-1.5 1.5v2.98c0 .133-.053.26-.146.354l-2.11 2.11c-.582.583-.582 1.531 0 2.113l2.11 2.11c.093.093.146.22.146.353v2.98c0 .827.673 1.5 1.5 1.5h2.98c.133 0 .26.053.354.146l2.109 2.11c.582.582 1.531.583 2.113 0l2.109-2.11c.095-.093.222-.146.355-.146h2.98c.827 0 1.5-.673 1.5-1.5v-2.98c0-.133.053-.26.146-.354l2.11-2.11c.582-.583.582-1.531 0-2.113l-2.11-2.11c-.093-.093-.146-.22-.146-.353v-2.98c0-.827-.673-1.5-1.5-1.5h-2.98c-.133 0-.26-.053-.354-.146l-2.109-2.11c-.582-.582-1.531-.583-2.113 0l-2.109 2.11c-.095.093-.222.146-.355.146zm17.11 9.41h.01z" />
        </g>
      </svg>
    </span>
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
