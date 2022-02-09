import React from "react";
import Product from "./Product";
import productService from "../services/productService";
import cartService from "../services/cartService";

const Products = ({ products, setProducts, cart, setCart }) => {

  const handleUpdateProduct = async (updatedObject, id) => {
    let newProduct = await productService.editProduct(id, updatedObject);
    let newProductList = products.map((product) =>
      product._id === id ? newProduct : product
    );
    setProducts(newProductList);
  };

  const handleDelete = async (id) => {
    await productService.deleteProduct(id)
    let newProductList = products.filter(product => product._id !== id)
    setProducts(newProductList)
  }

  const handleAddProdToCart = async (id) => {
    let { product, item } = await cartService.addToCart(id);
    let itemInCart = cart.find(cItem => cItem._id === item._id);
    if (itemInCart) {
      let newCart = cart.map(cItem => cItem._id === itemInCart._id ? item : cItem);
      setCart(newCart);
    } else {
      setCart(cart.concat(item));
    }
    let newProductList = products.map(pdct => pdct._id === id ? product : pdct);
    setProducts(newProductList);
  }

  return (
    <div className="product-listing">
      <h2>Products</h2>
      {products.map((product) => {
        return (
          <Product
            key={product._id}
            onUpdate={handleUpdateProduct}
            onDelete={handleDelete}
            onAdd={handleAddProdToCart}
            product={product}
          />
        );
      })}
    </div>
  );
};

export default Products;
