import React, { useContext } from 'react'
import "@fontsource/open-sans";
import { ThemeContext } from '../../layout';

const lightStyles = {
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '1.8rem',
  marginBottom: '2vh',
  color: '#38365D'
}

const darkStyles = {
  textAlign: 'left',
  fontWeight: 'bold',
  fontSize: '1.8rem',
  marginBottom: '2vh',
  color: 'white'
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
      <hr style={hrStyles} />
    </div>
  )
}
