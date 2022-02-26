import { 
    getFirestore, 
    collection, 
    addDoc,  
    query, 
    where, 
    documentId, 
    writeBatch, 
    getDocs 
} from 'firebase/firestore'
import { useState } from "react";
import { useCartContext } from '../../Context/prueba/CartContext';
import { GiAquarium } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { TiBackspaceOutline } from "react-icons/ti";
import "../css/cart.css"

const Cart = () => {

    const [id, setId] = useState('')
    const [form, setForm] = useState({
        email: '',
        phone: '',
        name: ''
    })
    const { cart, vaciarCarrito, sumaTotal, borrarItem } = useCartContext()

    const realizarCompra = async (e) => {
        e.preventDefault()  

       
        let orden = {}          

        orden.buyer =  form 
        orden.total = sumaTotal();

        orden.items = cart.map(cart => {
            const id = cart.item.id;
            const nombre = cart.item.name;
            const precio = cart.item.price * cart.quantity;
            const cantidad = cart.quantity
            
            return {
                id, 
                nombre, 
                precio, 
                cantidad
            }   
        }) 
        
        const db = getFirestore()
        const ordersCollection = collection (db, 'orders')
        await addDoc( ordersCollection, orden)
        .then(resp => setId(resp.id))

        // actualizando un documento      
    //     const queryDoc = doc(db, 'items', 'KASilNli63XCkyJByarM' )
    //     updateDoc(queryDoc, { 
    //         stock: 90
    //     })
    //     .then(resp => console.log(resp))

    // actualizar stock, no es obligatoria, solo el que quiera. 

        const queryCollection = collection(db, 'items')
        

        const queryActulizarStock = query(
            queryCollection, 
            where( documentId() , 'in', cart.map(it => it.item.id) )          
        ) 

        const batch = writeBatch(db)

        await getDocs(queryActulizarStock)
        .then(resp => resp.docs.forEach(res => batch.update(res.ref, {
                stock: res.data().stock - cart.find(item => item.item.id === res.id).quantity
            })
        ))
        .catch(err => console.log(err))
        .finally(() => { 
                setForm({
                    email: '',
                    phone: '',
                    name: ''
                })
                vaciarCarrito()
            })    
    batch.commit()  
    
 }

    const handleChange = (event) => {      
        setForm({ 
            ...form,
            [event.target.name]: event.target.value
        })
    }

    console.log(form);
    return <div>
        <div className='mensaje' >
            {id !== '' && `
            gracias por su compra!

            el id de su orden es
           
            
            
            : ${id} !` }
        </div>
            <br />
            {cart.length !== 0 ?<>
                {cart.map(produ => <div   id='c'>
                    
                    <img id='foto' src={produ.item.foto} />
                    <div  id='cont'> <p id='pre'>${produ.item.price}</p> <p id='cant'>cantidad: {produ.quantity}</p></div>
                  
                    <button className='butt' id='eliminar' onClick={() => borrarItem(produ.item.id)}><TiBackspaceOutline id='iicon'/></button>
                </div> ) }
          <p  id='suma' > {`la suma es $ ${sumaTotal()}`} </p> 
            <br/>
                
                <form id='for'
                    onSubmit={realizarCompra}                           
                >
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='name' 
                        onChange={handleChange}
                        value={form.name}
                        className="inp"
                    />
                    <br />
                    <input 
                        type='number' 
                        name='phone'
                        placeholder='tel' 
                        onChange={handleChange}
                        value={form.phone}
                        className="inp"
                    />
                    <br/>
                    <input 
                        type='email' 
                        name='email'
                        placeholder='email' 
                        onChange={handleChange}
                        value={form.email}
                        className="inp"
                    />
                    <br/>
                    <input 
                        type='email' 
                        name='validarEmail'
                        placeholder='Repetir Email' 
                        onChange={handleChange}
                        className="inp"
                        
                    />
                    <br/>
                    <button className='butt'>generar orden</button>
                </form>
            </> 
            :
            <> 
                <GiAquarium  id='icon'/>
                <p className='sinProd'>ningún objeto fue agregado</p>

                <br />
                <button onClick={vaciarCarrito} className="vaciar" >Vaciar Carrito</button>
                

                <Link  to="/">

                <button className='vaciar' >ir a comprar</button>
                </Link>
            </> 
        
            }
               
        </div>;
    };

export default Cart;











/*import { useCartContext } from "../../Context/prueba/CartContext";
import { 
  getFirestore, 
  collection, 
  addDoc, 
  doc, 
  updateDoc, 
  query, 
  where, 
  documentId, 
  writeBatch, 
  getDocs 
} from 'firebase/firestore'
import { useState } from "react";



const Cart = () => {


  const [id, setId] = useState('')
  const [form, setForm] = useState({
      email: '',
      phone: '',
      name: ''
  })

    const { cart, vaciarCarrito, sumaTotal,borrarItem } = useCartContext()
    const ccart= cart.find(element=> element.item)
    console.log(cart);
console.log(cart)
/*
    const comprar = async (e) => {
      e.preventDefault()     
      let orden = {}          

      orden.buyer =  form 
      orden.total = sumaTotal();


      orden.items = cart.map(cart => {
          const id = cart.item.id;
          const nombre =cart.item.name;
          const precio = cart.item.price * cart.quantity;
          const cantidad = cart.quantity
          
          return {
              id, 
              nombre, 
              precio, 
              cantidad
          }   
        
      })
    
    console.log(orden)

    const db = getFirestore()

    const collect = collection (db, 'ordenes')
    await addDoc (collect, orden )
    .then(resp => console.log(resp))
    }
    const db = getFirestore()
    const queryCol = collection(db, 'items')
    console.log(cart)  

    const queryActulizar = query(
        queryCol, 
        where( documentId() ,'in', cart.map(i => i.item.id) )    
       
    ) 
    
    const B = writeBatch(db)


    const check = async () => {

      
      await  getDocs(queryActulizar)
      .then(resp => resp.docs.forEach(res => B.update(res.ref, {
              stock: res.form().stock - cart.find(i => i.item.id === res.id).quantity//?
          })
      ))
      .catch(err => console.log(err))
      .finally(() => { 
              setForm({
                  email: '',
                  phone: '',
                  name: ''
              })
              vaciarCarrito()
          })    
          B.commit()  
  }
 
        
       
      
     
    
    check();
console.log(check)
const change = (event) => {      
  setForm({ 
      ...form,
      [event.target.name]: event.target.value
  })
}

*/
  /* 
  return( <>
            {id !== '' && `El id de la orden es : ${id} ` }
            <br />
            {cart.length !== 0 ?<>
                {cart.map(produ => <div>
                    <li>{produ.name} precio: {produ.price} cantidad: {produ.cantidad}</li>
                    <button onClick={() => borrarItem(produ.item.id)}>x</button>
                </div> ) }
            {`la suma es ${sumaTotal()}`}
            </>
            :
            <>
            
            </>
            }
            <br/>
            </>

   
  )
  }
               
                <form 
                    onSubmit={comprar}                           
                >
                    <input 
                        type='text' 
                        name='name' 
                        placeholder='name' 
                        onChange={change}
                        value={form.name}
                    />
                    <br />
                    <input 
                        type='number' 
                        name='phone'
                        placeholder='tel' 
                        onChange={change}
                        value={form.phone}
                    />
                    <br/>
                    <input 
                        type='email' 
                        name='email'
                        placeholder='email' 
                        onChange={change}
                        value={form.email}
                    />
                    <input 
                        type='email' 
                        name='validarEmail'
                        placeholder='Repetir Email' 
                        onChange={change}
                        //value={}
                    />
                    <br/>
                    <button>Generar Orden</button>
                </form>
            </> 
            :
            <> 
                <label>no hay producto vaya ya a comprar</label>
                <br />
                <button onClick={vaciarCarrito} >Vaciar Carrito</button>
            </> 
        
            }
          
            
  
export default Cart;*/