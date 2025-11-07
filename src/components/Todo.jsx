// 🧠 React core hooks
import { useState, useEffect } from "react";

// 🆔 Unique ID generator
import { v4 as uuidv4 } from 'uuid';

// 💅 Global styles
import "../App.css";

// 🪟 Components
import TodoModal from "./TodoModal";
import TodoLists from "./TodoLists";
import Toasts from "./Toasts/Toasts";
import TodoSearch from "./TodoSearch";
import EditTodoModal from "./EditTodoModal";

// Utils
import { saveToLocalStorage, getFromLocalStorage } from "./utils/localStorageUtil";


function Todo() {
    const [todos, setTodos] = useState(getFromLocalStorage("todos") || []);
    useEffect(() => {
        saveToLocalStorage("todos", todos)
    }, [todos])

    
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
    const deleteTodo = (id) => { setTodos(todos.filter(todo => todo.id !== id)) }

    const [toasts, setToasts] = useState([])

    const addToast = ({ message }) => {
        setToasts([{ message, id: uuidv4() }, ...toasts])
    }
    const removeToast = (id) => setToasts(prev => prev.filter(toast => toast.id !== id))


    return (
        <>
            <h1 className="text-center text-white mt-3">Todo List ~ <span className=" text-warning ms-2">{todos.length}</span></h1>
            <Toasts toasts={toasts} removeToast={removeToast} />
            {showModal && <TodoModal addToast={addToast} setNewTodo={setNewTodo} addNewTodo={addNewTodo} setShowModal={setShowModal} />}
            {showEditModal && <EditTodoModal addToast={addToast} editTodo={editTodo} setShowEditModal={setShowEditModal} focusedEditTodo={focusedEditTodo} />}

            <div className="d-flex mt-3 justify-content-center aligh-items-center position-relative">
                <div className=" p-5 bg-light rounded shadow-lg">
                    <TodoSearch setQuery={setQuery} setShowModal={setShowModal} />
                    <TodoLists addToast={addToast} deleteTodo={deleteTodo} filteredTodos={filteredTodos} setFocusedEditTodo={setFocusedEditTodo} setShowEditModal={setShowEditModal} />
                </div>
            </div>
        </>
    )
}

export default Todo