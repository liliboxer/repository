import React, { Component } from 'react';
import { TrackList } from '../TrackList/TrackList.css';
import './SearchResults.css'

class SearchResults extends Component {
  render() {
    return (
      <div className="SearchResults">
        <h2>Results</h2>
        <TrackList tracks={this.props.searchResults}/>
      </div>
    )
  }
};

export {SearchResults};
