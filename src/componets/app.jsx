import React, { useState } from 'react';
import '..';

function App() {
  const [products] = useState([
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 },
  ]);

  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cart, product];
    setCart(updatedCart);
    const updatedTotal = total + product.price;
    setTotal(updatedTotal);
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((item) => item.id !== product.id);
    setCart(updatedCart);
    const updatedTotal = total - product.price;
    setTotal(updatedTotal);
  };

  return (
    <div className="container">
      <h1>Tienda de Productos</h1>
      <ul className="product-list">
        {products.map((product) => (
          <li className="product-item" key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Agregar al Carrito</button>
          </li>
        ))}
      </ul>

      <div className="cart">
        <h2>Carrito de Compras</h2>
        <ul>
          {cart.map((item) => (
            <li className="cart-item" key={item.id}>
              {item.name} - ${item.price}
              <button onClick={() => removeFromCart(item)}>Quitar</button>
            </li>
          ))}
        </ul>
        <div className="cart-total">Total: ${total}</div>
        <button>Comprar</button>
      </div>
    </div>
  );
}

export default App;