import React, { useState, useEffect } from 'react'

import * as Dom from '../../utils/dom'
import * as Storage from '../../utils/storage'
import { THEME } from '../../constants'

import { FaSun, FaMoon } from 'react-icons/fa';
import { RiMoonClearLine } from 'react-icons/ri';
import { FiSun } from 'react-icons/fi';

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
          <RiMoonClearLine /> : <FiSun />
        }
      </label>
    </div>
  )
}
