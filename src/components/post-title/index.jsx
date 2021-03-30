import React, { useContext } from 'react'
import { ThemeContext } from '../../layout';
import './index.scss';

const lightStyles = {
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '3rem',
  marginBottom: '2vh',
  color: '#38365D',
  fontFamily: 'Calibre'
}

const darkStyles = {
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '3rem',
  marginBottom: '2vh',
  color: 'white',
  fontFamily: 'Calibre'
}

const hrStyles = {
  border: '2px solid #ED585B',
  width: '10%',
  marginTop: '1vh'
}

export const PostTitle = ({ title }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <div className="postTitle" style={dark ? darkStyles : lightStyles}>
      {title}
    </div>
  )
}
