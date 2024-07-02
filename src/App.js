import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn'; 

const toDoArr = [{task: "Jugar Serial Experiments Lain PSX", completed: false},
  {task: "Tocar batería", completed: true},
  {task: "Platinar cuphead", completed: true},
  {task: "Comprar PS Plus", completed: false},
]

function App() {
  return (
    <>

      <TodoCounter
        completed={3}
        total={5} />
      <TodoSearch />

      <TodoList>
        {toDoArr.map( todo => <TodoItem key = {todo.task} tarea = {todo.task} completed = {todo.completed}/>)}   
      </TodoList>

      <CreateTodoBtn/>
    </>
  );
}

export default App;
