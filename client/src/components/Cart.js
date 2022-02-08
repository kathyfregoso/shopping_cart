import React from "react";
import CartItem from "./CartItem";
import Button from "./Button";

const Cart = () => {
  return (
    <div className='cart'>
      <h2>Your Cart</h2>
      <table className='cart-items'>
        <tr>
          <th>Item</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        <tr>
          <CartItem />
        </tr>
        <tr>
          <td colspan='3' className='total'>
            Total: $729.98
          </td>
        </tr>
      </table>
      <Button name='button checkout' text='Checkout' />
    </div>
  );
};

export default Cart;
