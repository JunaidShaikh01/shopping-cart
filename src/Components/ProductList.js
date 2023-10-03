// import React from "react";
// import "./ProductList.css";
// export default function ProductList({ cartState, dispatch }) {
//   const products = [
//     { id: 1, name: "Product 1", price: 10 },
//     { id: 2, name: "Product 2", price: 20 },
//     { id: 3, name: "Product 3", price: 30 },
//   ];

//   // function addToCart(product) {
//   //   dispatch({ type: "ADD_TO_CART", payload: product });
//   // }

//   const addToCart = (product) => {
//     dispatch({ type: "ADD_TO_CART", payload: product });
//   };
//   return (
//     <div className="productList">
//       <h1>Product List</h1>
//       <ul>
//         {products.map((product) => (
//           <li key={product.id}>
//             {product.name} - ${product.price}
//             {/* <button onClick={() => addToCart(product)}>Add Product</button> */}
//             <button onClick={() => addToCart(product)}>Add to Cart</button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

import React from "react";
import "./ProductList.css";
function ProductList({ cartState, dispatch }) {
  const products = [
    { id: 1, name: "Product 1", price: 10 },
    { id: 2, name: "Product 2", price: 20 },
    { id: 3, name: "Product 3", price: 30 },
  ];

  const addToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="productList">
      <h2>Products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - ${product.price}
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
