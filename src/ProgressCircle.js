import './ProgressCircle.css';

function ProgressCircle(props){
    const style = {
        background: `conic-gradient(rgb(97, 96, 96) ${props.percentage * 100 * 3.6}deg, white 0deg)`,
    }
    return(
        <div className='circle' id='circle' 
        style={style}>
            <p>{Math.round(props.percentage * 100)}%</p>
        </div>
    )
}


export {ProgressCircle};