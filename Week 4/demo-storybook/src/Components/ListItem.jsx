import React, { useEffect, useState } from "react";
import Item from "./Item";

const ListItem = ({newItem}) => {
  let listItems = [
    {
      id: "abc1",
      name: "Tìm thấy mảnh vỡ máy bay rơi ở Iran làm 66 người chết",
      level: "High", // high
    },
    {
      id: "abc2",
      name: "Không còn tranh cướp lộc hoa tre ở lễ hội đền Gióng 2018",
      level: "Low", // low
    },
    {
      id: "abc3",
      name: "Hơn 37.000 người nhập viện vì tai nạn giao thông, đốt pháo",
      level: "Medium", // medium
    },
    {
      id: "abc4",
      name: "Gần 200 người chết vì tai nạn giao thông 7 ngày nghỉ Tết",
      level: "Low", // low
    },
    {
      id: "abc5",
      name: "VFF giải ngân 15 tỷ đồng, tiền thưởng tới tay U23 VN trước Tết",
      level: "High", // high
    },
    {
      id: "abc6",
      name: "F1 muốn tổ chức giải đua xe tại Việt Nam vào năm 2020",
      level: "Medium", // medium
    },
  ];
  const [listItem, setListItem] = useState([...listItems]);
  useEffect(()=>{
    setListItem([...listItems,...newItem])
  },[newItem])
  console.log(newItem)
  const removeItem = (id) => {
    const newListItem = listItem.filter((item) => item.id !== id);
    setListItem(newListItem);
  };
  return (
    <div className="panel panel-success">
      <div className="panel-heading">List Item</div>
      <table className="table table-hover">
        <thead>
          <tr>
            <th style={{ width: "10%" }} className="text-center">
              #
            </th>
            <th>Name</th>
            <th style={{ width: "15%" }} className="text-center">
              Level
            </th>
            <th style={{ width: "15%" }}>Action</th>
          </tr>
        </thead>
        <tbody>
          {listItem.map((item) => {
            return <Item key={item.id} item={item} onRemoveItem={removeItem}/>;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ListItem;
