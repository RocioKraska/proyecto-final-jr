import React from 'react';
import ItemCount from './ItemCount/ItemCount';
import ItemList from './ItemList';

function ItemListContainer() {

  function onAdd(cant){
   console.log(cant)
  }
  return <div>
   <ItemList/>
   <ItemCount initial={1} stock={5} onAdd={onAdd}/>

  </div>;
}

export default ItemListContainer;
