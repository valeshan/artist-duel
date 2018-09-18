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
          <th>Artist</th>
          </tr>
          </thead>
          <tbody>
          <tr className = "comparator-count">
          <td>&lt;</td>
          </tr>
          <tr className = "comparator-count">
          <td>&gt;</td>
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
            <td className = "comparator-track circle">&gt;</td>
            </tr>
            <tr>
            <td className = "comparator-track">&lt;</td>
            </tr>
            <tr>
            <td className = "comparator-track">&gt;</td>
            </tr>
            <tr>
            <td className = "comparator-track">&lt;</td>
            </tr>
            <tr>
            <td className = "comparator-track">&gt;</td>
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
