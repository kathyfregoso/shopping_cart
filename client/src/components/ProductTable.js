import React from "react";
import Products from "./Products";
import Button from "./Button";

const ProductTable = ({ products }) => {
  return (
    <>
      <main>
        <Products products={products} />
        <div class='add-form'>
          <Button name='button add-product-button' text='Add a Product' />
        </div>
      </main>
    </>
  );
};

export default ProductTable;
