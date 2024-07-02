import './TodoCounter.css';

function TodoCounter(props){
    return(
      <h1 style={{fontSize : '24px',
        textAlign:  'center',
        margin: '0px',
        padding: '48px',
      }}> Has completado {props.completed} de {props.total} TODOs</h1>
    );
  }

  export {TodoCounter}