import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route, } from 'react-router-dom';
import Cart from './components/Cart';
import CartContext from './context/CartContext';


export default function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <NavBar />

          <Switch>
            {/*ruta home*/}
            <Route exact path="/">
              <p style={{ color: '#AFB6B5 ', padding: '2px 15px', textTransform: 'uppercase' }}>
                Estas en Home
              </p>

              <ItemListContainer />
            </Route>
            {/*ruta contacto*/}
            <Route exact path="/contacto">
              <p style={{ color: '#AFB6B5 ', padding: '2px 15px', textTransform: 'uppercase' }}>
                Estas en Contacto
              </p>

            </Route>
            {/* ruta dinámica para categoría mascotas*/}
            <Route path="/categoria/:categoryId">
              <p style={{ color: '#AFB6B5 ', padding: '2px 15px', textTransform: 'uppercase' }}>
                Estas en Mascotas
              </p>
              <ItemListContainer />

            </Route>
            <Route exact path="/cart">
              <p style={{ color: '#AFB6B5 ', padding: '2px 15px', textTransform: 'uppercase' }}>
                Estas en el Carrito
                <Cart />

              </p>

            </Route>
            <Route path="/item/:id">
              <p style={{ color: '#AFB6B5 ', padding: '2px 15px', textTransform: 'uppercase' }}>
                Estas en el Producto
              </p>

              <ItemDetailContainer />
            </Route>
          </Switch>
        </BrowserRouter>
      </CartContext>
    </>
  );
}






