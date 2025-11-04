function TodoSearch({setQuery, setShowModal}) {
    return (
        <div className="mb-4 d-flex gap-2 align-items-center">
            <input onInput={({ target }) => setQuery(target.value)} className="form-control" type="text" placeholder="Search" />
            <button onClick={() => setShowModal(true)} className="btn btn-lg btn-success">+</button>
        </div>
    )
}

export default TodoSearch