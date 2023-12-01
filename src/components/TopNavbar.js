import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function TopNavbar() {
    return (
      <Navbar collapseOnSelect expand="sm" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="engineering">
              <div className='navElement'>
                Engineering
              </div>
            </Nav.Link>
            <Nav.Link href="#link2">
              <div className='navElement'>
                  Athletics
                </div>
            </Nav.Link>
            <Nav.Link href="#link3">
              <div className='navElement'>
                  Modelling
                </div>
            </Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <Nav.Link href="#right-link">
              <button className='home-button-top'>Get in Touch</button>
            </Nav.Link>
          </Nav>
          </Navbar.Collapse>
    </Navbar>

    );
}

export default TopNavbar;