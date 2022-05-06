import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";

const Styles = styled.div`
  .navbar {
    cursor: default;
    padding:0.4rem 1rem;
  }
  a, .navbar-brand, .navbar-nav .nav-item {
    color: #bbb;
    padding:3px 7px;
    &:hover {
      color: white;
      text-decoration:none;
    }
  }
  .nav-item{
    font:1.5rem 'Gochi Hand';
  }
 .nav-item a:hover{
    border-bottom:3px ridge red;
  }
  .active{
    border-bottom: 3px ridge cyan;
    color:white;
    
  }
  .navbar-brand{
  font-family: 'Gochi Hand', cursive;
  font-size: 1.9em;
}
@media screen and (max-width: 600px) {
.nav-item{font-size:5vw;}
.navbar{
  background-color:rgba(0,0,0,0.7);
  border-radius:5px;
  }
}
  
`;

function Top(){
  const scrollTop = () => {
    scroll.scrollToTop();
  };
  return(
  <Styles>
    <Navbar expand="lg" className='navbar-dark fixed-top'>
      <Navbar.Brand onClick={scrollTop}>Bimarsha Khanal</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                offset={-300}
                duration={500}>Home</Link>
          </Nav.Item>
          <Nav.Item>
            <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>About</Link>
          </Nav.Item>
          <Nav.Item>
            <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>Contact</Link>
          </Nav.Item>
          <Nav.Item>
            <Link
                activeClass="active"
                to="showcase"
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}>Showcase</Link>
          </Nav.Item>
        </Nav>
        <Navbar.Text>
        <a className="nav-item" target="_blank" href="https://bimarshak.com.np">Blog</a>
      </Navbar.Text>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
}

export  default Top;