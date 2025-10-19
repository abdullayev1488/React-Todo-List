import { useState } from "react"

function TodoAdd({addNewTodo}) {

    const [newTodo, setNewTodo] = useState("")
    const handleInp = ({ target }) => setNewTodo(target.value)
    const handleBtn = () => {
        if (newTodo) {
            addNewTodo(newTodo)
            setNewTodo("")
        }

    }

    return (
        <div className="todo__input">
            <input
                type="text"
                value={newTodo}
                onInput={handleInp}
                placeholder="Yeni tapşırıq əlavə et..."
            />

            <button onClick={handleBtn}>Add</button>
        </div>
    )
}

export default TodoAdd