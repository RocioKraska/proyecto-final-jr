import products from "./products";

const getProducts =new Promise((res, rej)  => {

  let condition = true

  if(condition){
    setTimeout(() => res(products), 2000)
  }else{
    rej("404 not found")
  }
  // return new Promise((res, rej) => {
    // setTimeout(() => res(products), 2000);
   //});

 });
export default getProducts

    



