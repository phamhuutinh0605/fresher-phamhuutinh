import React, { useState } from "react";

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const TodoList = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTask, setNewTask] = useState<string>("");

  const addTask = () => {
    if (newTask == "") {
      alert("Vui lòng nhập tên task");
      return
    }
    const task: Task = {
      id: tasks.length + 1,
      title: newTask,
      completed: false,
    };
    setTasks([...tasks, task]);
    setNewTask("");
  };

  const toggleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        task.completed = !task.completed;
      }
      return task;
    });
    setTasks(updatedTasks);
    console.log(updatedTasks);
  };

  const deleteTask = (id: number) => {
    const filteredTasks = tasks.filter((task) => task.id !== id);
    setTasks(filteredTasks);
  };

  const taskCompleted = () => {
    let filterTask: any[];
    filterTask = tasks.filter((task) => task.completed === true)
    setTasks(filterTask);
    console.log(filterTask);
  }
  const taskIncomplete = () => {
    let filterTask: any[];
    filterTask = tasks.filter((task) => task.completed === false)
    setTasks(filterTask);
    console.log(filterTask);
  }
  return (
    <div className="text-left w-70">
      <div className="text-left w-50 m-auto">
        <h1>Todo List - Typescript </h1>
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          style={{ fontSize: 17, height: 35 }}
        />
        <button onClick={addTask} className="btn btn-success" style={{ marginLeft: 10 }}>Add Task</button>
        <button onClick={taskCompleted} className="btn btn-info" style={{ marginLeft: 10 }}>Task Completed</button>
        <button onClick={taskIncomplete} className="btn btn-warning" style={{ marginLeft: 10 }}>Task InComplete</button>
        <ul style={{ marginTop: 20 }}>
          {tasks.map((task) => (
            <li key={task.id} style={{ fontSize: 25 }} className="list-unstyled">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleComplete(task.id)}
                style={{ marginRight: 20 }}
              />
              <span style={{ textDecoration: task.completed ? "line-through" : "" }}>{task.title}</span>
              <button onClick={() => deleteTask(task.id)} className="btn btn-danger" style={{ marginLeft: 70, fontSize: 15 }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;
