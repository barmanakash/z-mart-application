import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { WishlistProvider, useWishlist } from '../wishlistcontext';

const TestConsumer = () => {
  const { cartItems, addToCartFromLanding, clearCartContext } = useWishlist();

  return (
    <div>
      <button
        onClick={() => addToCartFromLanding({ title: 'Test Product', price: 100, img: 'img.jpg', desc: 'Test desc' })}
      >
        add
      </button>
      <button onClick={clearCartContext}>clear</button>
      <span data-testid="count">{cartItems.length}</span>
    </div>
  );
};

describe('Wishlist cart context', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('clears cart items and storage when clearCartContext is called', () => {
    render(
      <WishlistProvider>
        <TestConsumer />
      </WishlistProvider>
    );

    fireEvent.click(screen.getByText('add'));
    expect(screen.getByTestId('count').textContent).toBe('1');

    fireEvent.click(screen.getByText('clear'));
    expect(screen.getByTestId('count').textContent).toBe('0');
    expect(localStorage.getItem('zmart_cart')).toBe('[]');
  });
});
