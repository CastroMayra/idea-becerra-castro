import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {
  return <>
    <NavBar/>
    <br/>
    <ItemListContainer nombre="Mascoteros" app="Mi Primer APP en React!!"/>
    <br/>
    <ItemDetailContainer/>
    </>;
}

export default App;




