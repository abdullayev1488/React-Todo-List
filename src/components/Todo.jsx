// 🧠 React core hooks
import { useState } from "react";

// 🆔 Unique ID generator
import { v4 as uuidv4 } from 'uuid';

// 💅 Global styles
import "../App.css";

// 🪟 Components
import TodoModal from "./TodoModal";
import TodoLists from "./TodoLists";
import TodoSearch from "./TodoSearch";
import EditTodoModal from "./EditTodoModal";

function Todo() {
    const [todos, setTodos] = useState([
        { id: uuidv4(), title: "React-da komponentlərin necə işlədiyinə bax" },
        { id: uuidv4(), title: "Portfolio saytı üçün dizayn wireframe hazırla" },
        { id: uuidv4(), title: "HTML, CSS və JavaScript mövzularını təkrar et" }
    ])
    const [query, setQuery] = useState("")
    const [newTodo, setNewTodo] = useState("")
    const [showModal, setShowModal] = useState(false)
    const [showEditModal, setShowEditModal] = useState(false)
    const [focusedEditTodo, setFocusedEditTodo] = useState(false)
    const editTodo = (editedTodo) => { setTodos(todos.map(todo => todo.id == editedTodo.id ? editedTodo : todo)); };
    const filteredTodos = todos.filter(todo => todo.title.toLowerCase().includes(query.trim().toLowerCase()))


    const addNewTodo = () => {
        if (!newTodo.trim()) {
            alert("Boş tapşırıq əlavə etmək olmaz!");
            return;
        }

        const temp = {
            id: uuidv4(),
            title: newTodo,
        };

        setTodos([temp, ...todos]);
        setShowModal(false);
    };

    const deleteTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id))

    }

    return (
        <>
            <h1 className="text-center text-white mt-3">Todo List</h1>

            {showModal && <TodoModal setNewTodo={setNewTodo} addNewTodo={addNewTodo} setShowModal={setShowModal} />}
            {showEditModal && <EditTodoModal editTodo={editTodo} setShowEditModal={setShowEditModal} focusedEditTodo={focusedEditTodo} />}

            <div className="d-flex mt-3 justify-content-center aligh-items-center position-relative">
                <div className=" p-5 bg-light rounded shadow-lg">
                    <TodoSearch setQuery={setQuery} setShowModal={setShowModal} />
                    <TodoLists deleteTodo={deleteTodo} filteredTodos={filteredTodos} setFocusedEditTodo={setFocusedEditTodo} setShowEditModal={setShowEditModal} />
                </div>
            </div>
        </>
    )
}

export default Todo
























// const editTodo = (editedTodo) => {
//     setTodos(todos.map(todo => {
//         if (todo.id == editTodo.id) {
//             return editTodo
//         }
//         return todo
//     }))
// }