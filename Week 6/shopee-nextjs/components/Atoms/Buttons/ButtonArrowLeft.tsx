import React from 'react'
import { FaArrowCircleLeft } from 'react-icons/fa'
interface Props{
  handleMove:(direction:String)=>void;

}
const ButtonArrowLeft = ({handleMove}:Props) => {
  return (
    <FaArrowCircleLeft
      className="arrow"
      onClick={()=>handleMove("l")}
    />
  )
}

export default ButtonArrowLeft