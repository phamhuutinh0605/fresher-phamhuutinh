import React from 'react'

const TitleProduct = ({ title }: { title: String }) => {
  return (
    <div className="product__content">
      <h5>{title}</h5>
    </div>
  )
}

export default TitleProduct