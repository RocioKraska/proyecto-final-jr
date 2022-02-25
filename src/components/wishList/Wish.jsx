
import {  useCartContext } from '../../Context/prueba/CartContext'
import { useWishContext } from '../../Context/prueba/WishContext'
import ItemCount from '../ItemCount/ItemCount'


const Wish = ({product}) => {

  
    const {  
        wishList,
        empty,
        delate } = useWishContext()
        const {addItem} = useCartContext()

         function onAdd(cant){

     
          addItem({item:product, quantity:cant})
      
         }

           

 
 
  return (

<div>
{/*{wishList.length !== 0 ?  */}

{ wishList.map(i =>

<>



      
<img src={i.item.foto}/>

<li>  NOMBRE:   {i.item.name}  PRECIO: {i.item.price}</li>

<ItemCount initial={1} stock={5} onAdd={onAdd} />   


{console.log(wishList.length)}


<button onClick={() => delate(i.item.id)}>x</button>
{console.log(i.item.id)}
  </>
   )

   }
<button onClick={empty}  className='btn btn-outline-primary'  >Vaciar Carrito</button>
 </div>
 

 )
 }

export default Wish;
