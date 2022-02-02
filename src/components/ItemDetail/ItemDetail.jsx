import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function ItemDetail(a) {
    const { name, categoria, stock, price } = a.product;
  return <div>
<Card style={{ width: '18rem' }}>
  <Card.Header>{name}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>categoria: {categoria}</ListGroup.Item>
    <ListGroup.Item>cantidad: {stock}</ListGroup.Item>
    <ListGroup.Item>Precio: ${price}</ListGroup.Item>
  </ListGroup>
</Card>

  </div>;
}

export default ItemDetail;
