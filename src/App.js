
import './App.css';
import NavBar from './components/NavBar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';
import Cart from './components/cart/Cart';
import { CartContextProvider } from './Context/prueba/CartContext';





function App() {
  
  return (
    <BrowserRouter>
  
<CartContextProvider>
    <div className="App">
     <NavBar/>
     <Routes>
      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route exact path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
      <Route exact path= "/detalle/:idProducto" element={<ItemDetailContainer/>}/>
      <Route exact path='/cart' element={<Cart/>}/>

     </Routes>
     </div>
     </CartContextProvider>
          </BrowserRouter>

    

  );
}

export default App;
