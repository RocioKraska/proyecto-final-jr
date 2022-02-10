import { useContext } from 'react';
import {createContext, useState} from 'react';

export const CartContext = createContext();
export function useCartContext() {return useContext(CartContext)} 
export const CartContextProvider = ({children}) => {
	

	const [cart, setCart] = useState([]);

	const addItem = (item, quantity) => {
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
	}

	console.log(cart)

	const isInCart = (id) => {
		return cart.find(element => element.item.id === id)
	}

	/*const removeItem = (itemId) => {
		const cartFilter = cart.filter(element => element.item.id !== itemId)
		return setCart(cartFilter)
	}*/
    function vaciarCarrito() {
        setCart([])
        
    }


	return(
		<CartContext.Provider value={{ addItem, cart, setCart, vaciarCarrito}}>
			{children}
		</CartContext.Provider>
	)
}