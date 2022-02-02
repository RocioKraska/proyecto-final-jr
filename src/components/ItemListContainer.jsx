//import React, { useState, useEffect} from 'react';
//import { useParams } from 'react-router-dom';
//import getProducts from './Helpers/getProducts';
import ItemCount from './ItemCount/ItemCount';
import ItemList from './ItemList';

function ItemListContainer() {
 // const [item, setItem] = useState([]);

  //useEffect(() => { 
 // async function fetchData(){
   // const response = await getProducts
   // setItem(
     // categoria? response.filter(item => item.category === categoria): response
   // )} fetchData() }, [categoria]);
  
 

  function onAdd(cant){
   console.log(cant)
  }
  return <div>
   {/*item.map ((item)=> <ItemList item={item} key={item.id} />

   )
*/}
   <ItemList/>
   <ItemCount initial={1} stock={5} onAdd={onAdd}/>

  </div>;
}

export default ItemListContainer;
