import React from "react";
import Button from "./Button";

const Product = ({ title, price, quantity }) => {
  return (
    <div className='product'>
      <div className='product-details'>
        <h3>{title}</h3>
        <p className='price'>{price}</p>
        <p className='quantity'>{quantity} left in stock</p>
        <div className='actions product-actions'>
          <Button name='button add-to-cart' text='Add to Cart' />
          <Button name='button edit' text='Edit' />
        </div>
        <Button name='delete-button' text='X' />
      </div>
    </div>
  );
};

export default Product;
