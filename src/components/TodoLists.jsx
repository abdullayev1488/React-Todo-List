function TodoLists({ todos,deleteTodo }) {
    return (
        <ul className="todo__list">
            {
                todos.map((todo,index) => 
                    <li key={index}>
                        <span>{todo}</span>
                        <button onClick={() => deleteTodo(index)}>Sil</button>
                    </li>
                )
            }
        </ul>
    )
}

export default TodoLists