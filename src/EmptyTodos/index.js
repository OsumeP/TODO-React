import './EmptyTodos.css';
function EmptyTodos(){
    return(
        <>
            <img src='./img/empty.png' alt='Empty' className="empty_img"></img>
            <p className="empty_text"> No hay nada para hacer</p>
        </>
    )
}

export {EmptyTodos}