import React from 'react'
import Span from '../Atoms/Span/Span'

const DetailDescription = ({desc}:{desc:String}) => {
  return (
    <div className="detail__desc shopee__container">
      <h3>MÔ TẢ SẢN PHẨM</h3>
      <Span desc={desc} />
    </div>
  )
}

export default DetailDescription