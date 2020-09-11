import React, { Component } from 'react';
import './App.css';

import SpotifyWebApi from 'spotify-web-api-js';
const spotifyApi = new SpotifyWebApi();

class App extends Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
      nowPlaying: { song: '', artist: '', id: '', albumArt: '' },
      relatedArtists: {id: ''},
      tracks1: {name: '', id: ''},
      tracks2: {name: '', id: ''},
      tracks3: {name: '', id: ''},
      tracks4: {name: '', id: ''},
      tracks5: {name: '', id: ''},
      tracks6: {name: '', id: ''},
      tracks7: {name: '', id: ''},
      tracks8: {name: '', id: ''},
      tracks9: {name: '', id: ''},
      tracks10: {name: '', id: ''},
      user: {userId: ''},
      playlist: {playlistId: '', images: ''}
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getNowPlaying(){
    spotifyApi.getMyCurrentPlaybackState()
      .then((response) => {
        try {
          this.setState({
            nowPlaying: { 
                song: response.item.name,
                artist: response.item.artists[0].name,
                id: response.item.artists[0].id,
                albumArt: response.item.album.images[0].url
              }
          })
        } catch (error) {
        };
        spotifyApi.getArtistRelatedArtists(response.item.artists[0].id)
        .then((response) => {
          this.setState({
            relatedArtists: {
              relatedArtist1: response.artists[0].id,
              relatedArtist2: response.artists[1].id,
              relatedArtist3: response.artists[2].id,
              relatedArtist4: response.artists[3].id,
              relatedArtist5: response.artists[4].id,
              relatedArtist6: response.artists[5].id,
              relatedArtist7: response.artists[6].id,
              relatedArtist8: response.artists[7].id,
              relatedArtist9: response.artists[8].id,
              relatedArtist10: response.artists[9].id
            }
          });
        spotifyApi.getArtistTopTracks(this.state.relatedArtists.relatedArtist1, "US")
        .then((response) => {
          this.setState({
            tracks1: {
              track1: response.tracks[Math.floor((Math.random()*response.tracks.length))].uri,
              track2: response.tracks[Math.floor((Math.random()*response.tracks.length))].uri
            }
          })
        });
          spotifyApi.getArtistTopTracks(this.state.relatedArtists.relatedArtist2, "US")
          .then((response) => {
            this.setState({
              tracks2: {
                track1: response.tracks[Math.floor((Math.random()*response.tracks.length))].uri,
                track2: response.tracks[Math.floor((Math.random()*response.tracks.length))].uri
              }
            })
          });
          spotifyApi.getArtistTopTracks(this.state.relatedArtists.relatedArtist3, "US")
          .then((response) => {
            this.setState({
              tracks3: {
                track1: response.tracks[Math.floor((Math.random()*response.tracks.length))].uri,
                track2: response.tracks[Math.floor((Math.random()*response.tracks.length))].uri
              }
            })
          });
          spotifyApi.getArtistTopTracks(this.state.relatedArtists.relatedArtist4, "US")
          .then((response) => {
            this.setState({
              tracks4: {
                track1: response.tracks[Math.floor((Math.random()*response.tracks.length))].uri,
                track2: response.tracks[Math.floor((Math.random()*response.tracks.length))].uri
              }
            })
          });
          spotifyApi.getArtistTopTracks(this.state.relatedArtists.relatedArtist5, "US")
          .then((response) => {
            this.setState({
              tracks5: {
                track1: response.tracks[Math.floor((Math.random()*response.tracks.length))].uri,
                track2: response.tracks[Math.floor((Math.random()*response.tracks.length))].uri
              }
            })
          });
          spotifyApi.getArtistTopTracks(this.state.relatedArtists.relatedArtist6, "US")
          .then((response) => {
            this.setState({
              tracks6: {
                track1: response.tracks[Math.floor(Math.random()*response.tracks.length)].uri,
                track2: response.tracks[Math.floor(Math.random()*response.tracks.length)].uri
              }
            })
          });
          spotifyApi.getArtistTopTracks(this.state.relatedArtists.relatedArtist7, "US")
          .then((response) => {
            this.setState({
              tracks7: {
                track1: response.tracks[Math.floor(Math.random()*response.tracks.length)].uri,
                track2: response.tracks[Math.floor(Math.random()*response.tracks.length)].uri
              }
            })
          });
          spotifyApi.getArtistTopTracks(this.state.relatedArtists.relatedArtist8, "US")
          .then((response) => {
            this.setState({
              tracks8: {
                track1: response.tracks[Math.floor(Math.random()*response.tracks.length)].uri,
                track2: response.tracks[Math.floor(Math.random()*response.tracks.length)].uri
              }
            })
          });
          spotifyApi.getArtistTopTracks(this.state.relatedArtists.relatedArtist9, "US")
          .then((response) => {
            this.setState({
              tracks9: {
                track1: response.tracks[Math.floor(Math.random()*response.tracks.length)].uri,
                track2: response.tracks[Math.floor(Math.random()*response.tracks.length)].uri
              }
            })
          });
          spotifyApi.getArtistTopTracks(this.state.relatedArtists.relatedArtist10, "US")
          .then((response) => {
            this.setState({
              tracks10: {
                track1: response.tracks[Math.floor(Math.random()*response.tracks.length)].uri,
                track2: response.tracks[Math.floor(Math.random()*response.tracks.length)].uri
              }
            })
          });
        spotifyApi.getMe()
        .then((response) => {
          this.setState({
            user: {
              userId: response.id
            }
          });
        spotifyApi.createPlaylist(this.state.user.userId, {name: "Meggan's Mixtape Recs",
        description: "enjoy your new playlist (-:"})
        .then((response) => {
          this.setState({
            playlist: {
              playlistId: response.id
            }
          })
          spotifyApi.addTracksToPlaylist(this.state.user.userId, response.id,
            [this.state.tracks1.track1, this.state.tracks1.track2,
              this.state.tracks2.track1, this.state.tracks2.track2,
            this.state.tracks3.track1, this.state.tracks3.track2,
          this.state.tracks4.track1, this.state.tracks4.track2,
        this.state.tracks5.track1, this.state.tracks5.track2,
      this.state.tracks6.track1, this.state.tracks6.track2,
    this.state.tracks7.track1, this.state.tracks7.track2,
  this.state.tracks8.track1, this.state.tracks8.track2,
this.state.tracks9.track1, this.state.tracks9.track2,
this.state.tracks10.track1, this.state.tracks10.track2])
        })
        })
      })
    })
  };


  render() {
    return (
      <div className="App">
        <a href='http://localhost:8888' > Login to Spotify </a>
        <div>
          Now Playing: { this.state.nowPlaying.song }
        </div>
        <div>
          Artist: { this.state.nowPlaying.artist }
        </div>
        <div>
          <img src={this.state.nowPlaying.albumArt} style={{ height: 150 }}/>
        </div>
        { this.state.loggedIn &&
          <button onClick={() => this.getNowPlaying()}>
            Generate
          </button>
        }
      </div>
    );
  }
}

export default App;