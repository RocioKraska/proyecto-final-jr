

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../Helpers/getProducts';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
//import Card from 'react-bootstrap/Card';
//import ListGroup from 'react-bootstrap/ListGroup';
const ItemDetailContainer = () => {

  const [product, setProduct] = useState();
  
  const {idProducto} = useParams()
  const [loading, setLoading] = useState(true);
  
   console.log(idProducto)



   useEffect(() => {
    //llamada a una api. Tarea asincónica  
    const db = getFirestore()      
    const itemRef = doc(db, 'productos', idProducto) 
    getDoc(itemRef)
    .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
    .catch(err => console.log(err))
        //.then(respuesta => console.log(respuesta))
    .finally(()=> setLoading(false))               
   
    //console.log('api')     
}, [])

console.log(product)


 //  const idProducto = 1 ;
 /* useEffect(() => {
 
          getProducts()
    //.then(respuesta => return console.log(respuesta))
           .then(res => setProduct(res.find((prod) => prod.id ===  Number(idProducto))))    
                  .catch(err => console.log(err))
                  .finally(()=> setLoading(false))
           }, [idProducto]); 

    console.log(product)*/
    

  return (
    <>
   
   
   {/* <Card style={{ width: '18rem' }}>
  <Card.Header>{product.name}</Card.Header>
  <ListGroup variant="flush">
    <ListGroup.Item>categoria: {product.categoria}</ListGroup.Item>
    <ListGroup.Item>cantidad: {product.stock}</ListGroup.Item>
    <ListGroup.Item>Precio: ${product.price}</ListGroup.Item>
  </ListGroup>
</Card>
  <ItemDetail/>*/}
 { loading ? 
                <h2>Cargando ...</h2>
            :             
                <ItemDetail product={product} />
              
            }
  

    </>
  );
};

export default ItemDetailContainer;


