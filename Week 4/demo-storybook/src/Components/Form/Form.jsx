import React, { useRef, useState } from "react";
import CancelButton from "../Atoms/CancelButton/CancelButton";
import SubmitButton from "../Atoms/SubmitButton/SubmitButton.jsx";
import NameInput from "../Atoms/NameInput/NameInput";
import SelectInput from "../Atoms/SelectInput/SelectInput";

const Form = ({ newItem, setNewItem }) => {
  const [name, setName] = useState("");
  const level = useRef(null);

  const addItem = () => {
    console.log(name, level.current.value);
    setNewItem([
      ...newItem,
      {
        id: "abc" + Math.floor(Math.random() * 100),
        name,
        level: level.current.value,
      },
    ]);
  };
  return (
    <form className="form-inline">
      <div className="form-group" style={{ display: "flex" }}>
        <NameInput name={name} setName={setName} />
        <SelectInput level={level}/>
        <SubmitButton addItem={addItem} />
        <CancelButton />
      </div>
    </form>
  );
};

export default Form;
