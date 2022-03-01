import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Cart from './components/Cart';
import CartContext from './context/CartContext';
import Order from './components/Order';


export default function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />

          <Switch>
            {/*ruta home*/}
            <Route exact path="/">
              <ItemListContainer />
            </Route>

            {/*ruta contacto*/}
            <Route exact path="/contacto">
            </Route>

            {/* ruta dinámica para categoría mascotas*/}
            <Route path="/categoria/:categoryId">
              <ItemListContainer />
            </Route>

            <Route exact path="/cart">
              <Cart />
            </Route>

            <Route path="/item/:itemId">
              <ItemDetailContainer />
            </Route>

            <Route exact path="/order">
              <Order />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext>
    </>
  );
}






