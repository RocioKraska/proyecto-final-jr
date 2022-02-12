import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';
import cartWidget from '../cart/cartWidget';
import { useCartContext } from '../../Context/prueba/CartContext';



function NavBar() {
  const { cantidad } = useCartContext()
  return <div>
  <Navbar bg="secondary" variant="dark">
    <Container>
     
    <Link to="/">Tienda </Link>
    <Link to="/categoria/remeras">remeras </Link>
    <Link to="/categoria/pantalones">pantalones </Link>
    <Link to="/categoria/camisetas">camisetas </Link>
    <Link to="/cart">
    { cantidad() !== 0 && cantidad()}
                            <cartWidget/>  

      cart </Link>
    <cartWidget/>
    </Container>
  </Navbar>
</div>
}

export default NavBar;

