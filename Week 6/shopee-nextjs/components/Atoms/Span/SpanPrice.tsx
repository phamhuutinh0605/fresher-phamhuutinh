import React from 'react'

const SpanPrice = ({ price }: { price: Number }) => {
  return (
    <span style={{ fontWeight: "bolder" }}>
      $ {Number(price)}
    </span>
  )
}

export default SpanPrice