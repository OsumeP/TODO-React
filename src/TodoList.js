import './TodoList.css'
function TodoList(props){
    return(
        <ul className="todo_list">
            {props.children}
        </ul>
    )
}

export{ TodoList}