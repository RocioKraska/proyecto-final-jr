import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail(product) {

  const [contador, setcontador] = useState(0);
  function onAdd(cant){
    setcontador(cant)
   }
  return <div>
<Card style={{ width: '18rem' }}>
  <Card.Header>{product.name}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>categoria: {product.categoria}</ListGroup.Item>
    <ListGroup.Item>cantidad: {product.stock}</ListGroup.Item>
    <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
  </ListGroup>
</Card>


{contador === 0 ?
     <ItemCount initial={1} stock={5} onAdd={onAdd}/>
     :
     <>
     <Link to="/cart">
       <button>Terminar compra</button>
     </Link>
     <Link to="/">
       <button>Seguir comprando</button>
     </Link>
     </>
    
    }

  </div>;
}

export default ItemDetail;
