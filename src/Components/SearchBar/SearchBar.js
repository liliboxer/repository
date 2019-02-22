import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  render() {
    return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist" />
      <a href='jsx-a11y/anchor-is-valid'>SEARCH</a>
    </div>
    )
  }
}

export {SearchBar};
