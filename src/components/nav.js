import React from 'react';
import { NavLink } from 'react-router-dom';
import { Nav, Navbar } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar {
    background-color:rgba(23,31,79,0.4);
    padding:0.4rem 1rem;
  }
  a, .navbar-brand, .navbar-nav .nav-link {
    color: #bbb;
    padding:3px 7px;
    &:hover {
      color: white;
      text-decoration:none;
    }
  }
  .nav-link{
    font:1.5vw 'Architects Daughter';
  }
 .nav-link a:hover{
    border-bottom:3px ridge red;
  }
  .active{
    border-radius:4px;
    border-bottom: 3px ridge cyan;
    color:white;
    
  }
  .navbar-brand{
  font-family: 'Dancing Script', cursive;
  font-size: 1.9em;
}
@media screen and (max-width: 600px) {
.nav-link{font-size:3vh;}
.navbar{
  background-color:rgba(0,0,0,0.7);
  border-radius:5px;
  }
}
  
`;

function Top(){
  return(
  <Styles>
    <Navbar expand="lg" className='navbar-dark fixed-top'>
      <Navbar.Brand href="/">Bimarsha Khanal</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item>
            <Nav.Link>
              <NavLink exact to="/" activeClassName='active'>Home</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink to="/about" activeClassName='active'>About</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink to="/contact" activeClassName='active'>Contact</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link>
              <NavLink to="/fun" activeClassName='active'>Fun</NavLink>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="https://codegurkha.com" target='_blank' rel='noopener noreferrer'>Blog</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles >
)
}

export  default Top;