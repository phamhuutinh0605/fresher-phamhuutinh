import React from "react";
import ButtonDetail from "../Atoms/Buttons/ButtonDetail";
import ButtonBuy from "../Atoms/Buttons/ButtonBuy";
import SpanPrice from "../Atoms/Span/SpanPrice";
import { Product } from "@/types";

interface Props {
  handleOpen: () => void;
  handleAddToCart: () => void;
  product: Product;
}
const ButtonActions = ({ handleAddToCart, handleOpen, product }: Props) => {
  return (
    <div className="product__action">
      <div className="">
        <ButtonDetail handleOpen={handleOpen} />
        <ButtonBuy handleAddToCart={handleAddToCart} />
      </div>
      <SpanPrice price={Number(product?.price)} />
    </div>
  );
};

export default ButtonActions;
