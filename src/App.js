import NavBar from './components/NavBar';
import ItemDetailContainer from './components/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Cart from "./components/Cart";

import './App.css';
import CartContextProvider from './components/CartContext';

const App = () => {
  return (
  
    <div className="App">
    <CartContextProvider>
        <BrowserRouter>
          <NavBar />
            <Routes>
              <Route path="/" element={<ItemListContainer/>} />
              <Route path="/category/:id" element={<ItemListContainer/>} />
              <Route path="/item/:id" element={<ItemDetailContainer/>} />
              <Route path="/cart" element={<Cart />} />
          </Routes>
          </BrowserRouter>
      </CartContextProvider>
    </div>
  );
}

export default App;
