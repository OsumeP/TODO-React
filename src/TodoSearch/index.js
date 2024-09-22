import React from "react";
import "./TodoSearch.css";
import { todoContext } from "../TodoContext";

function TodoSearch(){
    const {searchedVal,
        setSearchedVal,} = React.useContext(todoContext);
    return(
        <input placeholder="Buscar TODO" type="text" className="todo_search" value={searchedVal}
            onChange={(event) => setSearchedVal(event.target.value)}
        />
    )
}

export {TodoSearch}