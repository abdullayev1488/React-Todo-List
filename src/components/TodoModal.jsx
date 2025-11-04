 function TodoModal({setNewTodo, addNewTodo, setShowModal}) {
    return (
         <div className="d-flex justify-content-center align-items-center z-3 position-fixed left-0 top-0 w-100 min-vh-100" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
            <div className="p-5 bg-light rounded">
                <input onInput={({ target }) => setNewTodo(target.value)} type="text" className="form-control" placeholder="Title" />
                <div className="d-flex flex-column gap-2 mt-3">
                    <button onClick={addNewTodo} className="btn btn-success">Add</button>
                    <button onClick={() => setShowModal(false)} className="btn btn-danger">Close</button>
                </div>
            </div>
        </div>
    )
}

export default TodoModal