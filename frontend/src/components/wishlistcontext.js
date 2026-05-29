import React, { createContext, useContext, useState } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const toggleWishlist = (product) => {
    setWishlist((prevWishlist) => {
      // Check if product is already in the wishlist using its unique description or an id
      const exists = prevWishlist.find((item) => item.desc === product.desc);
      if (exists) {
        // Remove it
        return prevWishlist.filter((item) => item.desc !== product.desc);
      } else {
        // Add it
        return [...prevWishlist, product];
      }
    });
  };

  // Helper to check if a specific product is favorited
  const isWishlisted = (product) => {
    return wishlist.some((item) => item.desc === product.desc);
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleWishlist, isWishlisted }}>
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);