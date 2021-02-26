import React, { useContext } from 'react'
import "@fontsource/open-sans";
import { ThemeContext } from '../../layout';

const lightStyles = {
  textAlign: 'left',
  fontFamily: 'Work Sans',
  fontWeight: 'bold',
  fontSize: '2.4rem',
  marginBottom: '2vh',
  color: '#38365D'
}

const darkStyles = {
  textAlign: 'left',
  fontFamily: 'Work Sans',
  fontWeight: 'bold',
  fontSize: '2.4rem',
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
  console.log(dark);
  return (
    <div className="postTitle" style={dark ? darkStyles : lightStyles}>
      {title}
      <hr style={hrStyles} />
    </div>
  )
}
