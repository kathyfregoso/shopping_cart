import React from "react";
import CartItem from "./CartItem";
import Button from "./Button";
import cartService from "../services/cartService";

const Cart = ({ cart, setCart }) => {
  const handleCheckout = (e) => {
    e.preventDefault();
    cartService.checkout();
    setCart([]);
  }

  const cartTotal = () => {
    let sum = 0 
    cart.forEach(item => sum += (item.quantity * item.price))
    return sum.toFixed(2)
  }

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
          
            {cart.map(item => {
              return (
                <tr><CartItem
                  key={item._id} cItem={item} 
                /></tr>
              );
            })}
          
          <tr>
            <td colSpan="3" className="total">
             {`Total: $${cartTotal()}`}
            </td>
          </tr>
        </tbody>
      </table>
      <Button onClick={handleCheckout} name="button checkout" text="Checkout" />
    </div>
  );
};

export default Cart;
