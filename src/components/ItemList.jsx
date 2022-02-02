
import React, {  useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';

import getProducts from './Helpers/getProducts';




 function ItemList() {


//  console.log(idCategoria)

const [producto, setProducto]= useState([])
const [loading, setLoading]= useState(true)
const {idCategoria} = useParams()

useEffect(() => {
if (idCategoria){
  getProducts

 .then(res=> setProducto(res.filter(prod => prod.categoria === idCategoria)))
 .catch(err => console.log(err))
 .finally(()=> setLoading (false))
}else{
  getProducts

 .then(res=> setProducto(res))
 .catch(err => console.log(err))
 .finally(()=> setLoading (false))
}
 

}, [idCategoria]);

return <div>
    { loading ? <h3>cargando ... </h3> : producto.map (prod => <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={prod.foto} /> 
  <Card.Body>
    <Card.Title>{ ` ${prod.name}` }</Card.Title>
    <Card.Text>
    {`${prod.categoria} - ${prod.id} - $ ${prod.price}` }
    </Card.Text>
    <Link to={ `/detalle/${prod.id}`}>
    <Button variant="primary">Averigua mas</Button>
    </Link>
   
  </Card.Body>
</Card>  )}
    

  </div>;
}
export default ItemList;


