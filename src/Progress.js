import  {ProgressCircle} from './ProgressCircle'
import { TodoCounter } from './TodoCounter';
import './Progress.css'

function Progress(props){
    return(
        <div className='progress'>
            <TodoCounter className = "counter_progress" completed={props.completed} total = {props.total}/>
            <img src='./img/progress.png' alt='' className='sit_progress'></img>
            <ProgressCircle percentage={props.completed / props.total}/>
        </div>
    )
}

export  {Progress}