import React from 'react'
import TitleProduct from '../Atoms/Title/TitleProduct'
import ButtonClose from '../Atoms/Buttons/ButtonClose'
import ImageProduct from '../Atoms/Images/ImageProduct'
import SpanDescription from '../Atoms/Span/SpanDescription'
import ButtonRedirect from '../Atoms/Buttons/ButtonRedirect'
import ButtonAddToCart from '../Atoms/Buttons/ButtonAddToCart'
import ButtonBuy from '../Atoms/Buttons/ButtonBuy'
import SpanPrice from '../Atoms/Span/SpanPrice'
import { Product } from '@/types'

interface Props {
  product: Product;
  handleAddToCart: () => void;
  handleRedirects: () => void;
  handleClose: () => void;
}

const Modal = ({ handleRedirects, handleAddToCart, handleClose, product }: Props) => {
  return (
    <div>
      <div className="product__modal">
        <div className="modal__fade">
          <div className="modal__box">
            <div className="box__title">
              <TitleProduct title={product.title||"ádasdasd"} />
              <ButtonClose handleClose={handleClose} />
            </div>
            <ImageProduct image={product.image} width={500} height={300} />
            <SpanDescription desc={product.desc} />
            <div className="product__action">
              <div className="card__action">
                <ButtonRedirect handleRedirects={handleRedirects} />
                <ButtonAddToCart handleAddToCart={handleAddToCart} />
                <ButtonBuy handleAddToCart={handleAddToCart} />
              </div>
              <SpanPrice price={product.price} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal