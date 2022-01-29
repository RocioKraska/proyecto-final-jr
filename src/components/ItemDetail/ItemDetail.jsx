import React from 'react';

const ItemDetail = (prod) =>{

 /* const { name, categoria, foto, price } = props.product;*/
  return <div>
 
      <h1>nombre:{prod.name}</h1>
      <h4>Category: {prod.categoria}</h4>
      <h4>{prod.foto}</h4>
      <h4>Price: ${prod.price}</h4>
  </div>;
};

export default ItemDetail;
