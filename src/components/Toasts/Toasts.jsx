import Toast from './Toast'

function Toasts({ toasts, removeToast }) {
    return (
        <div className="position-fixed" style={{ right: "15px", bottom: "10px" }}>
            {
                toasts.map((toast) => <Toast key={toast.id} id={toast.id} message={toast.message} removeToast={removeToast} />)
            }
        </div>
    )
}

export default Toasts