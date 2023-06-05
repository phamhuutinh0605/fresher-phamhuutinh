import React from 'react'
import SpanPrice from '../Atoms/Span/SpanPrice'

const DetailPrice = ({price}:{price:Number}) => {
  return (
    <div className="detail__price">
      <SpanPrice price={price} />
      <p>Gì cũng rẻ</p>
      <p>Giá tốt nhất so với các sản phẩm cùng loại trên Shopee!</p>
    </div>
  )
}

export default DetailPrice