import React from 'react';
import { Input } from 'antd';
import { connectSearchBox } from "react-instantsearch-dom"

const { Search } = Input;

const searchBox = ({currentRefinement, isSearchStalled, refine, onFocus}) => {
  return (
    <Search
      autoComplete="off"
      id="search"
      className="search"
      suffix={<div>Ctrl+K</div>}
      value={currentRefinement}
      onChange={(e) => {e.preventDefault();refine(e.target.value)}}
      onFocus={onFocus}
    />
  );
};
const CustomSearchBar = connectSearchBox(searchBox);

export default CustomSearchBar;
