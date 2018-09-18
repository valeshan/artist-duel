import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class ArtistPanel extends Component{
  render(){
    return(
      <Table bordered hover responsive className="artist-panel">
        <thead>
        <tr>
        <th>Artist</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>Total Listener Count</td>
        </tr>
        <tr>
        <td>Total Play Count</td>
        </tr>
        <tr>
        <td>
        <Table striped bordered hover>
          <thead>
          <tr>
          <th colSpan="4">Top Tracks</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td>Song 1</td>
          <td colSpan="1">PlayCount</td>
          </tr>
          <tr>
          <td>Song 2</td>
          <td colSpan="1">PlayCount</td>
          </tr>
          <tr>
          <td>Song 3</td>
          <td colSpan="1">PlayCount</td>
          </tr>
          <tr>
          <td>Song 4</td>
          <td colSpan="1">PlayCount</td>
          </tr>
          <tr>
          <td>Song 5</td>
          <td colSpan="1">PlayCount</td>
          </tr>
          </tbody>
        </Table>
        </td>
        </tr>
        <tr>
        <td> YouTube Player - Top Track</td>
        </tr>
        </tbody>
      </Table>
    )
  }
}
