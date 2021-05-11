import React from 'react';
import Track from '../track';
import { Spin } from 'antd';
import './index.scss';

const Tracks = ({ tracks, loading }) => {
  if (!loading) {
    return (
      <div className="track-container">
        {tracks.slice(0,7).map((track, idx) => {
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
      </div>
    )
  }
  return (
    <Spin />
  )
}

export default Tracks;
