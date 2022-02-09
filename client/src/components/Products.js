import React from "react";
import Product from "./Product";
import productService from "../services/productService";

const Products = ({ products, setProducts }) => {

  const handleUpdateProduct = async (updatedObject, id) => {
    let newProduct = await productService.editProduct(id, updatedObject);
    let newProductList = products.map((product) =>
      product._id === id ? newProduct : product
    );
    setProducts(newProductList);
  };

  const handleDelete = async (id) => {
    await productService.deleteProduct(id)
    let newProductList = products.filter(product => product._id !== id)
    setProducts(newProductList)
  }

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            key={product._id}
            onUpdate={handleUpdateProduct}
            onDelete={handleDelete}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default Products;
