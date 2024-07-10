import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoBtn } from './CreateTodoBtn'; 
import {Progress} from './Progress'
import React from 'react';

import './App.css';

const toDoArr = [{id: 1, task: "Jugar Serial Experiments Lain PSX ", completed: false},
  {id: 2, task: "Tocar batería", completed: true},
  {id: 3, task: "Platinar cuphead", completed: true},
  {id: 4, task: "Comprar PS Plus", completed: false},
  {id: 5, task: "Investigar acerca de imagen ISO", completed: false},
]
function App(props) {

  const [todos, setTodos] = React.useState(toDoArr);
  const [searchedVal, setSearchedVal] = React.useState("");
  const completedCount = todos.filter(todo => todo.completed).length;
  const totalTodos = todos.length;

  const searchedTodos = todos.filter(todo => todo.task.toLowerCase().includes(searchedVal.toLowerCase()))
  return (
    <>

      <Progress completed = {completedCount} total = {totalTodos} arr={[]}/>

      <div className='todo'>
        <TodoCounter
          completed={completedCount}
          total={totalTodos} 
          className="counter_todo" />
        <img src='./img/lag-train.png' alt='' className='main_img'></img>
        <TodoSearch searched = {searchedVal}  setSearched = {setSearchedVal}/>

        <TodoList>
          {searchedTodos.map( todo => <TodoItem key = {todo.id} todo = {todo}
          setTodos = {setTodos} todosArr = {todos}/>)}   
        </TodoList>

        <CreateTodoBtn/>
      </div>
    </>
  );
}

export default App;
