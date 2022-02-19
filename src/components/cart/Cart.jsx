import { useCartContext } from "../../Context/prueba/CartContext";
import { 
  getFirestore, 
  collection, 
  addDoc,  
} from 'firebase/firestore'





const Cart = () => {

    const { cart, vaciarCarrito, sumaTotal,borrarItem } = useCartContext()

console.log(cart)
    const realizarCompra = async (e) => {
      e.preventDefault()  
       // Nuevo objeto de orders    
      let orden = {}          

      orden.buyer =  {name:'rocio',email: 'rk@gmail.com', phone: '1165350821'}
      orden.total = sumaTotal();

      orden.items = cart.map(cart => {
          const id = cart.item.id;
          const nombre =cart.item.name;
          const precio = cart.item.price * cart.quantity;
          const cantidad = cart.quantity
          
          return {
              id, 
              nombre, 
              precio, 
              cantidad
          }   
        
      })
    
    console.log(orden)

    const db = getFirestore()
    const collect = collection (db, 'ordenes')
    await addDoc (collect, orden )
    .then(resp => console.log(resp))
    }
      
   
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
        <button onClick={realizarCompra}  className='btn btn-outline-primary'  >Realizar Orden</button>
  </div>;
}
export default Cart;
