import React from 'react'
interface Props {
  handleAddToCart: () => void;
}
const ButtonAddToCart = ({handleAddToCart}:Props) => {

  return (
    <button
      className="btn__outline"
      onClick={handleAddToCart}
    >
      Thêm Vào Giỏ
    </button>
  )
}

export default ButtonAddToCart