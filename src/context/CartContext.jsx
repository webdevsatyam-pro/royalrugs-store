// src/context/CartContext.jsx
import React, { createContext, useState, useContext, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // --- 1. ADD TO CART (With Quantity Logic) ---
  const addToCart = (product) => {
    setCart((prev) => {
      const isExist = prev.find((item) => item.id === product.id);

      if (isExist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
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

  // --- 4. CLEAR CART (Order hone ke baad khali karne ke liye) ---
  const clearCart = () => {
    setCart([]);
  };

  // --- 5. WISHLIST TOGGLE (Add or Remove) ---
  const addToWishlist = (product) => {
    setWishlist((prev) => {
      const isExist = prev.find((item) => item.id === product.id);
      if (isExist) {
        alert("Removed from Wishlist");
        return prev.filter((item) => item.id !== product.id);
      } else {
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
        clearCart, // <--- Isey add kiya gaya hai
      }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
