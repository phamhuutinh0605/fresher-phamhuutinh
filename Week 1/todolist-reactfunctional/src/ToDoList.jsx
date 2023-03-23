import React, { useState } from "react";

const TodoList = () => {
  const todoList = [
    {
      id: 1,
      name: "Học ReactJS Cơ Bản",
      completed: true,
    },
    {
      id: 2,
      name: "Học CSS Cơ Bản",
      completed: false,
    },
    {
      id: 3,
      name: "Học Javascript Cơ Bản",
      completed: true,
    },
    {
      id: 4,
      name: "Học Angular Cơ Bản",
      completed: false,
    },
    {
      id: 5,
      name: "Học HTML Cơ Bản",
      completed: true,
    },
    {
      id: 6,
      name: "Học ReactJS Nâng Cao",
      completed: false,
    },
  ];
  const [todos, setTodos] = useState([...todoList]);
  const [filter, setFilter] = useState([]);
  const [name, setName] = useState("");
  const [completed, setCompleted] = useState(false);

  const addTodo = () => {
    if (name) {
      setTodos([...todos, { id: todos.length + 1, name, completed }]);
      console.log(name, completed);
    } else {
      alert("Vui lòng nhập tên công việc");
    }
  };

  const removeTodo = (index) => {
    setTodos(todos.filter((todo) => todo.id !== index));
  };

  const toggleCompleted = (index) => {
    const newTodos = todos.map((todo) => {
      if (todo.id === index) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(newTodos);
    console.log(todos);
  };

  // const onTaskCompleted=()=>{
  //   let newTodos=todoList.filter(todo=>todo.completed===true)
  //   console.log(newTodos);
  //   setTodos(newTodos)
  // }
  // const onTaskInComplete=()=>{
  //   let newTodos=todoList.filter(todo=>todo.completed===false)
  //   console.log(newTodos);
  //   setTodos(newTodos)
  // }
  return (
    <div className="text-left w-70">
      <div className="text-left w-50 m-auto">
        <h1>Todo List - React Functional Component</h1>
        <input
          type="text"
          style={{ fontSize: 17, height: 35, width: "50%" }}
          onChange={(e) => setName(e.target.value)}
        />
        <button
          type="submit"
          className="btn btn-success"
          onClick={addTodo}
          style={{ marginLeft: 10 }}
        >
          Add
        </button>
        {/* <button type="submit" className="btn btn-success" onClick={onTaskCompleted} style={{ marginLeft: 10 }}>
          Task Completed
        </button>
        <button type="submit" className="btn btn-warning" onClick={onTaskInComplete} style={{ marginLeft: 10 }}>
          Task InComplete
        </button> */}

        <ul style={{ marginTop: 20 }}>
          {todos.map((todo, index) => (
            <li key={index} style={{ fontSize: 25 }} className="list-unstyled">
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => toggleCompleted(todo.id)}
                style={{ marginRight: 20 }}
              />
              <span
                style={{ textDecoration: todo.completed ? "line-through" : "" }}
              >
                {todo.name}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="btn btn-danger"
                style={{ marginLeft: 70, fontSize: 15 }}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
