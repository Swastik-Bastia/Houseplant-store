
import React from 'react';
import { useSelector } from 'react-redux';

function ShoppingCart() {
  const cart = useSelector(state => state.cart.items);
  return (
    <div>
      {cart.map(item => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <p>${item.price}</p>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCart;
