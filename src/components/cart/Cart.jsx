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