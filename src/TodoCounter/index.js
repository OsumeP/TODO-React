import React from 'react';
import './TodoCounter.css';
import { todoContext } from '../TodoContext';

function TodoCounter(props){
  const {completedCount, totalTodos} = React.useContext(todoContext);
  if(completedCount !== totalTodos){
    return(
      <h1 className={`${props.className}`}> You've completed {completedCount} of {totalTodos} ToDos.</h1>
    );
  }
  else{
    return(
      <h1 className={`${props.className}`}> ¡You've completed all your ToDos!</h1>
    )
  }
  }

  export {TodoCounter}