
import './App.css';
import NavBar from './components/NavBar/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer';

function App() {
  
  return (
    <BrowserRouter>
    <div className="App">
     <NavBar/>

     <Routes>
      <Route exact path="/" element={<ItemListContainer/>}/>
      <Route exact path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
      <Route exact path= "/detalle/:idProducto" element={<ItemDetailContainer/>}/>
     </Routes>
     </div>
     </BrowserRouter>

    

  );
}

export default App;
