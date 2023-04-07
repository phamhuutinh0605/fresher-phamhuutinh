import React from "react";

const NameInput = ({name,setName}) => {
  return (
    <input
      type="text"
      className="form-control name__input"
      placeholder="Name"
      style={{ width: 150, marginLeft: 10 }}
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
  );
};

export default NameInput;
