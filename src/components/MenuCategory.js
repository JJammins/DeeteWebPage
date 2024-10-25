// import React from 'react';
// import MenuItem from './MenuItem';

// function MenuCategory({ title, items }) {
//   return (
//     <div className='menu-category'>
//       <h2 className='category'>{title}</h2>
//       <div className='menu-grid'>
//         {items.map((item, index) => (
//           <MenuItem key={index} item={item} />
//         ))}
//       </div>
//       <hr />
//     </div>
//   );
// }

// export default MenuCategory;

import React from 'react';
import MenuItem from './MenuItem';

function MenuCategory({ title, items, addToCart, showAddToCart }) {
  return (
    <div className='menu-category'>
      <h2 className='category'>{title}</h2>
      <div className='menu-grid'>
        {items.map((item, index) => (
          <MenuItem key={index} item={item} addToCart={addToCart} showAddToCart={showAddToCart} />
        ))}
      </div>
      <hr />
    </div>
  );
}


export default MenuCategory;
