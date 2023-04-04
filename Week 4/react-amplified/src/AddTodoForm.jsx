import { DataStore } from "aws-amplify";
import React, { useState } from "react";
import { Users } from "../amplify/";

function AddTodoForm({ onAdd }) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    // await DataStore.save(
    //   new Users({
    //   "username": "Lorem ipsum dolor sit amet",
    //   "email": "Lorem ipsum dolor sit amet",
    //   "password": "Lorem ipsum dolor sit amet",
    //   "Tasks": []
    // }))
    e.preventDefault();
    const todo = { id: Date().toString(), name, description };
    onAdd(todo);
    setName("");
    setDescription("");
  }

  const add = async () => {
    // await DataStore.save(
    //   new Users({
    //   "username": "Lorem ipsum dolor sit amet",
    //   "email": "Lorem ipsum dolor sit amet",
    //   "password": "Lorem ipsum dolor sit amet",
    //   "Tasks": []
    // }))
  }
  

  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Todo</button>
      <button onClick={add}>add new</button>
    </div>
  );
}

export default AddTodoForm;
