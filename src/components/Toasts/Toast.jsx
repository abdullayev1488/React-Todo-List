import { useEffect } from "react"

function Toast({ message, removeToast, id }) {

    useEffect(() => {
        const timeout = setTimeout(() => {
            removeToast(id)
        }, 2000)
        return () => clearTimeout(timeout)
    }, [])

    return (
        <div className="toast d-block">
            <div className="toast-header">
                <strong className="me-auto">Todo</strong>
                <button onClick={() => removeToast(id)} type="button" className="btn-close"></button>
            </div>
            <div className="toast-body">{message}</div>
        </div>
    )
}

export default Toast