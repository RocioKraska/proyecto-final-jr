import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../Helpers/getProducts';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  
  const {idProducto} = useParams()
   console.log(idProducto)

 //  const idProducto = 1 ;
  useEffect(() => {
 
      getProducts
    //.then(respuesta => return console.log(respuesta))
           .then(res => setProduct(res.find(prod => prod.id === idProducto)))
          .catch(err => console.log(err))
    
 
    }, [idProducto]); 

    console.log(product)
    

  return (
    <>
    <ItemDetail product={product} />

    </>
  );
};

export default ItemDetailContainer;