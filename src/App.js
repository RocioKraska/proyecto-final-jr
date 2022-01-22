import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div className="App">
    <NavBar/>
    <ItemListContainer/>

    </div>
  );
}

export default App;
