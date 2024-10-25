// import React from 'react';

// function MenuItem({ item }) {
//   const getAvalilabilityClass = (availability) => {
//     if (availability === "Only Ice") return 'ice-only';
//     if (availability === "Only Hot") return 'hot-only';
//     return '';  
//   };

//   return (
//     <div className='menu-item'>
//       <img src={item.image} alt={item.name} className='menu-image' />
//       <h6 className={getAvalilabilityClass(item.availability)}>{item.availability}</h6>
//       <h4>{item.name}</h4>
//       <p>{item.price}</p>
//     </div>
//   );
// }

// export default MenuItem;

import React from 'react';

function MenuItem({ item, addToCart, showAddToCart }) {
  const getAvalilabilityClass = (availability) => {
    if (availability === "Only Ice") return 'ice-only';
    if (availability === "Only Hot") return 'hot-only';
    return '';  
  };

  return (
    <div className='menu-item'>
      <img src={item.image} alt={item.name} className='menu-image' />
      <h6 className={getAvalilabilityClass(item.availability)}>{item.availability}</h6>
      <h4>{item.name}</h4>
      <p>{item.price}</p>
      {showAddToCart && <button onClick={() => addToCart(item)}>주문하기</button>}
    </div>
  );
}

export default MenuItem;

