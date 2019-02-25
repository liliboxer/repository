import React, { Component } from 'react';
import './TrackList.css';
import { Track } from '../Track/Track.js'

class TrackList extends Component {
  render() {
    return (
      <div className="TrackList">
        {this.props.tracks.map(track => {
          return <Track key={track.id}
                        track={track}
                        name={this.props.track.name}
                        artist={this.props.track.artist}
                        album={this.props.track.album}
                        onAdd={this.props.onAdd}
                        onRemove={this.props.onRemove}
                        isRemoval={this.props.onRemove}
                        removeTrack/>
        })
      }
      </div>
    )
  }
};

export {TrackList};
