import React, { useEffect, useState } from "react";
import ShopHeader from "./ShopHeader";
import ProductTable from "./ProductTable";
import data from "../lib/data";

const App = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(data);
  }, []);
  return (
    <div id='app'>
      <ShopHeader />
      <ProductTable products={products} />
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
