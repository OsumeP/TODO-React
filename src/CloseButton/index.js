import './CloseBtn.css';
import React from 'react';
import { todoContext } from '../TodoContext';
function CloseBtn(){
    const {setShowCreateTodo} = React.useContext(todoContext);
    return(
        <button className='close_btn'
        onClick={() => setShowCreateTodo(false)}>
            <img src="./agregar-icono.png"  alt='Agregar' className='close_img'></img>
        </button>
    )
}

export {CloseBtn}