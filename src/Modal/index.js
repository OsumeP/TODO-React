
import ReactDOM from "react-dom"
function Modal({children}){
    return ReactDOM.createPortal(
        children,
        document.body
    )
}
export {Modal}