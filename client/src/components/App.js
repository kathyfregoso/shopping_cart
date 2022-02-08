import React, { useEffect, useState } from "react";
import ShopHeader from "./ShopHeader";
import ProductTable from "./ProductTable";
import productService from "../services/productService";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getAllProducts = async () => {
      let data = await productService.getProducts();
      setProducts(data);
    };
    getAllProducts();
  }, []);

  return (
    <div id="app">
      <ShopHeader />
      <ProductTable products={products} setProducts={setProducts} />
    </div>
  );
};

export default App;

/* 
ShopHeader
  Cart
    Cart Item
    Total Component
    Button Checkout
ProductTable
  Products
    Product
      button (Add to Cart)
      button (edit)
  Button (add a product)
*/
