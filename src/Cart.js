import React, {useContext} from 'react';
import {CartContext} from './CartContext';
import './style.css';

export const Cart = () => {
  const [cart, setCart] = useContext(CartContext);


  return (
    <div id="nav">
      <p>Items in cart : {cart.length}</p>
    </div>
  )
}