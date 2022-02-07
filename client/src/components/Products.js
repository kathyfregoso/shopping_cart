import React from "react";
import Product from "./Product";

const Products = ({ products }) => {
  return (
    <div class='product-listing'>
      <h2>Products</h2>
      <div class='product'>
        {products.map((product) => {
          return <Product key={product.id} {...product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
