import { useCartContext } from "../../Context/prueba/CartContext";





const Cart = () => {

    const { cart, vaciarCarrito, sumaTotal,borrarItem } = useCartContext()
    console.log(cart)
  return <div>
    {cart.length !== 0 ?  <>
      { cart.map(i => <div> <li>  NOMBRE:    {i.item.name}   CANTIDAD:   {i.quantity}</li>
         <button  className='btn btn-outline-primary' onClick={() => borrarItem(i.item.id)}>borrar item</button> 
     </div>)}
     <br />
     {`la suma es ${sumaTotal()}`}
     <br />
    </>
    : 
    <h1>no hay producto</h1>
    }
      
        <button onClick={vaciarCarrito}  className='btn btn-outline-primary'  >Vaciar Carrito</button>
  </div>;
};

export default Cart;

