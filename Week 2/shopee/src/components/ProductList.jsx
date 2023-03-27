import React, { useEffect, useState } from "react";
import Product from "./Product";

const ProductList = ({handleFilter}) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://6183caa491d76c00172d1b4b.mockapi.io/api/product")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      }, [products]);
    });

  return (
    <div className="productList">
      <div className="shopee__container">
        <div className="product__content">
          {products.map((product) => {
            return (
                <Product key={product.id} product={product} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductList;
