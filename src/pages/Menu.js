import React from 'react';
import './Menu.css';
import MenuCategory from '../components/MenuCategory';
import MenuData from '../components/MenuData';

function Menu() {

  return (
    <div className='menu-page'>
      <h1>Menu</h1>
      <hr />
      <MenuCategory title="Coffee" items={MenuData.Coffee} showAddToCart={false}/>
      <MenuCategory title="Non-Coffee" items={MenuData.NonCoffee} showAddToCart={false}/>
      <MenuCategory title="Ade" items={MenuData.Ade} showAddToCart={false}/>
      <MenuCategory title="Smoothie" items={MenuData.Smoothie} showAddToCart={false}/>
      <MenuCategory title="Shaved-Ice" items={MenuData.ShavedIce} showAddToCart={false}/>
    </div>
  );
}

export default Menu;
