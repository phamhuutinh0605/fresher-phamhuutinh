import React from 'react'

interface Props {
  handleClose: () => void;
}
const ButtonClose = ({ handleClose }: Props) => {
  return (
    <button className="modal__close" onClick={handleClose}>
      X
    </button>
  )
}

export default ButtonClose