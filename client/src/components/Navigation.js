import React, { Component } from 'react';
import { Navbar, Nav, MenuItem, NavDropdown} from 'react-bootstrap';


export default class Navigation extends Component {
  render(){
    return(
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <p>Artist Duel</p>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav pullRight>
          <NavDropdown eventKey={1} title="Login" id="basic-nav-dropdown">
            <MenuItem eventKey={1.1}>Duel History</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={1.2}>Logout</MenuItem>
          </NavDropdown>
        </Nav>
        </Navbar>
    )
  }
}
