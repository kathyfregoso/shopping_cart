import React from "react";
import CartItem from "./CartItem";
import Button from "./Button";

const Cart = () => {
  return (
    <div className="cart">
      <h2>Your Cart</h2>
      <table className="cart-items">
        <thead>
          <tr>
            <th>Item</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <CartItem />
          </tr>
          <tr>
            <td colSpan="3" className="total">
              Total: $729.98
            </td>
          </tr>
        </tbody>
      </table>
      <Button name="button checkout" text="Checkout" />
    </div>
  );
};

export default Cart;
