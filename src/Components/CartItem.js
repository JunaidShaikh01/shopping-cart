import React from "react";

export default function CartItem({ item, dispatch }) {
  const removeFromCart = () => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };
  return (
    <li>
      {item.name} -${item.price}
      <button onClick={removeFromCart}>Remove </button>
    </li>
  );
}

// import React from "react";

// function CartItem({ item, dispatch }) {
//   const removeFromCart = () => {
//     dispatch({ type: "REMOVE_FROM_CART", payload: item });
//   };

//   return (
//     <li>
//       {item.name} - ${item.price}
//       <button onClick={removeFromCart}>Remove</button>
//     </li>
//   );
// }

// export default CartItem;
