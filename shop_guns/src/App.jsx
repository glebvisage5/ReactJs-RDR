import './App.css';
import './fonts.css';
import Cards from './Cards/Cards';
import Cart from './Cart/Cart';
import { useState } from 'react';

export default function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.find((cartItem) => cartItem.title === item.title);
      if (itemExists) {
        return prevItems.map((cartItem) =>
          cartItem.title === item.title
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      }
      return [...prevItems, { ...item, quantity: 1 }];
    });
  };

  const removeFromCart = (itemTitle) => {
    setCartItems((prevItems) => {
      return prevItems
        .map((cartItem) =>
          cartItem.title === itemTitle
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
        .filter((cartItem) => cartItem.quantity > 0);
    });
  };

  return (
    <section className='app'>
      <Cards addToCart={addToCart} />
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
    </section>
  );
}
