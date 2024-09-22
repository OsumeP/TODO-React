import './TodoItem.css';
import React from 'react';
import {ReactComponent as Check} from './icons/check.svg'; 
import {ReactComponent as Delete} from './icons/cross.svg'; 
function TodoItem(props){

    return(
      <li className={`todo_item`}>
        <div className={`item_action item_action--complete ${props.todo.completed && "item_action--completed"}`}
        onClick={() => {
          let newTodo = {...props.todo}
          newTodo.completed = !props.todo.completed
          let newTodosArr = [...props.todosArr]
          for(let i = 0; i < newTodosArr.length; i++){
            if(newTodosArr[i].id === props.todo.id ){
              newTodosArr[i] = newTodo
            }
          }
          props.setTodos(newTodosArr)
        }}
        ><Check fill={(props.todo.completed) ? '#FFFFFF' : '#000000'} className='svg svg--check'/></div>

        <p className={`item_description ${props.todo.completed && "item_description--completed"}`}>{props.todo.task}</p>
        
        <div className={`item_action item_action--delete`}

        onClick={
          () => {
          let newArr = props.todosArr.filter((current) => current.id !== props.todo.id);
          props.setTodos(newArr);
        }}>
          
          <Delete className='svg svg--delete' fill='#000000'/></div>
      </li>
    ); 
  }

export {TodoItem}