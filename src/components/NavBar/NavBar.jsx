import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';


function NavBar() {
  return <div>
  <Navbar bg="primary" variant="dark">
    <Container>
    <Navbar.Brand href="#home">Tienda</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#home">Home</Nav.Link>
      <Nav.Link href="#features">Ropa</Nav.Link>
      <Nav.Link href="#pricing">Ofertas</Nav.Link>
    
    </Nav>
    </Container>
  </Navbar>
</div>
}

export default NavBar;

