import React from 'react'
import { CloseBtn } from '../CloseButton'
import './CreateTodo.css'
import { todoContext } from '../TodoContext'
function CreateTodo(){
    const {addTodo} = React.useContext(todoContext)
    return (
        <div className="create_todo">
            <CloseBtn/>
            <h1 className='create_h1'> Añade un nuevo TODO </h1>
            <form className='form_create'>
                <textarea placeholder="Ver anime" className="todo_name" id='todo_name' required></textarea>
                <button className="save_todo" type='button'
                onClick={() => {
                    let nameTodo = document.getElementById('todo_name').value;
                    if(nameTodo !== ''){
                        addTodo(nameTodo);
                    }
                }}> Add </button>
            </form>
            <img src='./img/creation.gif' alt='Create Todo' className='new_todo_img'></img>
        </div>
    )
}

export {CreateTodo}