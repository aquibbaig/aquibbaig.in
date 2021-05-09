import React, { useContext } from 'react';
import { ThemeContext } from '../../layout';
import Track from '../track';
import { Spin } from 'antd';
import './index.scss';

const Tracks = ({ tracks, loading }) => {
  if (!loading) {
    return (
      <>
        {tracks.map((track, idx) => {
          return (
            <Track
              idx={idx}
              key={track.song}
              lightBg="#fff"
              darkBg="#082b38"
              track={track}
            />
          );
        })}
      </>
    )
  }
  return (
    <Spin />
  )
}

export default Tracks;
