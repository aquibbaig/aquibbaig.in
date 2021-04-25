import React, { useContext } from 'react'
import { ThemeContext } from '../../layout';
import { Typography } from 'antd';
import './index.scss';

const { Title } = Typography;

const lightStyles = {
  textAlign: 'left',
  color: '#000',
  fontSize: '2.8rem',
  fontWeight: '800',
  padding: 0,
  margin: 0,
  marginBottom: `5vh`
}

const darkStyles = {
  textAlign: 'left',
  color: '#fff',
  fontSize: '2.8rem',
  fontWeight: '800',
  padding: 0,
  margin: 0,
  marginBottom: `5vh`
}

export const PostTitle = ({ title }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <Title className="postTitle" style={dark ? darkStyles : lightStyles}>
      {title}
    </Title>
    // <div className="postTitle" style={dark ? darkStyles : lightStyles}>
    //   {title}
    // </div>
  )
}
