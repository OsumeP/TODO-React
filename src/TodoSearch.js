import "./TodoSearch.css";

function TodoSearch(props){
    return(
        <input placeholder="Buscar TODO" type="text" className="todo_search" value={props.searched}
            onChange={(event) => props.setSearched(event.target.value)}
        />
    )
}

export {TodoSearch}