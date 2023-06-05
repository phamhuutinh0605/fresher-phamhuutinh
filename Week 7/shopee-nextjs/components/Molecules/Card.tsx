import React from "react";
import ImageProduct from "../Atoms/Images/ImageProduct";
import TitleProduct from "../Atoms/Title/TitleProduct";
import { Product } from "@/types";
import ButtonActions from "./ButtonActions";

interface Props {
  product: Product;
  handleOpen: () => void;
  handleAddToCart: () => void;
}
const Card = ({ handleAddToCart, handleOpen, product }: Props) => {
  return (
    <div className="item__card">
      <ImageProduct image={product?.image} width={500} height={300} />
      <TitleProduct title={product?.title} />
      <ButtonActions
        product={product}
        handleAddToCart={handleAddToCart}
        handleOpen={handleOpen}
      />
    </div>
  );
};

export default Card;
