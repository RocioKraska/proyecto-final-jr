import products from "./products";

const getProducts = () => {
   return new Promise((res, rej) => {
     setTimeout(() => res(products), 2000);
   });
 };
export default getProducts; 

    



