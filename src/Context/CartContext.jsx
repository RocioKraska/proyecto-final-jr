import { createContext, useState, useContext } from "react";

const cartContext = createContext([])

export function useCartContext() {return useContext(cartContext)} 

//crear un componente

function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([]);

    const agregarAlCarrito = (item, quantity) => {
		if(noDuplicados(item.id)) {
			const cargar = [...cartList];

			cargar.forEach((element) => {
				if(element.item.id === item.id) {
					element.quantity += quantity
				}
			})
			setCartList(cargar)
		} else {
			setCartList([...cartList, {item, quantity}])
		}
	}

	console.log(cartList)

	const noDuplicados = (i) => {
		return cartList.find(element => element.item.i === i)
	}
	/*const evitarDuplicados = (parametro) => {
		const findCharacter = cartList.find((i) => {
			return i.name === parametro
		})
		return findCharacter
	}*/

     
    


   /* function noDobles(qua){
        if (cartList.length >1){
           qua = cartList.length
            console.log(qua)
            return(
                <div>
                    <h1>{qua}</h1>
                </div>
            )
        }
    }*/
    function vaciarCarrito() {
        setCartList([])
        
    }


  return <cartContext.Provider value={{
      cartList,
      agregarAlCarrito,
      vaciarCarrito
  }} >
        {children}
  </cartContext.Provider>;
}

export default CartContextProvider;



/*import { createContext, useState, useContext } from "react";

const CartContext = createContext([])

export function useCartContext() {return useContext(CartContext)} 



function CartContextProvider({ children }) {
    
    const [cartList, setCartList] = useState([]);

    function agregarAlCarrito(item){
        if(evitarDuplicados(item)) {
			const cambiarCantidad = [...cartList]
			cambiarCantidad.forEach(x => {
				if(x.name === item ) {
					x.cantidad += 1
				}
			})
			return setCartList(cambiarCantidad)
		}
		return setCartList([...character, {name: item, cantidad: 1}])}
    

	const evitarDuplicados = (parametro) => {
		const findCharacter = character.find((i) => {
			return i.name === parametro
		})
		return findCharacter
	}
    

    function vaciarCarrito() {
        setCartList([])
    
      return (<CartContext.Provider value={{
      cartList,
      agregarAlCarrito,
      vaciarCarrito
  }} >
        {children}
  </CartContext.Provider>}}

export default CartContextProvider*/

/*import {createContext, useState, useContext} from 'react';

export const CartContext = createContext(null)

export const useCartContext = () => useContext(CartContext)


export  const CartContextProvider = ({children}) => {
	const [cartList, setCartList] = useState([])
	function Agregar(element) {
		if(evitarDuplicados(element)) {
			const cambiarCantidad = [...cartList]
			cambiarCantidad.forEach(x => {
				if(x.name === element ) {
					x.cantidad += 1
				}
			})
			return setCartList(cambiarCantidad)
		}
		return setCartList([...cartList, {name: element, cantidad: 1}])
	}

	const evitarDuplicados = (parametro) => {
		const findCharacter = cartList.find((i) => {
			return i.name === parametro
		})
		return findCharacter
	}

	const eliminarUno = (item) => {
		const eliminarItem = [...cartList]
		const itemEliminado = eliminarItem.filter(x => x.name !== item)
		console.log('se ejecuta')
		return setCartList(itemEliminado)
	}

	const borraTodos = () => setCartList([])
	
	return (
		<CartContext.Provider value={{Agregar, cartList, eliminarUno, borraTodos}}>
			{children}
		</CartContext.Provider>
	)
}*/

