import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'

function App() {
  const [todos, setTodos] = useState([]);

  //this will keep on re-rendering again and again.
  //so, this is a wrong way of doing a fetch.
  fetch("http://localhost:3000.todos")
  .then(async function(res) {
    const json = await res.json();
    setTodos(json.todos);
  })
  
  return (
      <div>
        <CreateTodo></CreateTodo> 
        <Todos todos={todos}></Todos>
      </div>
  )
} 

export default App