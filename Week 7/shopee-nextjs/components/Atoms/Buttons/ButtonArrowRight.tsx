import React from 'react'
import { FaArrowCircleRight } from 'react-icons/fa'
interface Props{
  handleMove:(direction:String)=>void;

}
const ButtonArrowRight = ({handleMove}:Props) => {
  return (
    <FaArrowCircleRight
      className="arrow"
      onClick={()=>handleMove("r")}
    />
  )
}

export default ButtonArrowRight