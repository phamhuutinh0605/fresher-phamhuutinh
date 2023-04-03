import { DataStore } from 'aws-amplify';
import './App.css';
import TodoList from './ToDoList';

function App() {
  // const addUser = async()=>{
  //   await DataStore.save(
  //     new Users({
  //     "username": "Lorem ipsum dolor sit amet",
  //     "email": "Lorem ipsum dolor sit amet",
  //     "password": "Lorem ipsum dolor sit amet",
  //     "Tasks": []
  //   })
  // );
  // }
  return (
    <>
      <TodoList/>
    </>
  );
}

export default App;
