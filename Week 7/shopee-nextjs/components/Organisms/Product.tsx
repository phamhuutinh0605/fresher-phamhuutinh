import React from "react";

import { useAppDispatch } from '../../store/store';
import { addToCart } from "../../store/productSlice";
import { useRouter } from "next/router";
import Card from "../Molecules/Card";
import Modal from "../Molecules/Modal";
export type Product = {
  id: String;
  title: String;
  price: Number;
  desc: String;
  image: String;
  quantity: Number
}

const Product = ({product}:{product:Product}) => {

  let quantity = 0;
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [change, setChange] = React.useState(1);
  const dispatch = useAppDispatch();
  const handleAddToCart = () => {
    setChange(prev => prev + 1)
    dispatch(addToCart({
      id: String(product.id), title: String(product.title), price:Number(product.price), desc: String(product.desc), image:product.image, quantity: change
    }))
  }
  const router = useRouter()
  const handleRedirects = () => {
    const productItem: Product = {
      id: String(product.id), title: String(product.title), price:Number(product.price), desc: String(product.desc), image:product.image, quantity: change
    }
    router.push({
      pathname: "/DetailProduct", query: { product: JSON.stringify(productItem) }
    }, undefined, { shallow: true })
  }


  
  return (
    <div className="product__item">
      <Card handleAddToCart={handleAddToCart} handleOpen={handleOpen} product={product} />
      {open && (
        <Modal handleRedirects={handleRedirects} handleAddToCart={handleAddToCart} handleClose={handleClose} product={product}/>
      )}
    </div>
  );
};

export default Product;
