
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/prueba/CartContext';

 


function ItemDetail({product}) {
  

 
  const {addItem, cart} = useContext(CartContext)

  function onAdd(cant){
    addItem({item:product, quantity:cant})
   }

  console.log(cart)

  return <div>
  
    <h3>{product.name}</h3>

{/*{agregarAlCarrito === 0 ?*/}
     <ItemCount initial={1} stock={5} onAdd={onAdd}/>
  
    
      <>
    <Link to="/cart">
       <button  className='btn btn-outline-primary' >Terminar compra</button>
     </Link>
     <Link to="/">
       <button   className='btn btn-outline-primary'>Seguir comprando</button>
     </Link>
     </>
    
    

  </div>;
}

export default ItemDetail;
