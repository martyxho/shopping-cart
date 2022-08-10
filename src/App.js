import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';
import './styles/style.css';

function App() {
  const toggleCart = () => {
    const cart = document.getElementById('cart');
    cart.classList.toggle('hide');
  }

  return (
    <BrowserRouter>
      <Nav toggleCart={toggleCart}/>
      <Cart toggleCart={toggleCart}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
