import React, { useEffect, useState } from 'react';
import { getProducts } from '../Helpers/getProducts';
import ItemDetail from './ItemDetail';

function ItemDetailContainer() {
  const [prod, setProd] = useState({});
const prodId = 2;

useEffect(() => {
 getProducts.then((d) => {
      setProd(d.find((i) => i.id === prodId));
    })
    .catch((err) => console.log(err));
  }, []);

 
  return <>
      <ItemDetail prod={prod}/>
 
  </>;
}

export default ItemDetailContainer;
