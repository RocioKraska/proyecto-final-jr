
import React, {  useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { getProducts } from './Helpers/getProducts';

export const products = [
  {id:'1', categoria:'remeras', name: 'remera1', price: '27', foto:'https://th.bing.com/th/id/OIP.NWkt6VyUfkuxB7h22spwxQHaJQ?pid=ImgDet&rs=1'},
  {id:'2', categoria:'remeras', name: 'remera2', price: '55' ,foto:'https://th.bing.com/th/id/OIP.NWkt6VyUfkuxB7h22spwxQHaJQ?pid=ImgDet&rs=1'},
  {id:'3', categoria:'remeras', name: 'remera3', price: '17', foto:'https://th.bing.com/th/id/OIP.NWkt6VyUfkuxB7h22spwxQHaJQ?pid=ImgDet&rs=1'},
  {id:'4', categoria:'remeras', name: 'remera4', price: '99', foto:'https://th.bing.com/th/id/OIP.NWkt6VyUfkuxB7h22spwxQHaJQ?pid=ImgDet&rs=1'},
  {id:'5', categoria:'remeras', name: 'remera5', price: '8', foto:'https://th.bing.com/th/id/OIP.NWkt6VyUfkuxB7h22spwxQHaJQ?pid=ImgDet&rs=1'}
];



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


