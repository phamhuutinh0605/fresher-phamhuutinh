import React from "react";

const SelectInput = ({level}) => {
  return (
    <select
      className="form-control"
      style={{ width: 150, marginLeft: 10 }}
      ref={level}
    >
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>
  );
};

export default SelectInput;
