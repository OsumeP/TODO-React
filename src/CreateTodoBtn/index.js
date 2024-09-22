import React from 'react';
import './CreateTodoBtn.css';
import { todoContext } from '../TodoContext';
function CreateTodoBtn(){
    const {setShowCreateTodo} = React.useContext(todoContext);
    return(
        <button className='create_btn'
        onClick={() => setShowCreateTodo(true)}>
            <img src="./agregar-icono.png"  alt='Agregar' className='create_img'></img>
        </button>
    )
}

export {CreateTodoBtn}