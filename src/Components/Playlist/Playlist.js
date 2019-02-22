import React, { Component } from 'react';
import { TrackList } from '../TrackList/TrackList.js'


class Playlist extends Component {
  render() {
    return (
      <div className="Playlist">
        <input defaultValue={"New Playlist"}/>
          <TrackList />
        <a href='jsx-a11y/anchor-is-valid' className="Playlist-save">SAVE TO SPOTIFY</a>
      </div>
    )
  }
};

export {Playlist};
