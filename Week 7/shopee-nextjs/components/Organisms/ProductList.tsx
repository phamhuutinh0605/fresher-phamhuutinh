import { fetchToProductList } from '@/store/productSlice';
import { useAppDispatch } from '@/store/store';
import { useState, useEffect } from 'react';
import Product from './Product';


export type ProductProps = {
  desc: String;
  id: String;
  image: String;
  price: Number;
  title: String;
  quantity: Number;
}

const ProductList = () => {

  const [productList, setProductList] = useState([]);
  const dispatch = useAppDispatch();
  useEffect(() => {
    fetch("https://6183caa491d76c00172d1b4b.mockapi.io/api/product")
      .then((response) => response.json())
      .then((data) => {
        setProductList(data)
        dispatch(fetchToProductList(data))
      })
  }, [dispatch])
  return (
    <div className="productList">
      <div className="shopee__container">
        <div className="product__content">
          {productList.map((product: ProductProps) => {
            return (
              <Product key={String(product.id)}
                product={product}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default ProductList;
