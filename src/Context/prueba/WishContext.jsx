import React from 'react'
import { createContext, useState, useContext } from "react";

export const wishContext = createContext([])

export function useWishContext() {return useContext(wishContext)} 


export const WishContextProvider = ({children})=> {
    const [wishList, setWishList] = useState([]);

    function addToWishList(item){
        console.log(item)

        const index = wishList.findIndex(prod => prod.item.id === item.item.id )

        if (index === -1) {
           
            setWishList( [ ...wishList, item ] )
        } else {
         
            const cant = wishList[index].quantity
            wishList[index].quantity = item.quantity + cant 
            const newWishList = [ ...wishList ]
            setWishList(newWishList)
        }

    }

   
    const delate = (id) => { 
        setWishList( wishList.filter( prod => prod.item.id !== id ) )
    }

    function empty() {
        setWishList([])
        
    }
    
  
  return (
    <wishContext.Provider  value={{
        wishList,
        addToWishList,
        empty,
        
        delate
    }} >
          {children}
    </wishContext.Provider>

  )
} 

