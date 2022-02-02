import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../Helpers/getProducts';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  
  const {idProducto} = useParams()
   console.log(idProducto)
  
  useEffect(() => {
    if (idProducto){
      getProducts
    
     .then(data=> setProduct(data.find(item => item.id === idProducto)))
     .catch(err => console.log(err))
    
    }else{
      getProducts
    
     .then(data=> setProduct(data))
     .catch(err => console.log(err))
 
    }
    }, [idProducto]); 
  
  return (
    <>
    <ItemDetail product={product} />
    <ItemCount initial={1} stock={5} />
    </>
  );
};

export default ItemDetailContainer;