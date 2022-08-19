import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Shop from './components/Shop';
import Nav from './components/Nav';
import Cart from './components/Cart';
import uniqid from "uniqid";
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

  const onChange = (i, value) => {
    const newCart = [...cart];
    newCart[i].quantity = Number(value);
    setCart(newCart);
  }
  
  const remove = (i) => {
    const newCart = cart.filter((e, index) => index !== i);
    setCart(newCart);
  }

  const closeCart = () => {
    const cart = document.getElementById('cart');
    const root = document.getElementById('root');
    const overlay = document.getElementById('overlay');
    overlay.classList.remove('show');
    setTimeout(() => root.removeChild(overlay), 600);
    cart.classList.remove('show');
  }

  const openCart = () => {
    const cart = document.getElementById('cart');
    const root = document.getElementById('root');
    const overlay = document.createElement('div');
    overlay.id = 'overlay';
    overlay.onclick = closeCart;
    root.appendChild(overlay);
    setTimeout(() => overlay.classList.add('show'));
    cart.classList.add('show');
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
      onChange(i, cart[i].quantity + 1)
    } else {
      product.quantity = 1;
      product.id = uniqid();
      setCart(prev => [...prev, product]);
    }
  }

  return (
    <BrowserRouter>
      <Nav toggleCart={openCart} content={cart}/>
      <Cart 
        toggleCart={closeCart} 
        content={cart} 
        onChange={onChange}
        remove={remove}
      />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop addCart={addToCart} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
