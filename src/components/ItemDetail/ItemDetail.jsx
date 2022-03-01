
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/prueba/CartContext';
import { useState } from 'react';


import "../css/ItemDetail.css"


function ItemDetail({product}) {
  
  
  const [contador, setContador] = useState(0);
  const {addItem} = useContext(CartContext)
 

 

  

 function onAdd(cant){
    addItem({item:product, quantity:cant})
    setContador(cant)
   }

 

 
  return <div>
  
 <div>
   <div id='container1'>
    <img id='img1' variant="top" src={product.foto} /> 
    <div className='text' >
      <div  id='titulo' >
        { ` ${product.name}` }
      </div>
     
    <div  id='price'>
        {`$ ${product.price}` }
    </div>
   
    {    
   contador === 0 ?
   <>
        <ItemCount initial={1} stock={product.stock} onAdd={onAdd} />
       
   </>
   :
     <div id='buut'>
     <Link to="/cart">
       <button className='bb'>Terminar compra</button>
     </Link>
     <Link to="/">
       <button className='bb'>Seguir comprando</button>
     </Link>

     </div>
}

    </div>
    </div>
 </div>
  

  </div>;
}

export default ItemDetail;
