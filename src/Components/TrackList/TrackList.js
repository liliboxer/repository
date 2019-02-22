import React, { Component } from 'react';
import './TrackList.css';

class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
      <a className='tracks'>{this.props.searchResults}</a>
      </div>
    )
  }
};

export {TrackList};
