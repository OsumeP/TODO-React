import './TodoCounter.css';

function TodoCounter(props){
    return(
      <h1 className={`${props.className}`}> Has completado {props.completed} de {props.total} ToDos.</h1>
    );
  }

  export {TodoCounter}