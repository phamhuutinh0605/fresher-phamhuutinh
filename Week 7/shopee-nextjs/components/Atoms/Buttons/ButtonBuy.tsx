import Link from 'next/link'
import React from 'react'
interface Props {
  handleAddToCart: () => void;
}
const ButtonBuy = ({ handleAddToCart }: Props) => {
  return (
    <button style={{marginLeft:3}}>
      <Link
        href="/Cart"
        onClick={handleAddToCart}
      >
        Mua Ngay
      </Link>
    </button>
  )
}

export default ButtonBuy;