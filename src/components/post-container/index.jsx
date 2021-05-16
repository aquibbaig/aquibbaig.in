import React from 'react';

const styles = {
  fontSize: '1.2rem'
}

export const PostContainer = ({ html }) => (
  <div style={styles} dangerouslySetInnerHTML={{ __html: html }} />
)
