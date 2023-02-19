import React, { useContext } from 'react';
import { CartContext } from './CartContext';

const Cart = () => {
  const { cartItems, calculateTotalPrice } = useContext(CartContext);

  return (
    <div>
      <ul>
        {cartItems.map((item) => (
          <li
            style={{
              backgroundColor: 'skyblue',
              listStyleType: 'none',
              display: 'inline-block',
              padding: '10px',
            }}
            key={item.id}
          >
            {item.name} || {item.price} €
          </li>
        ))}
      </ul>
      <p>Total: {calculateTotalPrice}</p>
    </div>
  );
};

export default Cart;
