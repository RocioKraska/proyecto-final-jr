

import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { doc, getDoc, getFirestore } from 'firebase/firestore';
import { BiChevronRight } from "react-icons/bi";
import "../css/ItemDetalList.css"
 

const ItemDetailContainer = () => {
  
 
  const [product, setProduct] = useState();

  const {idProducto} = useParams()
  const [loading, setLoading] = useState(true);
 
   console.log(idProducto)

   useEffect(() => {
    const db = getFirestore()      
    const itemRef = doc(db, 'productos', idProducto) 
    getDoc(itemRef)
    .then(resp => setProduct( { id: resp.id, ...resp.data() } ))
    .catch(err => console.log(err))
    .finally(()=> setLoading(false))                  
}, [])
  
console.log(product)
 
  return (
    <>
 { loading ? 
                <h2 className='loadingg'> <BiChevronRight/> loading</h2>
            :     
            <>        
                <ItemDetail product={product} />
                
            </>
            }
 

    </>
    
  );
};

export default ItemDetailContainer;


