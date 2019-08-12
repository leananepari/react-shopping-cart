import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import data from './data';
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

function App() {
  const savedCart = localStorage.getItem('cart');
	const [products] = useState(data);
  const [cart, setCart] = useState(savedCart ? JSON.parse(savedCart) : []);
  
  useEffect(() => {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem('cart', JSON.stringify(cart))
    })
  }, [cart])

	const addItem = item => {
    if(!cart.includes(item)) {
      setCart([...cart, item]);
    }
  };
  
  const removeItem = (id) => {
    let temp = [];
    cart.forEach(item => {
      if (item.id !== id) {
        temp.push(item);
      }
    })
    setCart(temp);
  };

	return (
    <ProductContext.Provider value={{ products, addItem, removeItem }}>
      <CartContext.Provider value={ { cart } }>
        <div className="App">
          <Navigation />

          {/* Routes */}
          <Route
            exact
            path="/"
            component={Products}
          />

          <Route
            path="/cart"
            component={ShoppingCart}
          />
        </div>
      </CartContext.Provider>
    </ProductContext.Provider>
	);
}

export default App;
