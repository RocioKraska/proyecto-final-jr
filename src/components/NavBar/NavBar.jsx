import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';



function NavBar() {
  return <div>
  <Navbar bg="secondary" variant="dark">
    <Container>
     
    <Link to="/">Tienda </Link>
    <Link to="/categoria/remeras">remeras </Link>
    <Link to="/categoria/pantalones">pantalones </Link>
    <Link to="/categoria/camisetas">camisetas </Link>
    
    </Container>
  </Navbar>
</div>
}

export default NavBar;

