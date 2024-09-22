import { TodoCounter } from '../TodoCounter';
import { TodoSearch } from '../TodoSearch';
import { TodoList } from '../TodoList';
import { TodoItem } from '../TodoItem';
import { CreateTodoBtn } from '../CreateTodoBtn'; 
import {Progress} from '../Progress'
import {TodosLoading} from '../TodosLoading'
import { EmptyTodos } from '../EmptyTodos';
import { todoContext } from '../TodoContext';
import { Modal } from '../Modal';
import { CreateTodo } from '../CreateTodo';
import { DarkBg } from '../DarkBg';
function AppUI(){
    return (
      <todoContext.Consumer>
        {({
           todos,
           setTodos,
           searchedTodos,
           error,
           loading,
           showCreateTodo
        }) => (
          <>
            <Progress/>

            <div className='todo'>
              <TodoCounter className="counter_todo" />
              <img src='./img/lag-train.png' alt='' className='main_img'></img>
              <TodoSearch/>

              <TodoList>
                {loading && <TodosLoading/>}
                {error && <p>Ocurrio un error</p>}
                {!loading && todos.length === 0 && <EmptyTodos/>}
                {searchedTodos.map( todo => <TodoItem key = {todo.id} todo = {todo}
                setTodos = {setTodos} todosArr = {todos}/>)}   
              </TodoList>
      
              <CreateTodoBtn/>
            </div>

            {showCreateTodo && 
            <Modal>
              <CreateTodo/>
              <DarkBg/>
            </Modal>
            }
          </>
        )}
      </todoContext.Consumer>
      );
}

export {AppUI}