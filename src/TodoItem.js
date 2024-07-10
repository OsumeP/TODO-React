import './TodoItem.css';
import React from 'react';
function TodoItem(props){

  const [todo, setTodo] = React.useState(props.todo);
    return(
      <li className={`todo_item`}>
        <div className={`item_action item_action--complete ${todo.completed && "item_action--completed"}`}
        onClick={() => {
          let newTodo = {...todo}
          newTodo.completed = !todo.completed
          setTodo(newTodo)
          props.setTodos(props.todosArr)
        }}
        >V</div>

        <p className={`item_description ${todo.completed && "item_description--completed"}`}>{props.todo.task}</p>
        
        <div className={`item_action item_action--delete`}
        onClick={() => {
          let newArr = props.todosArr.filter((current) => current.id !== props.todo.id);
          props.setTodos(newArr);
        }}>X</div>
      </li>
    ); 
  }

export {TodoItem}