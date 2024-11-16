// src/App.jsx
import React, { useState } from "react";
import ProductList from "./ProductList";
import AddProductForm from "./AddProductForm";

const App = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Laptop", price: 1200, description: "A powerful laptop." },
    { id: 2, name: "Phone", price: 800, description: "A smartphone with a great camera." },
  ]);

  const addProduct = (newProduct) => {
    setProducts([...products, { ...newProduct, id: products.length + 1 }]);
  };

  return (
    <div>
      <h1>Product Dashboard</h1>
      <ProductList products={products} />
      <AddProductForm addProduct={addProduct} />
    </div>
  );
};

export default App;
