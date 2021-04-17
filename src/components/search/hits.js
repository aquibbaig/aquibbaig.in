import React from 'react';
import { Link } from "gatsby";
import { Row } from 'antd';
import {
  Index,
  connectHits,
  PoweredBy,
} from "react-instantsearch-dom";
import CustomHighlight from './highlight';
import { FaSearch } from 'react-icons/fa';
import { FaRandom } from 'react-icons/fa';

const Matches = ({ hits }) => {
  if (hits.length > 0) {
    return (
      <ol key={hits.length} style={{ marginLeft: 0, marginBottom: 0, padding: '10px' }}>
        {hits.map(hit => {
          return (
            <Link key={hit.title || hit.path} to={hit.slug || hit.path}>
              <div style={{ display: 'flex' }}>
                <FaSearch/>
                <p style={{ fontSize:'1rem', paddingLeft:'5px' }}>
                  <CustomHighlight attribute={hit.title ? "title" : "path"} hit={hit} key={hit.id} />
                </p>
              </div>
            </Link>
          )
        })}
      </ol>
    )
  }
  return (
    <div style={{ padding: '10px' }}>
      No results...
    </div>
  )
};

export const CustomHits = connectHits(Matches);

const HitsInIndex = ({index}) => (
  <Index indexName={index.name} indexId={index.name}>
    <CustomHits />
  </Index>
);

const SearchResults = ({ indices, className, show }) => {
  if (show) {
    return(
      <div
        className={className}
        style={{
          position: 'absolute',
          width: '100%'
        }}
      >
        {indices.map(index => {
          return (
            <div key={index.name}>
              <div style={{ display: 'flex' }}>
                <Row style={{ paddingLeft: '5px',paddingTop: '5px', width: '100%', fontSize: '1.1rem', alignItems: 'unset' }}>
                  <div style={{ marginRight: '5px', padding: '2px' }}>
                    <FaRandom />
                  </div>
                  <div style={{ fontWeight: '500' }}>
                    {index.name}
                  </div>
                </Row>
              </div>
              <HitsInIndex index={index} key={index.name} />
            </div>
          )
        })}
        <div style={{ display: 'flex', alignContent: 'space-between', paddingLeft: '5px' }}>
          <PoweredBy />
        </div>
      </div>
    )
  }
  return(<></>)
};

export default SearchResults;

