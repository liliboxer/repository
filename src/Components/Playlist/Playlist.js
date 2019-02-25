import React, { Component } from 'react';
import { TrackList } from '../TrackList/TrackList.js'


class Playlist extends Component {
  constructor() {
    super(props)
    this.handleNameChange = this.handleNameChange.bind(this)
  }

  render() {
    return (
      <div className="Playlist">
        <input onChange={(e)=>{props.onNameChange(e.target.value);return;}} defaultValue={"New Playlist"}/>
          <TrackList tracks={this.props.playlistTracks}
                      isRemoval={this.props.onRemove}/>
        <a href='jsx-a11y/anchor-is-valid' className="Playlist-save" onClick={this.props.onSave}>SAVE TO SPOTIFY</a>
      </div>
    )
  }
};

export {Playlist};
