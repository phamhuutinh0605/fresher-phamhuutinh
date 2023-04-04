import React from 'react';

function TodoItem({ todo, onDelete }) {
  const handleDelete = () => {
    onDelete(todo.id);
  };

  return (
    <li>
      <h3>{todo.name}</h3>
      <p>{todo.description}</p>
      <button onClick={handleDelete}>Delete</button>
    </li>
  );
}

export default TodoItem;
