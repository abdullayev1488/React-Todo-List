import { useState } from "react"
import TodoAdd from "./TodoAdd"
import TodoLists from "./TodoLists"
export function Todo() {

  const [todos, setTodos] = useState([
    "React öyrənmək",
    "HTML və CSS təkrar et",
    "Yeni layihə yarat",
  ])

  const addNewTodo = (newTodo) => setTodos([newTodo, ...todos])
  const deleteTodo = (index) => setTodos(todos.filter((_, i )=> i !== index))

  return (
    <div className="todo">
      <h1>To-Do List / {todos.length}</h1>
      <TodoAdd addNewTodo={addNewTodo} />
      <TodoLists todos={todos} deleteTodo = {deleteTodo}/>
    </div>
  )
}

export default Todo