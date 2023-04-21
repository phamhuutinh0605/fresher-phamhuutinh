import React from "react";

const Item = ({ item, onRemoveItem }) => {
  const removeItem = () => {
    onRemoveItem(item.id);
  };
  return (
    <tr>
      <td className="text-center">{item.id}</td>
      <td>{item.name}</td>
      <td className="text-center">
        <span className="label label-danger">{item.level}</span>
      </td>
      <td>
        <button type="button" className="btn btn-warning btn-sm">
          Edit
        </button>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          style={{ marginLeft: 10 }}
          onClick={removeItem}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Item;
