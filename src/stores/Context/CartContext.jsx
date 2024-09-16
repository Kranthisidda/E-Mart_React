import React, { createContext, useContext, useState } from "react";

// Create the CartContext using createContext()
export const CartContext = createContext();

// CartProvider component
export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Function to add an item to the cart
  function addToCart(item) {
    if(cartItems.includes(item)){
        setCartItems([...cartItems])
    }
    else{
        setCartItems([...cartItems,item])
    }
  }

  // Function to remove an item from the cart
  function removeFromCart(item) {
    setCartItems(cartItems.filter((item1) => item1 !== item));
  }

  // Provide the context values to the children
  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to consume the CartContext
export function useCart() {
  return useContext(CartContext);
}
