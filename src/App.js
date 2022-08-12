import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';
import './styles/style.css';

function App() {
  const [cart, setCart] = useState([]);

  const toggleCart = () => {
    const cart = document.getElementById('cart-hide');
    cart.classList.toggle('hide');
  }
  const addToCart = (product) => {
    setCart(prev => [...prev, product]);
  }

  return (
    <BrowserRouter>
      <Nav toggleCart={toggleCart}/>
      <Cart toggleCart={toggleCart} content={cart}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop addCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
