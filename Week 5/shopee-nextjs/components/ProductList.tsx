import { useState, useEffect } from 'react';
import Product from "./Product";
import { useAppDispatch, useAppSelector } from '../store/store';
import { fetchToProductList } from '../store/productSlice';
const ProductList = () => {

  const products = useAppSelector((state) => state.product.filterProduct);

  const [productList, setProductList] = useState([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch("https://6183caa491d76c00172d1b4b.mockapi.io/api/product")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data)
        dispatch(fetchToProductList(data))
      })
  },[])
  return (
    <div className="productList">
      <div className="shopee__container">
        <div className="product__content">
          {productList.map((product: any) => {
            return (
              <Product key={String(product.id)} id={product.id} title={product.title} price={product.price} desc={product.desc} image={product.image} />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
