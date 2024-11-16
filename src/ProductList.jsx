// src/ProductList.jsx
import React from "react";

// // Import the ProductItem component to render individual products
import ProductItem from "./ProductItem";

// Define the ProductList component, which receives 'products' as a prop
const ProductList = ({ products }) => {
  return (
    <div>
      <h2>Product List</h2>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
