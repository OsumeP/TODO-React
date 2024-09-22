import React from "react";
import { useLocalStorage } from "./useLocalStorage";

const todoContext = React.createContext();
function TodoContext({children}){
    const {
        item: todos, 
        saveItem: setTodos,
        error,
        loading
    } = useLocalStorage([], "SAVE_TODOS_V1");
    const [searchedVal, setSearchedVal] = React.useState("");
    const [showCreateTodo, setShowCreateTodo] = React.useState(false);
    const completedCount = todos.filter(todo => todo.completed).length;
    const totalTodos = todos.length;
    const searchedTodos = todos.filter(todo => todo.task.toLowerCase().includes(searchedVal.toLowerCase()))

    const addTodo = (text) => {
        let newTodos = [...todos]
        newTodos.push({id: (newTodos.length !== 0) ? newTodos[newTodos.length - 1].id + 1 : 1, completed: false, 
        task : text});
        setTodos(newTodos)
        setShowCreateTodo(false)
    }

    return(
        <todoContext.Provider value={{
            completedCount,
            totalTodos,
            searchedVal,
            setSearchedVal,
            todos,
            setTodos,
            searchedTodos,
            error,
            loading,
            showCreateTodo,
            setShowCreateTodo,
            addTodo,
        }}>
            {children}
        </todoContext.Provider>
    )
}
export {TodoContext, todoContext};