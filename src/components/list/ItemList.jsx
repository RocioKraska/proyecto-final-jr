import "../css/ItemList.css"
import React, {  useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"
import { BiChevronRight } from "react-icons/bi";


 function ItemList() {


const [producto, setProductos]= useState([])
const [loading, setLoading]= useState(true)
const {idCategoria} = useParams()





 
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


    console.log(producto);


return <div id="container" >
  <div id="containerI">
    { loading ? <h3 className='loading'> <BiChevronRight/>  loading</h3> : producto.map (prod => 
    <div >
     <div id="miniContainer">

      <img id="imgP" variant="top" src={prod.foto} /> 
      
    <div id="name">
      { ` ${prod.name}` }
    </div>
    <div  id="cat">
      {`${prod.categoria} `}
    </div>
    <div  id="pri">
      {` $ ${prod.price}` }
    </div>
      <Link to={ `/detalle/${prod.id}`}>

        <button  className="buttons" id="button" >averigua mas</button>
      </Link>
      </div>
    </div>
  )}
  </div>

</div>
  
}
export default ItemList;


