import React, { useState, useEffect } from "react";
import { API } from "aws-amplify";
import AddTodoForm from "./AddTodoForm";
import TodoItem from "./TodoItem";

function TodoList() {
  const [todos, setTodos] = useState([]);

  const handleAddTodo = async (todo) => {
    // const newTodo = await API.post('todos', '/todos', {
    //   body: todo,
    // });
    // setTodos([...todos, newTodo]);
    setTodos([...todos, todo]);
  };

  const handleDeleteTodo = async (id) => {
    // await API.del("todos", `/todos/${id}`);
    // const updatedTodos = todos.filter((todo) => todo.id !== id);
    // setTodos(updatedTodos);

    const updatedTodos = todos.filter((todo) => todo.id !== id);
    setTodos(updatedTodos);
  };

  useEffect(() => {
    // const fetchTodos = async () => {
    //   const data = await API.get("todos", "/todos");
    //   setTodos(data);
    // };
    // fetchTodos();
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      <AddTodoForm onAdd={handleAddTodo} />
      <ul>
        {todos.map((todo) => (
          <TodoItem key={todo.id} todo={todo} onDelete={handleDeleteTodo} />
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
