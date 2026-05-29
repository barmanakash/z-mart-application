import React, { createContext, useContext, useState, useEffect } from 'react';

const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem('zmart_wishlist');
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  const [cartItems, setCartItems] = useState(() => {
    const savedCart = localStorage.getItem('zmart_cart');
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('zmart_wishlist', JSON.stringify(wishlist));
  }, [wishlist]);

  useEffect(() => {
    localStorage.setItem('zmart_cart', JSON.stringify(cartItems));
  }, [cartItems]);


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


  const addToCartFromLanding = (product) => {
    setCartItems((prevItems) => {
      const exists = prevItems.find((item) => item.title === product.title);

      if (exists) {
        return prevItems.map((item) =>
          item.title === product.title ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [
        ...prevItems,
        {
          ...product,
          currentPrice: product.price || 1499,
          size: 'Free Size',
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCartContext = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  return (
    <WishlistContext.Provider 
      value={{ 
        wishlist, 
        toggleWishlist, 
        isWishlisted,
        cartItems,              
        addToCartFromLanding,   
        removeFromCartContext,  
        totalQuantity           
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);