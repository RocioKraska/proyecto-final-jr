import { products } from "../ItemList"


 export const getProducts = new Promise((res,rej)=> {
    let cond = true
    if (cond){
       setTimeout(()=>{res(products)}, 2000)
        
    }else{
        rej("404 NOT FOUND")
    }})
  

    



