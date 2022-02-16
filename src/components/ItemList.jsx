
import React, {  useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"




 function ItemList() {


//  console.log(idCategoria)

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
      { id: "8", name: "camisetas 7", categoria: "camisetas" , price: 344 }
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



/*useEffect(() => {
if (idCategoria){
  getProducts()

 .then(res=> setProducto(res.filter(prod => prod.categoria === idCategoria)))
 .catch(err => console.log(err))
 .finally(()=> setLoading (false))
}else{
  getProducts()

 .then(res=> setProducto(res))
 .catch(err => console.log(err))
 .finally(()=> setLoading (false))
}
 

}, [idCategoria]);*/
console.log(bool);
    console.log(producto);


return <div>
    { loading ? <h3>cargando ... </h3> : producto.map (prod => <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={prod.foto} /> 
  <Card.Body>
    <Card.Title>{ ` ${prod.name}` }</Card.Title>
    <Card.Text>
    {`${prod.categoria} - $ ${prod.price}` }
    </Card.Text>
    <Link to={ `/detalle/${prod.id}`}>
    <Button variant="primary">Averigua mas</Button>
    </Link>
   
  </Card.Body>
</Card>  )}
    
<button className='btn btn-outline-primary' onClick={click}>Cambiar estado </button>           
<button className='btn btn-outline-primary' onClick={agregar}>Agregar Item </button>  
  </div>;
}
export default ItemList;


