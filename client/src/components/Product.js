import React from "react";
import Button from "./Button";

const Product = ({ title, price, quantity }) => {
  return (
    <div class='product'>
      <div class='product-details'>
        <h3>{title}</h3>
        <p class='price'>{price}</p>
        <p class='quantity'>{quantity} left in stock</p>
        <div class='actions product-actions'>
          <Button className='button add-to-cart' name='Add to Cart' />
          <Button className='button edit' name='Edit' />
        </div>
        <Button className='delete-button' name='X' />
      </div>
    </div>
  );
};

export default Product;
