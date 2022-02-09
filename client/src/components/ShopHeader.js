import React from "react";
import Cart from "./Cart";

const ShopHeader = ({ cart, setCart }) => {
  return (
    <header>
      <h1>The Shop!</h1>
      <Cart cart={cart} setCart={setCart} />
    </header>
  );
};

export default ShopHeader;
