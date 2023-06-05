import Image from 'next/image'
import React from 'react'

const ImageProduct = ({ image, width, height }: { image?: String, width: Number, height: Number }) => {
  return (
    <Image alt="green iguana" src={String(image)} width={Number(width)} height={Number(height)} />
  )
}

export default ImageProduct;