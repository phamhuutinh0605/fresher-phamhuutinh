import { User } from '@/types'
import React from 'react'
import { FaStar } from 'react-icons/fa'

const SpanRating = ({item}:{item:User}) => {
  return (
    <div className="rating">
      <span >{Number(item.rating) > 4 ? 5 : item.rating} <FaStar style={{ color: "yellow" }} /></span>
    </div>
  )
}

export default SpanRating