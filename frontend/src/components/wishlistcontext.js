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
      // Use a stable identifier for products: prefer title, fall back to desc or brand+desc
      const productKey = product.title || product.desc || `${product.brand || ''}-${product.desc || ''}`;

      const exists = prevItems.find((item) => (item.title || item.desc) === productKey);

      if (exists) {
        return prevItems.map((item) =>
          (item.title || item.desc) === productKey ? { ...item, quantity: item.quantity + 1 } : item
        );
      }

      return [
        ...prevItems,
        {
          // normalize stored product fields
          title: product.title || product.desc || `${product.brand || ''} ${product.desc || ''}`,
          desc: product.desc || product.title || '',
          img: product.img,
          currentPrice: product.price ? Number(product.price) : 1499,
          size: product.size || 'Free Size',
          quantity: product.quantity || 1,
        },
      ];
    });
  };

  const removeFromCartContext = (indexToRemove) => {
    setCartItems((prevItems) => prevItems.filter((_, index) => index !== indexToRemove));
  };

  const clearCartContext = () => {
    setCartItems([]);
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
        clearCartContext,       
        totalQuantity           
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlist = () => useContext(WishlistContext);