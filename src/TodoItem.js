import './TodoItem.css';
function TodoItem(props){
    return(
      <li className={`todo_item`}>
        <div className={`item_action item_action--complete ${props.completed && "item_action--completed"}`}>V</div>
        <p className={`item_description ${props.completed && "item_description--completed"}`}>{props.tarea}</p>
        <div className={`item_action item_action--delete`}>X</div>
      </li>
    ); 
  }

export {TodoItem}