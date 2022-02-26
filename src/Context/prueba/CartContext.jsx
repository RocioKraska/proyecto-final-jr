import { useContext } from 'react';
import {createContext, useState} from 'react';

import "./cartContext.css"
export const CartContext = createContext();
export function useCartContext() {return useContext(CartContext)} 

export const CartContextProvider = ({children}) => {
	

	const [cart, setCart] = useState([]);

	const addItem = ({item, quantity}) => {
		if(isInCart(item.id)) {
			const updateCart = [...cart];
		

			updateCart.forEach((element) => {
				if(element.item.id === item.id) {
					element.quantity += quantity
				}
			})
			setCart(updateCart)
			
		} else {
			setCart([...cart, {item, quantity}])
		}
		console.log(item)
	}
	console.log(cart)
	const isInCart = (id) => {
		return cart.find(element => element.item.id === id)
	}

    function vaciarCarrito() {
        setCart([])
        
    }
	const sumaTotal = () => {
        return cart.reduce((acum, prod) =>  acum= acum + (prod.item.price * prod.quantity)  ,0)
    }
    
    const cantidad = () => {
        return cart.reduce((acum, prod) =>  acum += prod.quantity  ,0)
    }

    const borrarItem = (id) => { 
        setCart( cart.filter( prod => prod.item.id !== id ) )
    }


	
	return(
		<CartContext.Provider value={{ addItem, cart, setCart, vaciarCarrito, sumaTotal, cantidad,borrarItem}}>
			{children}
		</CartContext.Provider>
	)

}