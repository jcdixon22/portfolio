import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function TopNavbar() {
    return (
      <Navbar collapseOnSelect expand="sm">
          <Nav>
            <Nav.Link href="/">
              <div className='navName'>
                <b>Justice Dixon</b>
              </div>
            </Nav.Link>
          </Nav>
        <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
        <Navbar.Collapse id="responsive-navbar-nav" className='navElements'>
          <Nav className="navVertAlign">
            <Nav.Link href="engineering">
              <div className='navElement'>
                Engineering
              </div>
            </Nav.Link>
            <Nav.Link href="scratch">
              <div className='navElement'>
                Scratch
              </div>
            </Nav.Link>
              <Nav.Link href="#right-link">
                <Button className='navButton'>Get in Touch</Button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
    </Navbar>

    );
}

export default TopNavbar;