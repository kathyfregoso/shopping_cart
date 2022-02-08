import React, { useState } from "react";
import Button from "./Button";
import EditProductForm from "./EditProductForm";

const Product = ({ onUpdate, product }) => {
  const [isEdit, setIsEdit] = useState(false);

  const handleToggle = () => {
    setIsEdit(!isEdit);
  };

  const handleClick = (e) => {
    e.preventDefault();
    handleToggle();
  };

  const handleSubmit = async (updatedObject) => {
    onUpdate(updatedObject, product._id);
    handleToggle();
  };

  return (
    <div className="product">
      <div className="product-details">
        <h3>{product.title}</h3>
        <p className="price">{product.price}</p>
        <p className="quantity">{product.quantity} left in stock</p>
        <div className="actions product-actions">
          {isEdit ? (
            <EditProductForm
              onSubmit={handleSubmit}
              cancelClick={handleClick}
              title={product.title}
              price={product.price}
              quantity={product.quantity}
            />
          ) : (
            <>
              <Button name="button add-to-cart" text="Add to Cart" />
              <Button onClick={handleClick} name="button edit" text="Edit" />
            </>
          )}
        </div>
        <Button name="delete-button" text="X" />
      </div>
    </div>
  );
};

export default Product;
