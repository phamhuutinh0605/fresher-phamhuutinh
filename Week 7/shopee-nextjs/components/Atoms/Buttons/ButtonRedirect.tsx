import React from 'react'
import { FaEye } from 'react-icons/fa'

interface Props {
  handleRedirects: () => void;
}

const ButtonRedirect = ({ handleRedirects }: Props) => {
  return (
    <button className="btn__outline" onClick={handleRedirects} style={{padding:10}}>
      <FaEye/>
    </button>
  )
}

export default ButtonRedirect;