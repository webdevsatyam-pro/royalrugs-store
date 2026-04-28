// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // --- 1. ADD TO CART (With Quantity Logic) ---
  const addToCart = (product) => {
    setCart((prev) => {
      // Check karo ki kya product pehle se cart mein hai?
      const isExist = prev.find((item) => item.id === product.id);

      if (isExist) {
        // Agar hai, toh sirf uski quantity badha do
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      // Agar naya hai, toh quantity 1 set karke add karo
      return [...prev, { ...product, quantity: 1 }];
    });
    alert(`${product.name} has been added to your Bag!`);
  };

  // --- 2. UPDATE QUANTITY (Increment/Decrement) ---
  const updateQuantity = (id, type) => {
    setCart((prev) =>
      prev.map((item) => {
        if (item.id === id) {
          if (type === "inc") {
            return { ...item, quantity: item.quantity + 1 };
          }
          if (type === "dec" && item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          }
        }
        return item;
      }),
    );
  };

  // --- 3. REMOVE FROM CART ---
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  // --- 4. WISHLIST TOGGLE (Add or Remove) ---
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        // Agar pehle se hai toh remove kar do (Toggle feature)
        alert("Removed from Wishlist");
        return prev.filter((item) => item.id !== product.id);
      } else {
        // Agar nahi hai toh add kar do
        alert("Added to Wishlist");
        return [...prev, product];
      }
    });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        wishlist,
        addToCart,
        addToWishlist,
        removeFromCart,
        updateQuantity,
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
