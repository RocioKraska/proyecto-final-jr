
import React, {  useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import getProducts from './Helpers/getProducts';





 function ItemList() {

const [producto, setProducto]= useState([])
const [loading, setLoading]= useState(true)
useEffect(() => {

 getProducts

 .then(res=> setProducto(res))
 .catch(err => console.log(err))
 .finally(()=> setLoading (false))


}, []);

return <div>
    { loading ? <h3>cargando ... </h3> : producto.map (prod => <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={prod.foto} /> 
  <Card.Body>
    <Card.Title>{ ` ${prod.name}` }</Card.Title>
    <Card.Text>
    {`${prod.categoria} - ${prod.id} - $ ${prod.price}` }
    </Card.Text>
    <Button variant="primary">Averigua mas</Button>
  </Card.Body>
</Card>  )}
    

  </div>;
}
export default ItemList;


