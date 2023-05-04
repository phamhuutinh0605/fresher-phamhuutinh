import React from 'react'
import ImageProduct from '../Atoms/Images/ImageProduct'
import TitleProduct from '../Atoms/Title/TitleProduct'
import ButtonDetail from '../Atoms/Buttons/ButtonDetail'
import ButtonBuy from '../../components/Atoms/Buttons/ButtonBuy';
import SpanPrice from '../Atoms/Span/SpanPrice';
import { Product } from '@/types';

interface Props {
  product: Product;
  handleOpen: () => void;
  handleAddToCart: () => void;
}
const Card = ({ handleAddToCart, handleOpen, product }: Props) => {
  return (
    <div className="item__card">
      <ImageProduct image={product.image} width={500} height={300} />
      <TitleProduct title={product.title} />
      <div className="product__action">
        <div className="">
          <ButtonDetail handleOpen={handleOpen} />
          <ButtonBuy handleAddToCart={handleAddToCart}/>
        </div>
        <SpanPrice price={product.price} />
      </div>
    </div>
  )
}

export default Card