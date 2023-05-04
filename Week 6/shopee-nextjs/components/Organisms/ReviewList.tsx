import { User } from '@/types'
import React from 'react'
import Reivew from '../Molecules/Reivew'

interface Props{
  handleFilterPost: () =>any ;
}
const ReviewList = ({handleFilterPost}:Props) => {
  return (
    <div className="product__review shopee__container">
      <h3>ĐÁNH GIÁ SẢN PHẨM</h3>
      {handleFilterPost().map((item: User) => {
        return (
          <Reivew key={String(item.id)} item={item} />
        )
      })}
    </div>
  )
}

export default ReviewList