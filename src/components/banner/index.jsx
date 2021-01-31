import React, { useContext } from 'react';
import BackgroundImage from 'gatsby-background-image'
import { ThemeContext } from '../../layout';

export default (props) => {
  // Context variable.
  const { dark } = useContext(ThemeContext)
  const { h1, smallText, button, darkModeImage, lightImage } = props;
  return (
    <div style={{ marginBottom: '2vh' }}>
      {dark ? (
        <BackgroundImage fluid={darkModeImage}>
          <div className="content" style={{ padding: '1.5rem' }}>
            <p style={{ fontSize: '2rem', marginBottom: '0' }}>{h1}</p>
            <p>{smallText}</p>
            {button}
          </div>
        </BackgroundImage>
      ) : <BackgroundImage fluid={lightImage}>
          <div className="content" style={{ padding: '1.5rem' }}>
            <p style={{ fontSize: '2rem', marginBottom: '0' }}>{h1}</p>
            <p>{smallText}</p>
            {button}
          </div>
        </BackgroundImage>}
    </div>
  )
}
