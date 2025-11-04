function TodoLists({ deleteTodo, filteredTodos, setShowEditModal, setFocusedEditTodo }) {
    return (
        <ul className="list-group">
            {
                filteredTodos.map(todo =>
                    <li key={todo.id} className="list-group-item mb-2 d-flex justify-content-between align-items-center gap-4">
                        {todo.title}
                        <div className="d-flex gap-2">
                            <button onClick={() => { setShowEditModal(true); setFocusedEditTodo(todo) }} className="btn border border-primary">🖋️</button>
                            <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">🗑️</button>
                        </div>
                    </li>
                )
            }
        </ul>
    )
}

export default TodoLists