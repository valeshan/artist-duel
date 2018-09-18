import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Navigation from './components/Navigation';
import SearchArtist from './components/SearchArtist';
import ArtistPanel from './components/ArtistPanel';
import Comparator from './components/Comparator';

class App extends Component {

  render() {
    return (
      <div className="App">
        <Navigation />
        <Grid>
          <Row>
            <Col md={1}>
            </Col>
            <Col xs={5} md={4}>
              <SearchArtist {... this.props} className= "artist-a"/>
              <ArtistPanel />
            </Col>
            <Col xs={1} md={2}>
              <Comparator />
            </Col>
            <Col xs={5} md={4}>
            <SearchArtist {... this.props} className= "artist-b"/>
            <ArtistPanel />
            </Col>
            <Col md={1}>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default App
