import React, { Component } from 'react';
import './TrackList.css';

class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track) => {
          return <Track key={track.id}
                        track={track}
                        name={this.props.track.name}
                        artist={this.props.track.artist}
                        album={this.props.track.album}/>
        }}
      </div>
    )
  }
};

export {TrackList};
