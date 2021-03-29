import React from 'react';

const styles = {
  fontFamily: 'Calibre-Regular',
  fontSize: '1.3rem'
}

export const PostContainer = ({ html }) => (
  <div style={styles} dangerouslySetInnerHTML={{ __html: html }} />
)
