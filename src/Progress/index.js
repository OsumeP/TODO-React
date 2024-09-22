import  {ProgressCircle} from '../ProgressCircle'
import { TodoCounter } from '../TodoCounter';
import './Progress.css'
import { todoContext } from '../TodoContext';

function Progress(){
    return(
        <todoContext.Consumer>
            {({completedCount,
                totalTodos}
            ) => (
            <div className='progress'>
                <TodoCounter className = "counter_progress"/>
                <img src='./img/progress.png' alt='' className='sit_progress'></img>
                <picture>
                    <source srcSet={(totalTodos === completedCount) ? './img/celebration.gif' : "#"} media="(min-width: 1024px)"></source>
                    <img src = "#" alt = "" className='celebration celebration--1'></img>
                </picture>
                <ProgressCircle percentage={(totalTodos > 0) ? completedCount / totalTodos : 1}/>
                <picture>
                    <source srcSet={(totalTodos === completedCount) ? './img/celebration.gif' : "#"} media="(min-width: 1024px)"></source>
                    <img src = "#" alt = "" className='celebration celebration--2'></img>
                </picture>
            </div>
            )}
        </todoContext.Consumer>
    )
}

export  {Progress}