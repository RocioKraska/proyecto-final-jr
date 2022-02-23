import React from 'react';
import { Link } from 'react-router-dom';
import '../css/NavBar.css'
import { useCartContext } from '../../Context/prueba/CartContext';
import CartWidget from '../CartWidget';

function NavBar() {
  const { cantidad } = useCartContext()
  return <div> 
   <div className='nav'>
   <div  className='options' >
    <Link to="/" className='opt' id='title' >BOOK STORE </Link>
    <Link to="/categoria/romance" className='opt'>romance </Link>
    <Link to="/categoria/misterio" className='opt'>misterio </Link>
    <Link to="/categoria/fantasia" className='opt'>fantasia </Link>
    <Link to="/logIn" className='opt'>logIn </Link>
   </div>  
    <Link id='num' to="/cart">
    { cantidad() !== 0 && cantidad()}
        <CartWidget  className='cart' /></Link>
   </div>
    <img id='img' src='https://images.pexels.com/photos/2187601/pexels-photo-2187601.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'/>
   </div>
}

export default NavBar;

