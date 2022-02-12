import { useCartContext } from "../../Context/prueba/CartContext";




const Cart = () => {

    const { cart, vaciarCarrito } = useCartContext()
    console.log(cart)
  return <div>
      { cart.map(i => <li>  NOMBRE:    {i.item.name}   CANTIDAD:   {i.quantity}</li>
     ) }
      
        <button onClick={vaciarCarrito}  className='btn btn-outline-primary'  >Vaciar Carrito</button>
  </div>;
};

export default Cart;

