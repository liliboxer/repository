import React, { Component, Fragment } from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { SearchResults } from '../SearchResults/SearchResults.js';
import { Playlist } from '../Playlist/Playlist.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      serarchResults: [],
      playlistName: 'Your Playlist',
      playlistTracks: []
    };

      this.addTrack = this.addTrack.bind(this);
      this.updatePlaylistName = this.updatePlaylistName.bind(this);
      this.savePlaylist = this.savePlaylist.bind(this);
      this.search = this.search.bind(this);

      handlePlaylistUpdate(action, track) {
        if(this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
          if(action === 'remove') {
            this.setState(
              {Playlist: this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id)}
            );
          }
          return;
        } else if (action === 'add') {
          this.setState({Playlist: [...this.state.playlistTracks, track] });
        }
      };

      updatePlaylistName(name) {
        this.setState({PlaylistName: name});
      };

      render() {
        return (
          <Fragment>
            <div className="App">
              <header className="App-header">
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>

            <div>
              <h1>Ja<span className="highlight">mmm</span>ing</h1>
              <div className="App">
                  <SearchBar />
                <div className="App-playlist">
                  <SearchResults onAdd={this.addTrack}
                                 searchResults={this.state.searchResults}/>
                  <Playlist playlistName={this.state.playlistName}
                            playlistTracks={this.state.playlistTrack}
                            onRemove={this.removeTrack}/>
                </div>
              </div>
            </div>

          </Fragment>

        );
      }

    }


export default App;
