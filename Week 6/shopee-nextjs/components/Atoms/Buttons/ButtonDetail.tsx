import React from 'react'

interface Props {
  handleOpen: () => void;
}

const ButtonDetail = ({ handleOpen }: Props) => {
  return (
    <button onClick={handleOpen} className="btn__outline">
      Chi Tiết
    </button>
  )
}

export default ButtonDetail