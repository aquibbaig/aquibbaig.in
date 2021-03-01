import React from 'react';

const styles = {
  fontFamily: 'Roboto'
}

export const PostContainer = ({ html }) => (
  <div style={styles} dangerouslySetInnerHTML={{ __html: html }} />
)
