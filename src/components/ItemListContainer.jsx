import React from 'react';
import ItemCount from './ItemCount/ItemCount';

function ItemListContainer() {

  function onAdd(cant){
   console.log(cant)
  }
  return <div>

   <ItemCount initial={1} stock={5} onAdd={onAdd}/>

  </div>;
}

export default ItemListContainer;
