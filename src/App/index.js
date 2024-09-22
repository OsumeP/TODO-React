import React from 'react';
import { TodoContext } from '../TodoContext';
import { AppUI } from './AppUI';
import './App.css';


function App(props) {
  
  
  return(
  <TodoContext>
    <AppUI/>
  </TodoContext>

  )
}


 
export {App};
