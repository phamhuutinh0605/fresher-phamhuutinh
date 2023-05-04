import React from 'react'
interface Props{
  quantity:Number;
  handleChangeQuantity:(event:React.ChangeEvent<HTMLInputElement>)=>void;
}
const InputDetailQuantity = ({quantity,handleChangeQuantity}:Props) => {
  return (
    <div className="detail__quantity">
      <span>Số lượng </span>
      <input
        min={1}
        type="number"
        value={Number(quantity)}
        onChange={handleChangeQuantity}
        style={{ width: 40, border: "1px solid black" }}
      />
      <span style={{ marginLeft: 20 }}> 68 sản phẩm có sẵn</span>
    </div>
  )
}

export default InputDetailQuantity