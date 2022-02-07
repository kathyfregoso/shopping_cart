import React from "react";
import Products from "./Products";
import Button from "./Button";

const ProductTable = ({ products }) => {
  return (
    <>
      <main>
        <Products products={products} />
        <div class='add-form'>
          <Button className='button add-product-button' name='Add a Product' />
        </div>
      </main>
    </>
  );
};

export default ProductTable;
