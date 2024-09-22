import React from 'react';
import './TodoCounter.css';
import { todoContext } from '../TodoContext';

function TodoCounter(props){
  const {completedCount, totalTodos} = React.useContext(todoContext);
  if(completedCount !== totalTodos){
    return(
      <h1 className={`${props.className}`}> Has completado {completedCount} de {totalTodos} ToDos.</h1>
    );
  }
  else{
    return(
      <h1 className={`${props.className}`}> ¡Has completado todos tus ToDos!</h1>
    )
  }
  }

  export {TodoCounter}