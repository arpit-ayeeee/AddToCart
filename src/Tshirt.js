import React, { useContext } from 'react';
import { CartContext } from './CartContext';

export const Tshirt = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const tshirt = { name: props.name, price: props.price };
    setCart(currentState => [...currentState, tshirt]);
  }
  const remove = (props) => {
    setCart(cart.slice(cart.indexOf(props,1)))
  }
  console.log(cart);
  return (
    <div id="prod">
      <div>
      <h2>{props.name}</h2>
      <button onClick={addToCart}>Add to cart</button>
      <button onClick={remove}>Remove</button>
      </div>
    </div>
  );
}