import React, { Component } from 'react';
import './SearchBar.css'

class SearchBar extends Component {
  constructor() {
    super(props);
    this.search = this.search.bind(this);
    this.handleNameChange this.handleNameChange.bind(this)
  };

  handleTermChange(e) {
    this.setState
  };

  search() {

  };

  render() {
    return (
    <div className="SearchBar">
      <input placeholder="Enter A Song, Album, or Artist"
             onCHange={this.handleTermChange}/>
      <a href='jsx-a11y/anchor-is-valid'>SEARCH</a>
    </div>
    )
  }
}

export {SearchBar};
