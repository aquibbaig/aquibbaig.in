import React, { useContext } from 'react';
import { Card } from 'antd';
import { ThemeContext } from '../../layout';
import Typography from 'antd/lib/typography';

const { Title, Paragraph } = Typography;

const Track = ({ track, lightBg, darkBg, idx }) => {
  const { dark } = useContext(ThemeContext);
  return (
    <Card
      className="track"
      style={dark ? 
        { background: darkBg,
          border: 0,
          paddingTop: '2vh'
          // marginBottom: '4vh',
        }:
        { background: lightBg,
          border: 0,
          paddingTop: '2vh'
          // marginBottom: '4vh',
        }
      }
      key={track.song}
    >
      <a
        href={track.url}
        target="_blank"
        style={{ textDecoration: 'none' }}
      >
        <Title style={{ fontSize: '1.6rem', margin: 0, padding: 0 }}>
          {idx+1}. {track.song}
        </Title>
      </a>
      <Paragraph style={{ fontSize: '1.4rem', margin: 0, padding: 0 }}>
        {track.artist}
      </Paragraph>
    </Card>
  )
}

export default Track;
