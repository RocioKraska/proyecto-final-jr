import React from 'react';
import { useState } from 'react';


function ItemCount({initial, stock, onAdd}) {
  const [contador, setcontador] = useState(initial);
  const sumar =()=>{
      if (contador < stock){
         setcontador(contador + 1)

      }
  }
  const restar =()=>{
    if (contador > initial ){
        setcontador(contador - 1)

     }
}
const agregar =()=>{
    onAdd(contador)
}
  return <>
 
  <button className='btn btn-outline-primary' onClick={sumar}> + </button>
  {contador}
  <button className='btn btn-outline-primary' onClick={restar} > - </button> <br/>
  <button className='btn btn-outline-primary' onClick={agregar} >Agregar</button>
  <button className='btn btn-outline-primary' onClick={agregar} >Agregar Wish List</button>
  </>;
}

export default ItemCount;
