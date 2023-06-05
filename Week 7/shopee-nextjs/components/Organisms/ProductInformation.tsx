import React from 'react'
import TitleProduct from '../Atoms/Title/TitleProduct'
import DetailPrice from '../Molecules/DetailPrice'
import SpanDeal from '../Atoms/Span/SpanDeal'
import InputDetailQuantity from '../Atoms/Inputs/InputDetailQuantity'
import ButtonAddToCart from '../Atoms/Buttons/ButtonAddToCart'
import ButtonBuy from '../Atoms/Buttons/ButtonBuy'

interface Props {
  title: String;
  price: Number;
  quantity: Number;
  handleChangeQuantity: (event:React.ChangeEvent<HTMLInputElement>) => void;
  handleAddToCart: () => void;
}
const ProductInformation = ({ title, price, quantity, handleChangeQuantity, handleAddToCart }: Props) => {
  return (
    <div className="detail__information">
      <TitleProduct title={title} />
      <DetailPrice price={price} />
      <SpanDeal />
      <InputDetailQuantity quantity={quantity} handleChangeQuantity={handleChangeQuantity} />
      <div className="detail__btn">
        <ButtonAddToCart handleAddToCart={handleAddToCart} />
        <ButtonBuy handleAddToCart={handleAddToCart} />
      </div>
    </div>
  )
}

export default ProductInformation