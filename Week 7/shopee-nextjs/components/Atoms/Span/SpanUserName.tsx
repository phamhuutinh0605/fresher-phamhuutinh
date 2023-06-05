import { User } from '@/types'
import React from 'react'

const SpanUserName = ({item}:{item:User}) => {
  return (
    <div className="username">
      <span>{item.username}</span>
    </div>
  )
}

export default SpanUserName