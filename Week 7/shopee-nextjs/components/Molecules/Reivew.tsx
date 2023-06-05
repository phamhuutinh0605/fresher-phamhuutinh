import { User } from '@/types'
import Image from 'next/image'
import React from 'react'
import SpanUserName from '../Atoms/Span/SpanUserName'
import SpanRating from '../Atoms/Span/SpanRating'
import Span from '../Atoms/Span/Span'
import SpanDateReview from '../Atoms/Span/SpanDateReview'

const Reivew = ({item}:{item:User}) => {
  return (
    <div className="review__item" >
    <div className="avatar">
      <Image src={String(item.avatar)} alt="" width={50} height={50}/>
    </div>
    <div className="review__infor">
      <SpanUserName item={item} />
      <SpanRating item={item}/>
      <div className="desc">
        <Span desc={item.desc}/>
      </div>
    <SpanDateReview item={item}/>
      <hr style={{ width: "100vh", margin: "20px 0px", color: "#f5f5f5" }} />
    </div>
  </div>
  )
}

export default Reivew