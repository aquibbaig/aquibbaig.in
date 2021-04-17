import React, { useState, createRef } from 'react';
import './index.scss'
import { Hits, InstantSearch } from "react-instantsearch-dom"
import algoliasearch from 'algoliasearch';
import CustomSearchBar from './searchbar';
import SearchResults from './hits';
import useClickOutside from './utils';

export default () => {
  const [query, setQuery] = useState();
  const [focus, setFocus] = useState(false);
  const rootRef = createRef();
  const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
  );

  const indices = [
    { name: `Posts`, title: `Posts` },
    { name: `Pages`, title: `Pages` }
  ]
  
  useClickOutside(rootRef, () => setFocus(false));

  return (
    <div ref={rootRef}>
      <InstantSearch
        indexName="Posts"
        searchClient={searchClient}
        onSearchStateChange={({ query }) => setQuery(query)}
      >
        <CustomSearchBar onFocus={() => setFocus(true)} hasFocus={focus}/>
        <SearchResults
          show={query && query.length > 0 && focus}
          indices={indices}
        />
      </InstantSearch>
    </div>
  )
}
