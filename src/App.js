import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';
import './styles/style.css';

function App() {
  const [cart, setCart] = useState([]);
  
  const cleanCart = () => {
    cart.forEach(e => {
      if (e.quantity <= 0) {
        const newCart = cart.filter(a => a !== e);
        setCart(newCart);
      }
    });
  }
  useEffect(() => {
    cleanCart();
  });
  const increment = (i) => {
    setCart(prev => {
      const current = [...prev];
      current[i].quantity += 1;
      return current;
    });
  }

  const decrement = (i) => {
    setCart(prev => {
      const current = [...prev];
      current[i].quantity -= 1;
      return current;
    });
  }

  const toggleCart = () => {
    const cart = document.getElementById('cart-hide');
    const overlay = document.getElementById('overlay');
    cart.classList.toggle('hide');
    overlay.classList.toggle('hide');
  }
 
  const addToCart = (product) => {
    let i;
    const inCart = cart.some((e, index) => {
      if (e.name === product.name) {
        i = index;
        return true;
      }
      return false;
    });

    if (inCart) {
      increment(i);
    } else {
      product.quantity = 1;
      setCart(prev => [...prev, product]);
    }
  }

  return (
    <BrowserRouter>
      <div id="overlay" className="hide" onClick={toggleCart}/>
      <Nav toggleCart={toggleCart}/>
      <Cart toggleCart={toggleCart} content={cart} increment={increment} decrement={decrement}/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop addCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
