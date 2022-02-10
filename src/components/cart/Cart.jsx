import { useCartContext } from "../../Context/prueba/CartContext";




const Cart = () => {

    const { cart, vaciarCarrito } = useCartContext()
    
  return <div>
      { cart.map(product => <li>name:{product.name}  cantidad: {product.cantidad}</li> ) }
      
        <button onClick={vaciarCarrito} >Vaciar Carrito</button>
  </div>;
};

export default Cart;

