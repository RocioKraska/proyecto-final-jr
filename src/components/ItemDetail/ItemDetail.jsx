import React, { useState } from 'react';

import ItemCount from '../ItemCount/ItemCount';
import { Link } from 'react-router-dom';

function ItemDetail() {

  const [contador, setcontador] = useState(0);
  function onAdd(cant){
    setcontador(cant)
   }
  return <div>


{contador === 0 ?
     <ItemCount initial={1} stock={5} onAdd={onAdd}/>
     :
     <>
     <Link to="/cart">
       <button>Terminar compra</button>
     </Link>
     <Link to="/">
       <button>Seguir comprando</button>
     </Link>
     </>
    
    }

  </div>;
}

export default ItemDetail;
