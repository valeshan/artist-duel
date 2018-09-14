import React, { Component } from 'react';
import SearchArtist from './components/SearchArtist';

const { request } = require('graphql-request');


const query = `{
  artist(name: "Michael Jackson") {
    name
    url
  }
}`


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Artist Duel {this.props.name}</h1>
        </header>
        <div>
          <SearchArtist {... this.props}/>
          <ListTracks />
        </div>
      </div>
    )
  }
}

export default App
