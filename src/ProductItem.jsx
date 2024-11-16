// src/ProductItem.jsx
import React from "react";

// Define the ProductItem component, which receives a 'product' object as a prop
const ProductItem = ({ product }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <h3>{product.name}</h3>
      <p>Price: ${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductItem;
