import React from "react";
import ProductList from "./ProductList";
import "./ShoppingCart.css";
import { useReducer } from "react";
import Cart from "./Cart";
function cartReducer(state, action) {
  if (action.type === "ADD_TO_CART") {
    return {
      ...state,
      cart: [...state.cart, action.payload],
    };
  }
  if (action.type === "REMOVE_FROM_CART") {
    return {
      ...state,
      cart: state.cart.filter((item) => item.id !== action.payload.id),
    };
  } else {
    return state;
  }
}
export default function ShoppingCart() {
  const [cartState, dispatch] = useReducer(cartReducer, { cart: [] });
  return (
    <div className="shoppingCart">
      <ProductList dispatch={dispatch} cartState={cartState} />
      <Cart dispatch={dispatch} cartState={cartState} />
    </div>
  );
}
