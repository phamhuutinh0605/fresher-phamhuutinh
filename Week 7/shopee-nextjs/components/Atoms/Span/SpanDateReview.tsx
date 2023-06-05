import { User } from '@/types'
import React from 'react'

const SpanDateReview = ({item}:{item:User}) => {
  return (
    <div className="dateReview">
    <span style={{ color: "#7e8388" }}>--{String(item.date)}--</span>
  </div>
  )
}

export default SpanDateReview