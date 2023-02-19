import React from 'react';
import products from './products';
import Product from './Product';
import Cart from './Cart';
import CartProvider from './CartContext';

function App() {
  return (
    <div>
      <h1>Tienda virtual de productos para mascotas</h1>
      <CartProvider>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <Product product={product} />
            </li>
          ))}
        </ul>
        <Cart />
      </CartProvider>
    </div>
  );
}

export default App;
