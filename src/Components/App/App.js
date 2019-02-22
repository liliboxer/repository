import React, { Component, Fragment } from 'react';
import './App.css';
import { SearchBar } from '../SearchBar/SearchBar.js';
import { SearchResults } from '../SearchResults/SearchResults.js';
import { Playlist } from '../Playlist/Playlist.js'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {

      serarchResults: [
        {
          name: ' ',
          artist: ' ',
          album: ' ',
          id: ' '
        }
      ],

        playlistName: 'Your Playlist',
        playlistTracks: [
          {
            name: ' ',
            artist: ' ',
            album: ' ',
            id: ' '
          }
        ]
      };

      this.addTrack = this.addTrack.bind(this);

      addTrack(track) {

      }


    }

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
                        playlistTracks={this.state.playlistTrack}/>
            </div>
          </div>
        </div>

      </Fragment>

    );
  }

}


export default App;
