import Button from 'react-bootstrap/Button';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React, { useEffect, useState} from 'react';
import { CiLinkedin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";


function TopNavbar() {
  // const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect(() => {
  //   const handleResize = () => {
  //     setWindowWidth(window.innerWidth);
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //   };
  // }, []);

    return (
      <div className="navbar-container">
        <Navbar collapseOnSelect expand="sm" data-bs-theme="dark">
          <Nav className='navLogo'>
            <Nav.Link href="/">
              <div className='navName'>
                <b>Justice Dixon</b>
              </div>
            </Nav.Link>
          </Nav>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='nav-hamburger'/>
          <Navbar.Collapse id="responsive-navbar-nav" className='navElements navbar-light'>
            <Nav className="navVertAlign">
              <Nav.Link href="/engineering">
                <div className='navElement'>
                  Engineering
                </div>
              </Nav.Link>
              <Nav.Link href="/modeling">
                <div className='navElement'>
                  Modeling
                </div>
              </Nav.Link>
              <Nav.Link href="/sports">
                <div className='navElement'>
                  Sports
                </div>
              </Nav.Link>
              <Nav.Link href="https://linkedin.com/in/justicedixon" target="_blank" rel="noopener noreferrer">
                <div className='navSocialIcon'>
                  <CiLinkedin />
                </div>
              </Nav.Link>
              <Nav.Link href="https://instagram.com/justicedixon1" target="_blank" rel="noopener noreferrer">
                <div className='navSocialIcon'>
                  <FaInstagram />
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
}

export default TopNavbar;