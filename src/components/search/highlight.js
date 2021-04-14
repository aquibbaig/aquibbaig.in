import React from 'react';
import { connectHighlight } from 'react-instantsearch-dom';

const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  return (
    <span>
      {parsedHit.map(
        (part, index) =>
          part.isHighlighted ? (
            <mark key={index}>{part.value}</mark>
          ) : (
            <span key={index}>{part.value}</span>
          )
      )}
    </span>
  );
};


// 2. Connect the component using the connector
const CustomHighlight = connectHighlight(Highlight);

export default CustomHighlight;
