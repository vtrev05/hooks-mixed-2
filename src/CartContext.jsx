import React, { createContext, useState, useMemo } from 'react';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    setCartItems((prevItems) => [...prevItems, product]);
  };

  const calculateTotalPrice = useMemo(() => {
    return cartItems.reduce((total, item) => {
      return total + item.price;
    }, 0);
  }, [cartItems]);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, calculateTotalPrice }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
