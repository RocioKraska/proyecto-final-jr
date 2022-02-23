import "./css/ItemList.css"
import React, {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"

import { BiChevronRight } from "react-icons/bi";


 function ItemList() {


const [producto, setProductos]= useState([])
const [loading, setLoading]= useState(true)
const {idCategoria} = useParams()
const [bool, setBool] = useState(true)
const click=(e)=>{
  e.preventDefault() 
  setBool(!bool)
}

const agregar=()=>{
  setProductos([
      ...producto,
      { id: "8", name: "libro", categoria: "libro" , price: 344 }
  ])
}


 
useEffect(() => {
  const db = getFirestore()
  const queryCollection = collection(db, 'productos')        
       
  const queryF = !idCategoria ? 
      queryCollection                
  : 
      query(queryCollection, 
          where('categoria', '==', idCategoria)                
      )  

  getDocs(queryF)
  .then(resp => setProductos( resp.docs.map(prod => ( { id: prod.id, ...prod.data() } )  ) ))
  .catch((err) => console.log(err))
  .finally(() =>  setLoading(false))            
             
}, [idCategoria])

console.log(bool);
    console.log(producto);


return <div id="container" >
  <div id="containerI">
    { loading ? <h3 id='loading'> <BiChevronRight/>  loading</h3> : producto.map (prod => 
    <div >
     <div id="miniContainer">
      <img id="imgP" variant="top" src={prod.foto} /> 
    <div>
      { ` ${prod.name}` }
    </div>
    <div>
      {`${prod.categoria} - $ ${prod.price}` }
    </div>
      <Link to={ `/detalle/${prod.id}`}>
        <button  className="buttons" id="button" >Averigua mas</button>
      </Link>
      </div>
    </div>
  )}
  </div>
<div id="buttons">
<button className="buttons" id="b1" onClick={click}>Cambiar estado </button>           
<button className="buttons" id="b2" onClick={agregar}>Agregar Item </button>  
</div>
</div>
  
}
export default ItemList;


