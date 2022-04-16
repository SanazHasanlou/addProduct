import React from "react";
import "./ProductList.css";
import Product from "../Product/Product";
const ProductList = ({ products, onDelete }) => {
  return (
    <div className="productlist">
      {products.map((item) => {
        return <Product key={item.id} product={item} onDelete={onDelete}/>;
      })}
    </div>
  );
};

export default ProductList;
