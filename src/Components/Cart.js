import React from "react";
import "./Cart.css";
import CartItem from "./CartItem";
export default function Cart({ dispatch, cartState }) {
  const totalprice = cartState.cart.reduce(
    (total, item) => total + item.price,
    0
  );
  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cartState.cart.map((item) => (
          <CartItem key={item.id} item={item} dispatch={dispatch} />
        ))}

        <p>Total Price${totalprice} </p>
      </ul>
    </div>
  );
}

// import React from "react";
// import CartItem from "./CartItem";

// function Cart({ cartState, dispatch }) {
//   const totalPrice = cartState.cart.reduce(
//     (total, item) => total + item.price,
//     0
//   );

//   return (
//     <div className="cart">
//       <h2>Cart:</h2>
//       <ul>
//         {cartState.cart.map((item) => (
//           <CartItem key={item.id} item={item} dispatch={dispatch} />
//         ))}
//       </ul>
//       <p>Total Price: ${totalPrice}</p>
//     </div>
//   );
// }

// export default Cart;
