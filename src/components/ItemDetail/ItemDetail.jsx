
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../Context/prueba/CartContext';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

 


function ItemDetail({product}) {
  

  const [contador, setContador] = useState(0);
  const {addItem, cart} = useContext(CartContext)

  function onAdd(cant){
    addItem({item:product, quantity:cant})
    setContador(cant)
   }

  console.log(cart)

  return <div>
  
 <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={product.foto} /> 
  <Card.Body>
    <Card.Title>{ ` ${product.name}` }</Card.Title>
    <Card.Text>
    {`${product.categoria} - $ ${product.price}` }
    </Card.Text>
   
  </Card.Body>
</Card>  

{/*{agregarAlCarrito === 0 ?*/}
{
                   
                    contador === 0 ?


     <ItemCount initial={1} stock={5} onAdd={onAdd}/>
  
    :
      <>
    <Link to="/cart">
       <button  className='btn btn-outline-primary' >Terminar compra</button>
     </Link>
     <Link to="/">
       <button   className='btn btn-outline-primary'>Seguir comprando</button>
     </Link>
     </>}
    
    

  </div>;
}

export default ItemDetail;
