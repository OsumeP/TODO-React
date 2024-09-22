import "./TodosLoading.css";
function TodosLoading(){
    return(
        <>
            <img src='./img/loading2.gif' alt='Loading...' className="loading_img"></img>
            <p className="loading_text">Loading Todos...</p>
        </>
    )
}

export {TodosLoading}