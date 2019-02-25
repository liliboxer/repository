import React, { Component } from 'react';

class Track extends Component {

  constructor() {
    super(props)
    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack() {
    this.props.onAdd(this.props.track);
  }

  renderAction() {
    (isRemoval) ? <a className="Track-action"> - </a> : <a className="Track-action"> + </a>
  }

  render() {
    return (
      <div className="Track">
        <div className="Track-information">
          <h3> track name will go here </h3>
          <p> track artist will go here |track album will go here</p>
        </div>
        <a className="Track-action" onClick={this.removeTrack}>+ or - will go here</a>
      </div>
    )
  }

};

export {Track};
