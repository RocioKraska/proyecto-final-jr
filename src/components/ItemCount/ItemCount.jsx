import React from 'react';
import { useState } from 'react';
import "../css/ItemCount.css"

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
  <div id='buttons123'>
  <div>
  <button className='butt'  onClick={sumar}> + </button>
 <p id='cont'> {contador} </p>
  <button className='butt' onClick={restar} > - </button> 
  </div>
  <br/>
  <div>
  <button  className='butt' onClick={agregar} >Agregar al Carrito</button>
  </div>
  </div>
  </>;
}

export default ItemCount;
