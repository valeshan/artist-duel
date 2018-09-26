import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export default class Comparator extends Component{
  render(){
    return(
      <div className = "comparator-panel">
        <br/>
        <br/>
        <br/>
        <Table bordered hover responsive>
          <thead className="comparator-header">
          <tr>
          <th colSpan="4">Artist</th>
          </tr>
          </thead>
          <tbody>
          <tr>
          <td className = "listener-comparator comparator-track-winner circle" >&lt;</td>
          </tr>
          <tr>
          <td className = "comparator-track-winner circle">&gt;</td>
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
            <td className = "comparator-track-winner circle">O</td>
            <td className = "comparator-track">X</td>
            </tr>
            <tr>
            <td className = "comparator-track">X</td>
            <td className = "comparator-track-winner">O</td>
            </tr>
            <tr>
            <td className = "comparator-track-winner">O</td>
            <td className = "comparator-track">X</td>
            </tr>
            <tr>
            <td className = "comparator-track">X</td>
            <td className = "comparator-track-winner">O</td>
            </tr>
            <tr>
            <td className = "comparator-track">X</td>
            <td className = "comparator-track-winner">O</td>
            </tr>
            </tbody>
          </Table>
          </td>
          </tr>
          </tbody>
        </Table>
      </div>
    )
  }
}
