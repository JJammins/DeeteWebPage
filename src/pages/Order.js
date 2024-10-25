import React, { useState } from 'react';
import MenuCategory from '../components/MenuCategory';
import MenuData from '../components/MenuData';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import './Order.css';

function Order() {
  const [cartItems, setCartItems] = useState([]);
  const [cartHover, setCartHover] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const filteredMenuItems = selectedCategory === 'All'
    ? Object.values(MenuData).flat()
    : MenuData[selectedCategory];

  const addToCart = (item) => {
    setCartItems(prevCartItems => {
      const existingItemIndex = prevCartItems.findIndex(cartItem => cartItem.name === item.name);
  
      if (existingItemIndex >= 0) {
        // 기존 아이템 수량을 1씩만 증가
        return prevCartItems.map((cartItem, index) =>
          index === existingItemIndex
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        );
      } else {
        // 새로운 아이템을 수량 1로 추가
        return [...prevCartItems, { ...item, quantity: 1 }];
      }
    });
  };
  
  const updateItemQuantity = (index, quantity) => {
    setCartItems(prevCartItems => {
      return prevCartItems.map((cartItem, i) =>
        i === index
          ? { ...cartItem, quantity: cartItem.quantity + quantity }
          : cartItem
      ).filter(cartItem => cartItem.quantity > 0); // 수량이 0 이하일 경우 제거
    });
  };

  const removeFromCart = (index) => {
    const updatedCartItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedCartItems);
  };
  
  const calculateTotalPrice = () => {
    return cartItems.reduce((total, item) => total + parseInt(item.price.replace(',', '')) * item.quantity, 0);
  };

  return (
    <div className='order-page'>
      <h1>Order</h1>
      <div className="category-buttons">
        <button onClick={() => handleCategoryChange('All')}>All</button>
        <button onClick={() => handleCategoryChange('Coffee')}>Coffee</button>
        <button onClick={() => handleCategoryChange('NonCoffee')}>Non-Coffee</button>
        <button onClick={() => handleCategoryChange('Ade')}>Ade</button>
        <button onClick={() => handleCategoryChange('Smoothie')}>Smoothie</button>
        <button onClick={() => handleCategoryChange('ShavedIce')}>Shaved Ice</button>
      </div>
      <MenuCategory title={selectedCategory} items={filteredMenuItems} addToCart={addToCart} showAddToCart={true}/>

      {/* 장바구니 아이콘 */}
      <div
        className='cart-icon'
        onMouseEnter={() => setCartHover(true)}
        onMouseLeave={() => setCartHover(false)}
      >
        <AiOutlineShoppingCart size={40} />
        {cartItems.length > 0 && <span>{cartItems.reduce((acc, item) => acc + item.quantity, 0)}</span>}
      </div>

      {/* 장바구니 모달 */}
      <div
        className={`cart-modal ${cartHover ? 'visible' : ''}`}
        onMouseEnter={() => setCartHover(true)}
        onMouseLeave={() => setCartHover(false)}
      >
        <h2>Cart</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price} x {item.quantity}
              <div className='modal-btn-group'>
                <button onClick={() => updateItemQuantity(index, -1)}>-</button>
                <button onClick={() => updateItemQuantity(index, 1)}>+</button>
                <button onClick={() => removeFromCart(index)}>X</button>
              </div>
            </li>
          ))}
        </ul>
        <div className='total-price'>Total: {calculateTotalPrice().toLocaleString()}원</div>
        <button className='checkout-button'>Proceed to Checkout</button>
      </div>
    </div>
  );
}

export default Order;
