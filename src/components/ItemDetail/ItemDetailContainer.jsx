import React, { useState, useEffect } from 'react';
import getProducts from '../Helpers/getProducts';
import ItemCount from '../ItemCount/ItemCount';
import ItemDetail from './ItemDetail';

const ItemDetailContainer = () => {
  const [product, setProduct] = useState({});
  const productId = 1;

  useEffect(() => {
    getProducts()
      .then((data) => {
        setProduct(data.find((item) => item.id === productId));
      })
      .catch((err) => console.log(err));
  }, []);
  
  return (
    <>
    <ItemDetail product={product} />
    <ItemCount initial={1} stock={5} />
    </>
  );
};

export default ItemDetailContainer;