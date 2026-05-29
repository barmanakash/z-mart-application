import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  // 1. Existing Wishlist State & Logic
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      const exists = prevWishlist.find((item) => item.desc === product.desc);
      if (exists) {
        return prevWishlist.filter((item) => item.desc !== product.desc);
      } else {
        return [...prevWishlist, product];
      }
    });
  };

  const isWishlisted = (product) => {
    return wishlist.some((item) => item.desc === product.desc);
  };

  // 2. NEW: Shopping Bag State & Logic (Replacing Redux)
  const [cartItems, setCartItems] = useState([]);

  const addToCartFromLanding = (product) => {
    setCartItems((prevItems) => {
      // Check if the item already exists in the bag by checking its title
      const exists = prevItems.find((item) => item.title === product.title);

      if (exists) {
        // If it exists, map through and increase the quantity field
        return prevItems.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      // If it's a new item, assign it a default price, quantity, and size so the cart page reads it easily
      return [
        ...prevItems,
        {
          ...product,
          currentPrice: product.price || 1499, // Fallback default price if missing
          size: 'Free Size',
          quantity: 1,
        },
      ];
    });
  };

  // Remove an item from the bag based on its array index position
  const removeFromCartContext = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  // Instantly calculates dynamic count for your Navbar badge
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <WishlistContext.Provider 
      value={{ 
        wishlist, 
        toggleWishlist, 
        isWishlisted,
        cartItems,              // Used by Cart page
        addToCartFromLanding,   // Used by Landing page
        removeFromCartContext,  // Used by Cart page
        totalQuantity           // Used by Navbar
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);